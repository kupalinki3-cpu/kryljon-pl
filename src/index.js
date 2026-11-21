import { PROMPTS } from './content/index.js';
import {
  GRACE_MS,
  INTRO_MS,
  LIMIT_MS,
  MAX_ANSWER_LEN,
  MIN_ANSWER_MS,
  depthBand,
  cleanName,
  isValidDay,
  PROMPTS_PER_DAY,
  matchAnswer,
  msUntilNextDay,
  normalize,
  pointsOf,
  pickPromptIds,
  prevDay,
  warsawDay,
} from './game.js';

const PROMPT_BY_ID = new Map(PROMPTS.map((p) => [p.id, p]));
const TOKEN_RE = /^[A-Za-z0-9_-]{16,64}$/;
const MAX_BODY = 2048;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
const fail = (status, error, extra = {}) => json({ error, ...extra }, status);

class HttpError extends Error {
  constructor(status, message, extra) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function readBody(request) {
  const text = await request.text();
  if (text.length > MAX_BODY) throw new HttpError(413, 'Za duże żądanie');
  try {
    const body = JSON.parse(text);
    if (body && typeof body === 'object') return body;
  } catch {
    /* spada do błędu poniżej */
  }
  throw new HttpError(400, 'Niepoprawny JSON');
}

async function playerHash(token) {
  if (typeof token !== 'string' || !TOKEN_RE.test(token)) throw new HttpError(400, 'Niepoprawny token gracza');
  return sha256Hex(`glebia:${token}`);
}

// ---------- dostęp do danych ----------

const ALL_IDS = PROMPTS.map((p) => p.id);
const MAX_MISSES = 40; // prób "bez echa" na jedno pytanie
const MODES = new Set(['daily', 'free']);

/** Zamienia zapisane id na kategorie; usunięte kiedyś id zastępuje innymi, żeby stary dzień się nie wywrócił. */
function resolvePrompts(ids) {
  const used = new Set(ids.filter((id) => PROMPT_BY_ID.has(id)));
  const spare = ALL_IDS.filter((id) => !used.has(id));
  return ids.map((id) => PROMPT_BY_ID.get(id) ?? PROMPT_BY_ID.get(spare.shift()));
}

async function dayPrompts(env, day) {
  const ids = pickPromptIds(day, ALL_IDS);
  await env.DB.prepare('INSERT OR IGNORE INTO days (day, prompts) VALUES (?, ?)').bind(day, JSON.stringify(ids)).run();
  const row = await env.DB.prepare('SELECT prompts FROM days WHERE day = ?').bind(day).first();
  return resolvePrompts(JSON.parse(row.prompts));
}

function randomIds(n = PROMPTS_PER_DAY) {
  const pool = [...ALL_IDS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}

const promptsOf = (env, run) => (run.prompts ? Promise.resolve(resolvePrompts(JSON.parse(run.prompts))) : dayPrompts(env, run.day));

const getRun = (env, day, player) =>
  env.DB.prepare("SELECT * FROM runs WHERE day = ? AND player = ? AND mode = 'daily'").bind(day, player).first();

const getFreeRun = (env, player) =>
  env.DB.prepare("SELECT * FROM runs WHERE player = ? AND mode = 'free' ORDER BY id DESC LIMIT 1").bind(player).first();

const getRunById = (env, id) => env.DB.prepare('SELECT * FROM runs WHERE id = ?').bind(id).first();

async function history(env, runId) {
  const { results } = await env.DB.prepare(
    'SELECT idx, prompt_id, raw, key, tier, meters, ms FROM answers WHERE run_id = ? ORDER BY idx',
  )
    .bind(runId)
    .all();
  return results.map((r) => ({
    idx: r.idx,
    prompt: PROMPT_BY_ID.get(r.prompt_id)?.text ?? '',
    raw: r.raw,
    shown: r.key,
    tier: r.tier,
    label: depthBand(r.meters).name,
    meters: r.meters,
    points: pointsOf(r.meters),
    ms: r.ms,
  }));
}

async function rankOf(env, run) {
  const row = await env.DB.prepare(
    `SELECT COUNT(*) + 1 AS rank FROM runs
     WHERE day = ? AND mode = 'daily' AND finished = 1
       AND (meters > ? OR (meters = ? AND total_ms < ?) OR (meters = ? AND total_ms = ? AND id < ?))`,
  )
    .bind(run.day, run.meters, run.meters, run.total_ms, run.meters, run.total_ms, run.id)
    .first();
  const players = await env.DB.prepare("SELECT COUNT(*) AS n FROM runs WHERE day = ? AND mode = 'daily' AND finished = 1")
    .bind(run.day)
    .first();
  return { rank: row.rank, players: players.n };
}

async function crowdShare(env, day, promptId, key) {
  if (!key) return null;
  const row = await env.DB.prepare(
    `SELECT COUNT(*) AS total, COALESCE(SUM(key = ?), 0) AS same
     FROM answers WHERE day = ? AND prompt_id = ? AND norm != ''`,
  )
    .bind(key, day, promptId)
    .first();
  const total = row.total + 1; // + bieżąca odpowiedź
  if (total < 5) return null; // za mało graczy, procent byłby bez sensu
  return { percent: Math.round(((row.same + 1) / total) * 100), total };
}

/** Zapisuje odpowiedź i przesuwa bieg do przodu w jednej transakcji. */
async function commitAnswer(env, run, prompts, { raw, norm, key, meters, ms }) {
  const tier = depthBand(meters).tier;
  const nextIdx = run.idx + 1;
  const finished = nextIdx >= prompts.length ? 1 : 0;
  await env.DB.batch([
    env.DB.prepare(
      `INSERT INTO answers (run_id, idx, day, prompt_id, raw, norm, key, tier, meters, ms)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(run.id, run.idx, run.day, prompts[run.idx].id, raw, norm, key, tier, meters, ms),
    env.DB.prepare(
      `UPDATE runs SET idx = ?, started_at = NULL, meters = meters + ?, total_ms = total_ms + ?, finished = ?
       WHERE id = ? AND idx = ?`,
    ).bind(nextIdx, meters, ms, finished, run.id, run.idx),
  ]);
}

/** Pytania, którym minął czas (np. po zamknięciu karty), zapisujemy jako puste i idziemy dalej. */
async function settleExpired(env, runIn, prompts, now) {
  let run = runIn;
  while (!run.finished && run.started_at != null && now > run.started_at + LIMIT_MS + GRACE_MS) {
    try {
      await commitAnswer(env, run, prompts, { raw: '', norm: '', key: null, meters: 0, ms: LIMIT_MS });
    } catch {
      /* równoległe żądanie mogło to już zapisać; przeczytaj stan od nowa */
    }
    run = await getRunById(env, run.id);
  }
  return run;
}

async function runState(env, run, prompts) {
  const state = {
    mode: run.mode,
    day: run.day,
    total: prompts.length,
    idx: run.idx,
    depth: run.meters,
    points: pointsOf(run.meters),
    finished: !!run.finished,
    history: await history(env, run.id),
  };
  if (run.finished && run.mode === 'daily') state.me = await rankOf(env, run);
  return state;
}

// ---------- obsługa tras ----------

async function handleToday(env, now) {
  const day = warsawDay(now);
  return json({
    day,
    yesterday: prevDay(day),
    total: (await dayPrompts(env, day)).length,
    resetsInMs: msUntilNextDay(now),
  });
}

const modeOf = (body) => {
  const mode = body.mode ?? 'daily';
  if (!MODES.has(mode)) throw new HttpError(400, 'Niepoprawny tryb gry');
  return mode;
};

async function handleRun(request, env, now) {
  const body = await readBody(request);
  const player = await playerHash(body.token);
  const mode = modeOf(body);

  if (mode === 'free') {
    let run = await getFreeRun(env, player);
    if (body.resume) {
      if (!run || run.finished) throw new HttpError(404, 'Brak rozpoczętej gry swobodnej');
    } else if (body.fresh || !run || run.finished) {
      const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM runs WHERE player = ? AND mode = 'free' AND created_at > ?")
        .bind(player, now - 3600_000)
        .first();
      if (recent.n >= 60) throw new HttpError(429, 'Za dużo nowych gier w ciągu godziny');
      const name = cleanName(body.name) ?? 'Gość';
      const info = await env.DB.prepare(
        "INSERT INTO runs (day, mode, player, name, prompts, created_at) VALUES ('free', 'free', ?, ?, ?, ?)",
      )
        .bind(player, name, JSON.stringify(randomIds()), now)
        .run();
      run = await getRunById(env, info.meta.last_row_id);
    }
    const prompts = await promptsOf(env, run);
    run = await settleExpired(env, run, prompts, now);
    return json(await runState(env, run, prompts));
  }

  const day = warsawDay(now);
  const prompts = await dayPrompts(env, day);
  let run = await getRun(env, day, player);
  if (!run) {
    const name = cleanName(body.name);
    if (!name) throw new HttpError(400, 'Pseudonim musi mieć od 2 do 16 znaków');
    await env.DB.prepare("INSERT OR IGNORE INTO runs (day, mode, player, name, created_at) VALUES (?, 'daily', ?, ?, ?)")
      .bind(day, player, name, now)
      .run();
    run = await getRun(env, day, player);
  }
  run = await settleExpired(env, run, prompts, now);
  return json(await runState(env, run, prompts));
}

async function loadRun(body, env, now) {
  const player = await playerHash(body.token);
  const mode = modeOf(body);
  const run = mode === 'free' ? await getFreeRun(env, player) : await getRun(env, warsawDay(now), player);
  if (!run) throw new HttpError(404, 'Najpierw rozpocznij nurkowanie');
  const prompts = await promptsOf(env, run);
  return { run: await settleExpired(env, run, prompts, now), prompts };
}

async function handlePrompt(request, env, now) {
  const { run: loaded, prompts } = await loadRun(await readBody(request), env, now);
  let run = loaded;
  if (run.finished) return json(await runState(env, run, prompts));
  if (run.started_at == null) {
    await env.DB.prepare('UPDATE runs SET started_at = ? WHERE id = ? AND idx = ? AND started_at IS NULL')
      .bind(now + INTRO_MS, run.id, run.idx)
      .run();
    run = await getRunById(env, run.id);
  }
  return json({
    idx: run.idx,
    total: prompts.length,
    text: prompts[run.idx].text,
    startsInMs: Math.max(0, run.started_at - now),
    remainingMs: Math.max(0, run.started_at + LIMIT_MS - now),
    depth: run.meters,
    points: pointsOf(run.meters),
  });
}

async function handleAnswer(request, env, now) {
  const body = await readBody(request);
  const { run, prompts } = await loadRun(body, env, now);
  if (run.finished || body.idx !== run.idx || run.started_at == null) {
    // Bieg poszedł dalej (np. minął czas): klient dostaje aktualny stan i pokazuje wynik z historii.
    throw new HttpError(409, 'Ta odpowiedź jest już nieaktualna', { state: await runState(env, run, prompts) });
  }
  const raw = typeof body.answer === 'string' ? body.answer.slice(0, MAX_ANSWER_LEN) : '';
  const prompt = prompts[run.idx];
  const match = matchAnswer(prompt, raw);

  if (!match) {
    // Brak echa: odpowiedzi nie ma w bazie. Pytanie trwa dalej, zegar się nie zatrzymuje, gracz próbuje jeszcze raz.
    const norm = normalize(raw);
    if (!norm) return json({ noEcho: true, empty: true, tries: 0 });
    const prev = await env.DB.prepare('SELECT COUNT(*) AS n FROM misses WHERE run_id = ? AND idx = ?')
      .bind(run.id, run.idx)
      .first();
    if (prev.n >= MAX_MISSES) throw new HttpError(429, 'Za dużo prób przy tym pytaniu');
    await env.DB.prepare('INSERT INTO misses (run_id, idx, prompt_id, raw, norm, created_at) VALUES (?, ?, ?, ?, ?, ?)')
      .bind(run.id, run.idx, prompt.id, raw, norm, now)
      .run();
    return json({ noEcho: true, raw, tries: prev.n + 1, maxTries: MAX_MISSES });
  }

  const meters = match.meters;
  const ms = Math.min(LIMIT_MS, Math.max(MIN_ANSWER_MS, now - run.started_at));
  const share = await crowdShare(env, run.day, prompt.id, match.shown);
  try {
    await commitAnswer(env, run, prompts, { raw, norm: match.norm, key: match.shown, meters, ms });
  } catch {
    const fresh = await getRunById(env, run.id);
    throw new HttpError(409, 'Ta odpowiedź została już zapisana', { state: await runState(env, fresh, prompts) });
  }
  const after = await getRunById(env, run.id);
  const band = depthBand(meters);
  const result = {
    idx: run.idx,
    raw,
    shown: match.shown,
    tier: band.tier,
    label: band.name,
    meters,
    points: pointsOf(meters),
    ms,
    share,
  };
  return json({ result, state: await runState(env, after, prompts) });
}

async function handleLeaderboard(request, env, now) {
  const url = new URL(request.url);
  const today = warsawDay(now);
  const day = url.searchParams.get('day') || today;
  if (!isValidDay(day) || day > today) throw new HttpError(400, 'Niepoprawna data');
  const { results } = await env.DB.prepare(
    `SELECT id, name, meters, total_ms FROM runs WHERE day = ? AND mode = 'daily' AND finished = 1
     ORDER BY meters DESC, total_ms ASC, id ASC LIMIT 50`,
  )
    .bind(day)
    .all();
  const players = await env.DB.prepare("SELECT COUNT(*) AS n FROM runs WHERE day = ? AND mode = 'daily' AND finished = 1")
    .bind(day)
    .first();
  const out = {
    day,
    players: players.n,
    rows: results.map((r, i) => ({
      rank: i + 1,
      name: r.name,
      points: pointsOf(r.meters),
      depth: r.meters,
      ms: r.total_ms,
    })),
  };
  const token = request.headers.get('x-player-token');
  if (token && TOKEN_RE.test(token)) {
    const run = await getRun(env, day, await sha256Hex(`glebia:${token}`));
    if (run && run.finished) out.me = await rankOf(env, run);
  }
  return json(out);
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Najczęstsze odpowiedzi bez echa (po jednym głosie na gracza): surowiec do rozbudowy bazy o nowe wpisy. */
async function handleUnmatched(request, env) {
  const auth = request.headers.get('authorization') || '';
  const expected = env.ADMIN_TOKEN ? `Bearer ${env.ADMIN_TOKEN}` : null;
  if (!expected || !safeEqual(auth, expected)) throw new HttpError(401, 'Brak dostępu');
  const url = new URL(request.url);
  const min = Math.max(1, Number(url.searchParams.get('min')) || 2);
  const limit = Math.min(500, Math.max(1, Number(url.searchParams.get('limit')) || 200));
  const { results } = await env.DB.prepare(
    `SELECT prompt_id, norm, MIN(raw) AS sample, COUNT(DISTINCT run_id) AS n
     FROM misses GROUP BY prompt_id, norm HAVING n >= ? ORDER BY n DESC LIMIT ?`,
  )
    .bind(min, limit)
    .all();
  return json({ rows: results });
}

export async function handle(request, env, now = Date.now()) {
  const url = new URL(request.url);
  const { pathname } = url;
  try {
    if (!pathname.startsWith('/api/')) {
      return env.ASSETS ? env.ASSETS.fetch(request) : fail(404, 'Nie znaleziono');
    }
    if (request.method === 'GET' && pathname === '/api/today') return await handleToday(env, now);
    if (request.method === 'GET' && pathname === '/api/leaderboard') return await handleLeaderboard(request, env, now);
    if (request.method === 'GET' && pathname === '/api/admin/unmatched') return await handleUnmatched(request, env);
    if (request.method === 'POST' && pathname === '/api/run') return await handleRun(request, env, now);
    if (request.method === 'POST' && pathname === '/api/prompt') return await handlePrompt(request, env, now);
    if (request.method === 'POST' && pathname === '/api/answer') return await handleAnswer(request, env, now);
    return fail(404, 'Nie znaleziono');
  } catch (err) {
    if (err instanceof HttpError) return fail(err.status, err.message, err.extra);
    console.error('błąd obsługi żądania', err);
    return fail(500, 'Błąd serwera');
  }
}

export default {
  fetch: (request, env) => handle(request, env),
};
