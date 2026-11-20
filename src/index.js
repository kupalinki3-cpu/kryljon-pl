import { PROMPTS } from './content/index.js';
import {
  GRACE_MS,
  INTRO_MS,
  LIMIT_MS,
  MAX_ANSWER_LEN,
  METERS_PER_POINT,
  MIN_ANSWER_MS,
  TIERS,
  cleanName,
  isValidDay,
  matchAnswer,
  msUntilNextDay,
  normalize,
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

async function dayPrompts(env, day) {
  const ids = pickPromptIds(day, PROMPTS.map((p) => p.id));
  await env.DB.prepare('INSERT OR IGNORE INTO days (day, prompts) VALUES (?, ?)').bind(day, JSON.stringify(ids)).run();
  const row = await env.DB.prepare('SELECT prompts FROM days WHERE day = ?').bind(day).first();
  // Id kategorii nigdy nie usuwamy z treści, inaczej stary dzień by się rozjechał.
  return JSON.parse(row.prompts).map((id) => PROMPT_BY_ID.get(id));
}

const getRun = (env, day, player) =>
  env.DB.prepare('SELECT * FROM runs WHERE day = ? AND player = ?').bind(day, player).first();

const getRunById = (env, id) => env.DB.prepare('SELECT * FROM runs WHERE id = ?').bind(id).first();

async function history(env, runId) {
  const { results } = await env.DB.prepare(
    'SELECT idx, prompt_id, raw, key, tier, points, ms FROM answers WHERE run_id = ? ORDER BY idx',
  )
    .bind(runId)
    .all();
  return results.map((r) => ({
    idx: r.idx,
    prompt: PROMPT_BY_ID.get(r.prompt_id)?.text ?? '',
    raw: r.raw,
    shown: r.key,
    tier: r.tier,
    label: TIERS[r.tier].name,
    points: r.points,
    ms: r.ms,
  }));
}

async function rankOf(env, run) {
  const row = await env.DB.prepare(
    `SELECT COUNT(*) + 1 AS rank FROM runs
     WHERE day = ? AND finished = 1 AND (points > ? OR (points = ? AND total_ms < ?) OR (points = ? AND total_ms = ? AND id < ?))`,
  )
    .bind(run.day, run.points, run.points, run.total_ms, run.points, run.total_ms, run.id)
    .first();
  const players = await env.DB.prepare('SELECT COUNT(*) AS n FROM runs WHERE day = ? AND finished = 1')
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
async function commitAnswer(env, run, prompts, { raw, norm, key, tier, ms }) {
  const points = TIERS[tier].points;
  const nextIdx = run.idx + 1;
  const finished = nextIdx >= prompts.length ? 1 : 0;
  await env.DB.batch([
    env.DB.prepare(
      `INSERT INTO answers (run_id, idx, day, prompt_id, raw, norm, key, tier, points, ms)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(run.id, run.idx, run.day, prompts[run.idx].id, raw, norm, key, tier, points, ms),
    env.DB.prepare(
      `UPDATE runs SET idx = ?, started_at = NULL, points = points + ?, total_ms = total_ms + ?, finished = ?
       WHERE id = ? AND idx = ?`,
    ).bind(nextIdx, points, ms, finished, run.id, run.idx),
  ]);
}

/** Pytania, którym minął czas (np. po zamknięciu karty), zapisujemy jako puste i idziemy dalej. */
async function settleExpired(env, runIn, prompts, now) {
  let run = runIn;
  while (!run.finished && run.started_at != null && now > run.started_at + LIMIT_MS + GRACE_MS) {
    try {
      await commitAnswer(env, run, prompts, { raw: '', norm: '', key: null, tier: 0, ms: LIMIT_MS });
    } catch {
      /* równoległe żądanie mogło to już zapisać; przeczytaj stan od nowa */
    }
    run = await getRunById(env, run.id);
  }
  return run;
}

async function runState(env, run, prompts) {
  const state = {
    day: run.day,
    total: prompts.length,
    idx: run.idx,
    points: run.points,
    depth: run.points * METERS_PER_POINT,
    finished: !!run.finished,
    history: await history(env, run.id),
  };
  if (run.finished) state.me = await rankOf(env, run);
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

async function handleRun(request, env, now) {
  const body = await readBody(request);
  const player = await playerHash(body.token);
  const day = warsawDay(now);
  const prompts = await dayPrompts(env, day);
  let run = await getRun(env, day, player);
  if (!run) {
    const name = cleanName(body.name);
    if (!name) throw new HttpError(400, 'Pseudonim musi mieć od 2 do 16 znaków');
    await env.DB.prepare('INSERT OR IGNORE INTO runs (day, player, name, created_at) VALUES (?, ?, ?, ?)')
      .bind(day, player, name, now)
      .run();
    run = await getRun(env, day, player);
  }
  run = await settleExpired(env, run, prompts, now);
  return json(await runState(env, run, prompts));
}

async function loadRun(body, env, now) {
  const player = await playerHash(body.token);
  const day = warsawDay(now);
  const prompts = await dayPrompts(env, day);
  const run = await getRun(env, day, player);
  if (!run) throw new HttpError(404, 'Najpierw rozpocznij dzisiejsze nurkowanie');
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
    points: run.points,
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
  const tier = match ? match.tier : 0;
  const key = match ? match.shown : null;
  const ms = Math.min(LIMIT_MS, Math.max(MIN_ANSWER_MS, now - run.started_at));
  const share = await crowdShare(env, run.day, prompt.id, key);
  try {
    await commitAnswer(env, run, prompts, { raw, norm: normalize(raw), key, tier, ms });
  } catch {
    const fresh = await getRunById(env, run.id);
    throw new HttpError(409, 'Ta odpowiedź została już zapisana', { state: await runState(env, fresh, prompts) });
  }
  const after = await getRunById(env, run.id);
  const result = {
    idx: run.idx,
    raw,
    shown: key,
    tier,
    label: TIERS[tier].name,
    points: TIERS[tier].points,
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
    `SELECT id, name, points, total_ms FROM runs WHERE day = ? AND finished = 1
     ORDER BY points DESC, total_ms ASC, id ASC LIMIT 50`,
  )
    .bind(day)
    .all();
  const players = await env.DB.prepare('SELECT COUNT(*) AS n FROM runs WHERE day = ? AND finished = 1')
    .bind(day)
    .first();
  const out = {
    day,
    players: players.n,
    rows: results.map((r, i) => ({
      rank: i + 1,
      name: r.name,
      points: r.points,
      depth: r.points * METERS_PER_POINT,
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

/** Najczęstsze niedopasowane odpowiedzi: surowiec do rozbudowy bazy o nowe wpisy. */
async function handleUnmatched(request, env) {
  const auth = request.headers.get('authorization') || '';
  const expected = env.ADMIN_TOKEN ? `Bearer ${env.ADMIN_TOKEN}` : null;
  if (!expected || !safeEqual(auth, expected)) throw new HttpError(401, 'Brak dostępu');
  const url = new URL(request.url);
  const min = Math.max(1, Number(url.searchParams.get('min')) || 2);
  const limit = Math.min(500, Math.max(1, Number(url.searchParams.get('limit')) || 200));
  const { results } = await env.DB.prepare(
    `SELECT prompt_id, norm, MIN(raw) AS sample, COUNT(*) AS n
     FROM answers WHERE key IS NULL AND norm != ''
     GROUP BY prompt_id, norm HAVING n >= ? ORDER BY n DESC LIMIT ?`,
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
