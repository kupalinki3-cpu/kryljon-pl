import test from 'node:test';
import assert from 'node:assert/strict';
import { handle } from '../src/index.js';
import { PROMPTS } from '../src/content/index.js';
import { GRACE_MS, INTRO_MS, LIMIT_MS, MIN_ANSWER_MS, PROMPTS_PER_DAY, adjustMeters, depthBand } from '../src/game.js';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { makeD1 } from './d1shim.js';

const T0 = Date.parse('2026-11-20T10:00:00Z'); // 11:00 w Warszawie, dzień 2026-11-20
const DAY = '2026-11-20';
const tok = (n) => `token-${String(n).padStart(4, '0')}-abcdefghij`; // 16-64 znaków [A-Za-z0-9_-]

function setup(extraEnv = {}) {
  return { DB: makeD1(), ...extraEnv };
}

async function call(env, method, path, { body, headers, now = T0 } = {}) {
  const init = { method, headers: { ...(headers || {}) } };
  if (body !== undefined) {
    init.body = JSON.stringify(body);
    init.headers['content-type'] = 'application/json';
  }
  const res = await handle(new Request(`https://glebia.test${path}`, init), env, now);
  return { status: res.status, json: await res.json() };
}

const promptByText = (text) => PROMPTS.find((p) => p.text === text);
const deepest = (prompt) => prompt.answers.reduce((m, a) => (a[0] > m[0] ? a : m));
const shallowest = (prompt) => prompt.answers.reduce((m, a) => (a[0] < m[0] ? a : m));
const FREE = { mode: 'free' };

/** Przechodzi cały bieg; answerFor(prompt, i) zwraca tekst odpowiedzi. Zwraca stan końcowy. */
async function playRun(env, token, name, answerFor, { start = T0, thinkMs = 5000, extra = {} } = {}) {
  let r = await call(env, 'POST', '/api/run', { body: { token, name, ...extra }, now: start });
  assert.equal(r.status, 200, JSON.stringify(r.json));
  let now = start;
  let last = r.json;
  while (!last.finished) {
    const p = await call(env, 'POST', '/api/prompt', { body: { token, ...extra }, now });
    assert.equal(p.status, 200);
    const prompt = promptByText(p.json.text);
    assert.ok(prompt, 'pytanie istnieje w treści');
    now += INTRO_MS + thinkMs;
    const a = await call(env, 'POST', '/api/answer', {
      body: { token, idx: p.json.idx, answer: answerFor(prompt, p.json.idx), ...extra },
      now,
    });
    assert.equal(a.status, 200, JSON.stringify(a.json));
    last = a.json.state;
    now += 100;
  }
  return last;
}

test('pełny bieg dzienny: 7 pytań, metry sumują się bez limitu, miejsce w rankingu', async () => {
  const env = setup();
  const state = await playRun(env, tok(1), 'Przemek', (p) => deepest(p)[1]);
  assert.equal(state.mode, 'daily');
  assert.equal(state.total, PROMPTS_PER_DAY);
  assert.equal(state.finished, true);
  assert.equal(state.history.length, PROMPTS_PER_DAY);
  const sum = state.history.reduce((a, h) => a + h.meters, 0);
  assert.equal(state.depth, sum);
  assert.equal(state.points, Math.round(sum / 10));
  assert.ok(state.history.every((h) => h.meters >= 1000 || h.tier >= 2), 'najgłębsze odpowiedzi są głębokie');
  assert.deepEqual(state.me, { rank: 1, players: 1 });
  const lb = await call(env, 'GET', '/api/leaderboard');
  assert.equal(lb.json.day, DAY);
  assert.equal(lb.json.rows.length, 1);
  assert.equal(lb.json.rows[0].name, 'Przemek');
  assert.equal(lb.json.rows[0].depth, state.depth);
});

test('głębokość nie ma sufitu: 7 odpowiedzi daje sumę metrów po korekcie za wielkość kategorii', async () => {
  const env = setup();
  const picked = [];
  const state = await playRun(env, tok(1), 'Bezdenny', (p) => {
    const e = deepest(p);
    picked.push(adjustMeters(e[0], 0, 0, 0, p.answers.length));
    return e[1];
  });
  assert.equal(state.depth, picked.reduce((a, b) => a + b, 0));
  assert.ok(state.depth > 7000, 'przekracza dawny sufit 7000 m');
  assert.equal(depthBand(state.history[0].meters).tier, state.history[0].tier);
});

test('pytania dnia są zapisane w bazie i niezmienne', async () => {
  const env = setup();
  await call(env, 'GET', '/api/today');
  const row = env.DB.raw.prepare('SELECT prompts FROM days WHERE day = ?').get(DAY);
  const ids = JSON.parse(row.prompts);
  assert.equal(ids.length, PROMPTS_PER_DAY);
  assert.equal(new Set(ids).size, PROMPTS_PER_DAY);
  const t = await call(env, 'GET', '/api/today');
  assert.equal(t.json.total, PROMPTS_PER_DAY);
  assert.equal(t.json.day, DAY);
  assert.equal(t.json.yesterday, '2026-11-19');
  assert.equal(t.json.resetsInMs, 13 * 3600_000); // 11:00 -> 24:00
});

test('ranking: więcej metrów wygrywa, przy remisie krótszy czas', async () => {
  const env = setup();
  const best = (p) => deepest(p)[1];
  const worst = (p) => shallowest(p)[1];
  await playRun(env, tok(1), 'Wolny', best, { thinkMs: 9000 });
  await playRun(env, tok(2), 'Szybki', best, { thinkMs: 3000 });
  await playRun(env, tok(3), 'Płytki', worst, { thinkMs: 1000 });
  const lb = await call(env, 'GET', '/api/leaderboard', { headers: { 'x-player-token': tok(3) } });
  assert.deepEqual(lb.json.rows.map((r) => r.name), ['Szybki', 'Wolny', 'Płytki']);
  assert.deepEqual(lb.json.rows.map((r) => r.rank), [1, 2, 3]);
  assert.deepEqual(lb.json.me, { rank: 3, players: 3 });
  assert.equal(lb.json.players, 3);
});

test('timeout po stronie serwera: porzucone pytania dostają 0 m', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Zniknął' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  assert.equal(p.json.startsInMs, INTRO_MS);
  assert.equal(p.json.remainingMs, INTRO_MS + LIMIT_MS);
  const back = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Zniknął' }, now: T0 + 3600_000 });
  assert.equal(back.json.idx, 1);
  assert.equal(back.json.depth, 0);
  assert.equal(back.json.history[0].tier, 0);
  assert.equal(back.json.history[0].raw, '');
  assert.equal(back.json.finished, false);
});

test('odpowiedź po czasie (poza tolerancją) dostaje 409 i aktualny stan', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Spóźniony' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const late = T0 + INTRO_MS + LIMIT_MS + GRACE_MS + 1;
  const a = await call(env, 'POST', '/api/answer', {
    body: { token: tok(1), idx: 0, answer: deepest(prompt)[1] },
    now: late,
  });
  assert.equal(a.status, 409);
  assert.equal(a.json.state.idx, 1);
  assert.equal(a.json.state.history[0].meters, 0);
});

test('odpowiedź w granicach tolerancji jest przyjęta, czas przycięty do limitu', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Na styk' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const a = await call(env, 'POST', '/api/answer', {
    body: { token: tok(1), idx: 0, answer: shallowest(prompt)[1] },
    now: T0 + INTRO_MS + LIMIT_MS + GRACE_MS,
  });
  assert.equal(a.status, 200);
  assert.equal(a.json.result.ms, LIMIT_MS);
  assert.equal(a.json.result.meters, adjustMeters(shallowest(prompt)[0], 0, 0, 0, prompt.answers.length));
});

test('odpowiedź przed startem zegara ma czas dolnej granicy', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Skoczek' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const a = await call(env, 'POST', '/api/answer', {
    body: { token: tok(1), idx: 0, answer: shallowest(prompt)[1] },
    now: T0 + 500,
  });
  assert.equal(a.json.result.ms, MIN_ANSWER_MS);
});

test('wznowienie: ponowne pobranie pytania nie resetuje zegara', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Odświeża' } });
  const a = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const b = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) }, now: T0 + 10_000 });
  assert.equal(a.json.text, b.json.text);
  assert.equal(b.json.remainingMs, a.json.remainingMs - 10_000);
});

test('nieaktualny numer pytania daje 409', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Pomyłka' } });
  await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const a = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 3, answer: 'x' }, now: T0 + 5000 });
  assert.equal(a.status, 409);
});

test('dwie równoległe poprawne odpowiedzi: jedna przechodzi, druga dostaje 409', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Dwukrotnie' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const entry = deepest(prompt);
  const body = { token: tok(1), idx: 0, answer: entry[1] };
  const [x, y] = await Promise.all([
    call(env, 'POST', '/api/answer', { body, now: T0 + 6000 }),
    call(env, 'POST', '/api/answer', { body, now: T0 + 6000 }),
  ]);
  assert.deepEqual([x.status, y.status].sort(), [200, 409]);
  assert.equal(env.DB.raw.prepare('SELECT COUNT(*) AS n FROM answers').get().n, 1);
  const run = env.DB.raw.prepare('SELECT idx, meters FROM runs').get();
  assert.equal(run.idx, 1);
  assert.equal(run.meters, adjustMeters(entry[0], 0, 0, 0, prompt.answers.length));
});

test('brak echa: nieznana odpowiedź nie kończy pytania, można próbować dalej', async () => {
  const env = setup({ ADMIN_TOKEN: 'sekret-admina' });
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Próbuje' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const miss1 = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 0, answer: 'uga buga balabuba' }, now: T0 + 5000 });
  assert.equal(miss1.status, 200);
  assert.equal(miss1.json.noEcho, true);
  assert.equal(miss1.json.tries, 1);
  assert.equal(miss1.json.result, undefined);
  const miss2 = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 0, answer: 'drugie pudło' }, now: T0 + 7000 });
  assert.equal(miss2.json.tries, 2);
  // Bieg stoi w miejscu, zegar się nie zmienił, nic nie zapisano jako odpowiedź.
  const again = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) }, now: T0 + 8000 });
  assert.equal(again.json.idx, 0);
  assert.equal(again.json.remainingMs, p.json.remainingMs - 8000);
  assert.equal(env.DB.raw.prepare('SELECT COUNT(*) AS n FROM answers').get().n, 0);
  // Trzecia próba trafia i dostaje czas liczony od startu pytania, razem z pudłami.
  const hit = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 0, answer: shallowest(prompt)[1] }, now: T0 + 12_000 });
  assert.equal(hit.status, 200);
  assert.equal(hit.json.result.ms, 12_000 - INTRO_MS);
  assert.equal(hit.json.state.idx, 1);
  assert.equal(env.DB.raw.prepare('SELECT COUNT(*) AS n FROM misses').get().n, 2);
});

test('brak echa: pusta odpowiedź niczego nie zapisuje, a liczba prób jest ograniczona', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Spamer' } });
  await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const empty = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 0, answer: '   ' }, now: T0 + 5000 });
  assert.deepEqual(empty.json, { noEcho: true, empty: true, tries: 0 });
  assert.equal(env.DB.raw.prepare('SELECT COUNT(*) AS n FROM misses').get().n, 0);
  let last;
  for (let i = 1; i <= 40; i++) {
    last = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 0, answer: `bzdura ${i}` }, now: T0 + 5000 });
    assert.equal(last.status, 200);
  }
  assert.equal(last.json.tries, 40);
  const over = await call(env, 'POST', '/api/answer', { body: { token: tok(1), idx: 0, answer: 'bzdura 41' }, now: T0 + 5000 });
  assert.equal(over.status, 429);
});

test('kolejka do rozbudowy bazy: odpowiedzi bez echa liczone raz na gracza, dostęp tylko z tokenem', async () => {
  const env = setup({ ADMIN_TOKEN: 'sekret-admina' });
  for (let i = 1; i <= 3; i++) {
    await call(env, 'POST', '/api/run', { body: { token: tok(i), name: `Gracz${i}` } });
    await call(env, 'POST', '/api/prompt', { body: { token: tok(i) } });
    const word = i === 3 ? 'Inna Odpowiedź!' : 'Atlantyda Zażółć';
    await call(env, 'POST', '/api/answer', { body: { token: tok(i), idx: 0, answer: word }, now: T0 + 6000 });
    if (i === 1) await call(env, 'POST', '/api/answer', { body: { token: tok(i), idx: 0, answer: 'atlantyda zazolc' }, now: T0 + 7000 });
  }
  assert.equal((await call(env, 'GET', '/api/admin/unmatched')).status, 401);
  assert.equal((await call(env, 'GET', '/api/admin/unmatched', { headers: { authorization: 'Bearer zle' } })).status, 401);
  const ok = await call(env, 'GET', '/api/admin/unmatched', { headers: { authorization: 'Bearer sekret-admina' } });
  assert.equal(ok.status, 200);
  assert.equal(ok.json.rows.length, 1, 'tylko odpowiedzi od co najmniej 2 graczy');
  assert.equal(ok.json.rows[0].norm, 'atlantyda zazolc');
  assert.equal(ok.json.rows[0].n, 2, 'gracz powtarzający to samo liczy się raz');
  const closed = await call(setup(), 'GET', '/api/admin/unmatched', { headers: { authorization: 'Bearer undefined' } });
  assert.equal(closed.status, 401);
});

test('wznowienie biegu rankingowego nie zużywa podejścia ani nie zmienia pseudonimu', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Pierwszy' } });
  const again = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Inny' } });
  assert.equal(again.status, 200);
  assert.equal(again.json.attempt, 1);
  const n = env.DB.raw.prepare("SELECT COUNT(*) AS n, MIN(name) AS name FROM runs WHERE mode = 'daily'").get();
  assert.equal(n.n, 1);
  assert.equal(n.name, 'Pierwszy');
  const next = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Pierwszy' }, now: T0 + 24 * 3600_000 });
  assert.equal(next.json.day, '2026-11-21');
  assert.equal(next.json.idx, 0);
  assert.equal(next.json.attempt, 1);
});

test('trzy podejścia dziennie, powtórzone żądanie nie zużywa podejścia, w rankingu jest najlepsze', async () => {
  const env = setup();
  const token = tok(1);
  const best = await playRun(env, token, 'Pierwszy', (p) => deepest(p)[1]);
  assert.equal(best.attempt, 1);
  assert.equal(best.attemptLimit, 3);

  const body = { token, fresh: true, afterRunId: best.runId, name: 'Inny' };
  const [first, duplicate] = await Promise.all([
    call(env, 'POST', '/api/run', { body }),
    call(env, 'POST', '/api/run', { body }),
  ]);
  assert.equal(first.status, 200);
  assert.equal(duplicate.status, 200);
  assert.equal(first.json.runId, duplicate.json.runId);
  assert.equal(first.json.attempt, 2);
  assert.equal(first.json.depth, 0);
  const stale = await call(env, 'POST', '/api/prompt', { body: { token, runId: best.runId } });
  assert.equal(stale.status, 409);

  const weaker = await playRun(env, token, 'Inny', (p) => shallowest(p)[1]);
  assert.equal(weaker.runId, first.json.runId);
  assert.equal(weaker.attempt, 2);
  assert.ok(weaker.depth < best.depth);
  assert.equal(weaker.bestDepth, best.depth);
  const third = await playRun(env, token, 'Inny', (p) => shallowest(p)[1], {
    extra: { fresh: true, afterRunId: weaker.runId },
  });
  assert.equal(third.attempt, 3);
  const fourth = await call(env, 'POST', '/api/run', { body: { token, fresh: true, afterRunId: third.runId } });
  assert.equal(fourth.status, 409);
  const board = await call(env, 'GET', '/api/leaderboard', { headers: { 'x-player-token': token } });
  assert.equal(board.json.players, 1);
  assert.deepEqual(board.json.rows.map(({ name, depth }) => ({ name, depth })), [{ name: 'Pierwszy', depth: best.depth }]);
});

test('tryb swobodny: dowolnie wiele gier, losowe pytania, bez rankingu', async () => {
  const env = setup();
  const first = await playRun(env, tok(1), 'Luzak', (p) => deepest(p)[1], { extra: FREE });
  assert.equal(first.mode, 'free');
  assert.equal(first.finished, true);
  assert.equal(first.me, undefined, 'brak miejsca w rankingu');
  // Zakończona gra swobodna nie blokuje kolejnej tego samego dnia.
  const second = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Luzak', ...FREE }, now: T0 + 60_000 });
  assert.equal(second.status, 200);
  assert.equal(second.json.finished, false);
  assert.equal(second.json.idx, 0);
  assert.equal(second.json.depth, 0);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM runs WHERE mode = 'free'").get().n, 2);
  // Swobodne gry nie wchodzą do rankingu dziennego i nie blokują biegu rankingowego.
  const lb = await call(env, 'GET', '/api/leaderboard', { now: T0 + 60_000 });
  assert.equal(lb.json.rows.length, 0);
  const daily = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Luzak' }, now: T0 + 60_000 });
  assert.equal(daily.json.mode, 'daily');
  assert.equal(daily.json.idx, 0);
});

test('tryb swobodny: odświeżenie wznawia niedokończoną grę, a fresh zaczyna nową', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Wraca', ...FREE } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1), ...FREE } });
  const resumed = await call(env, 'POST', '/api/run', { body: { token: tok(1), ...FREE, resume: true }, now: T0 + 1000 });
  assert.equal(resumed.json.idx, 0);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM runs WHERE mode = 'free'").get().n, 1);
  const same = await call(env, 'POST', '/api/prompt', { body: { token: tok(1), ...FREE }, now: T0 + 1000 });
  assert.equal(same.json.text, p.json.text);
  const fresh = await call(env, 'POST', '/api/run', { body: { token: tok(1), ...FREE, fresh: true }, now: T0 + 2000 });
  assert.equal(fresh.json.idx, 0);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM runs WHERE mode = 'free'").get().n, 2);
  const none = await call(env, 'POST', '/api/run', { body: { token: tok(2), ...FREE, resume: true } });
  assert.equal(none.status, 404);
});

test('tryb swobodny: limit nowych gier na godzinę', async () => {
  const env = setup();
  for (let i = 0; i < 60; i++) {
    const r = await call(env, 'POST', '/api/run', { body: { token: tok(1), ...FREE, fresh: true }, now: T0 + i });
    assert.equal(r.status, 200);
  }
  const over = await call(env, 'POST', '/api/run', { body: { token: tok(1), ...FREE, fresh: true }, now: T0 + 100 });
  assert.equal(over.status, 429);
  const later = await call(env, 'POST', '/api/run', { body: { token: tok(1), ...FREE, fresh: true }, now: T0 + 3600_000 + 1000 });
  assert.equal(later.status, 200);
});

test('token w bazie jest tylko w postaci skrótu', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(7), name: 'Anonim' } });
  const row = env.DB.raw.prepare('SELECT player FROM runs').get();
  assert.notEqual(row.player, tok(7));
  assert.match(row.player, /^[0-9a-f]{64}$/);
});

test('walidacja wejścia', async () => {
  const env = setup();
  assert.equal((await call(env, 'POST', '/api/run', { body: { token: 'krotki', name: 'Ala' } })).status, 400);
  assert.equal((await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'A' } })).status, 400);
  assert.equal((await call(env, 'POST', '/api/run', { body: { token: tok(1) } })).status, 400);
  assert.equal((await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Ala', mode: 'turbo' } })).status, 400);
  assert.equal((await call(env, 'POST', '/api/prompt', { body: { token: tok(9) } })).status, 404);
  const bad = await handle(new Request('https://glebia.test/api/run', { method: 'POST', body: '{nie json' }), env, T0);
  assert.equal(bad.status, 400);
  const huge = await handle(new Request('https://glebia.test/api/run', { method: 'POST', body: 'x'.repeat(5000) }), env, T0);
  assert.equal(huge.status, 413);
  assert.equal((await call(env, 'GET', '/api/leaderboard?day=2026-13-99')).status, 400);
  assert.equal((await call(env, 'GET', '/api/leaderboard?day=2027-01-01')).status, 400);
  assert.equal((await call(env, 'GET', '/api/nie-ma')).status, 404);
});

test('procent graczy z tą samą odpowiedzią pojawia się dopiero od 5 odpowiedzi', async () => {
  const env = setup();
  const shares = [];
  for (let i = 1; i <= 6; i++) {
    await call(env, 'POST', '/api/run', { body: { token: tok(i), name: `Gracz${i}` } });
    const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(i) } });
    const prompt = promptByText(p.json.text);
    const a = await call(env, 'POST', '/api/answer', {
      body: { token: tok(i), idx: 0, answer: shallowest(prompt)[1] },
      now: T0 + 6000,
    });
    shares.push(a.json.result.share);
  }
  assert.deepEqual(shares.slice(0, 4), [null, null, null, null]);
  assert.deepEqual(shares[4], { percent: 100, total: 5 });
  assert.deepEqual(shares[5], { percent: 100, total: 6 });
});

test('ranking ukrywa niedokończone biegi i nie ujawnia tokenów', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Niedokończony' } });
  const lb = await call(env, 'GET', '/api/leaderboard');
  assert.equal(lb.json.rows.length, 0);
  assert.equal(lb.json.players, 0);
  await playRun(env, tok(2), 'Skończył', (p) => shallowest(p)[1]);
  const lb2 = await call(env, 'GET', '/api/leaderboard');
  assert.equal(lb2.json.rows.length, 1);
  assert.deepEqual(Object.keys(lb2.json.rows[0]).sort(), ['depth', 'ms', 'name', 'points', 'rank']);
});

test('ranking z poprzedniego dnia jest dostępny po zmianie daty', async () => {
  const env = setup();
  await playRun(env, tok(1), 'Wczorajszy', (p) => deepest(p)[1]);
  const next = T0 + 24 * 3600_000;
  const today = await call(env, 'GET', '/api/leaderboard', { now: next });
  assert.equal(today.json.rows.length, 0);
  const yesterday = await call(env, 'GET', `/api/leaderboard?day=${DAY}`, { now: next });
  assert.equal(yesterday.json.rows.length, 1);
});

test('migracja 0002: przelicza stare punkty na metry i zachowuje biegi oraz odpowiedzi', () => {
  const db = new DatabaseSync(':memory:');
  const sql = (f) => readFileSync(new URL(`../migrations/${f}`, import.meta.url), 'utf8');
  db.exec(sql('0001_init.sql'));
  db.prepare("INSERT INTO runs (day, player, name, idx, points, total_ms, finished, created_at) VALUES ('2026-11-01', 'p', 'Stary', 7, 123, 90000, 1, 1)").run();
  db.prepare("INSERT INTO answers (run_id, idx, day, prompt_id, raw, norm, key, tier, points, ms) VALUES (1, 0, '2026-11-01', 'miasto', 'x', 'x', 'X', 3, 45, 4000)").run();
  db.exec(sql('0002_modes_meters.sql'));
  const run = db.prepare('SELECT mode, prompts, meters, name, finished FROM runs').get();
  assert.equal(run.mode, 'daily');
  assert.equal(run.prompts, null);
  assert.equal(run.meters, 1230, 'punkty * 10 = metry');
  assert.equal(run.name, 'Stary');
  assert.equal(db.prepare('SELECT meters FROM answers').get().meters, 450);
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all().map((r) => r.name);
  assert.ok(tables.includes('misses'));
  // Unikalność dziennego biegu nadal działa, a wiele biegów swobodnych jest dozwolone.
  assert.throws(() => db.prepare("INSERT INTO runs (day, mode, player, name, created_at) VALUES ('2026-11-01', 'daily', 'p', 'Dubel', 1)").run());
  for (let i = 0; i < 3; i++) db.prepare("INSERT INTO runs (day, mode, player, name, created_at) VALUES ('free', 'free', 'p', 'Luzak', 1)").run();
  assert.equal(db.prepare("SELECT COUNT(*) AS n FROM runs WHERE mode = 'free'").get().n, 3);

  db.exec(sql('0004_daily_attempts.sql'));
  assert.equal(db.prepare('SELECT id, meters, attempt FROM daily_best_runs').get().attempt, 1);
  assert.equal(db.prepare('SELECT meters FROM daily_best_runs').get().meters, 1230);
  assert.equal(db.prepare('SELECT run_id FROM answers').get().run_id, 1);
  db.prepare("INSERT INTO runs (day, mode, player, name, created_at, attempt) VALUES ('2026-11-01', 'daily', 'p', 'Stary', 2, 2)").run();
  assert.equal(db.prepare("SELECT COUNT(*) AS n FROM runs WHERE mode = 'daily'").get().n, 2);
});

test('tryb międzynarodowy został wyłączony', async () => {
  const result = await call(setup(), 'POST', '/api/run', { body: { token: tok(1), mode: 'international' } });
  assert.equal(result.status, 400);
});

test('zapisane światowe pytanie w polskim trybie dostaje polski zamiennik', async () => {
  const env = setup();
  const token = tok(1);
  await call(env, 'POST', '/api/run', { body: { token, ...FREE } });
  const oldIds = ['marka_auta', ...PROMPTS.slice(0, PROMPTS_PER_DAY - 1).map((p) => p.id)];
  env.DB.raw.prepare("UPDATE runs SET prompts = ? WHERE mode = 'free'").run(JSON.stringify(oldIds));
  const prompt = await call(env, 'POST', '/api/prompt', { body: { token, ...FREE } });
  assert.equal(prompt.status, 200);
  assert.ok(PROMPTS.slice(PROMPTS_PER_DAY - 1).some((p) => p.text === prompt.json.text));
});

test('pytanie o polskie napoje zalicza kompot i jego domowe warianty', async () => {
  const env = setup();
  const token = tok(1);
  const ids = ['napoj', ...PROMPTS.filter((p) => p.id !== 'napoj').slice(0, PROMPTS_PER_DAY - 1).map((p) => p.id)];
  env.DB.raw.prepare('INSERT INTO days (day, prompts) VALUES (?, ?)').run(DAY, JSON.stringify(ids));
  await call(env, 'POST', '/api/run', { body: { token, name: 'Kompot' } });
  const prompt = await call(env, 'POST', '/api/prompt', { body: { token } });
  assert.match(prompt.json.text, /napój/);
  const answer = await call(env, 'POST', '/api/answer', {
    body: { token, idx: 0, answer: 'Kompot z suszu' },
    now: T0 + INTRO_MS + 1500,
  });
  assert.equal(answer.status, 200);
  assert.equal(answer.json.result.shown, 'Kompot');
  assert.ok(answer.json.result.meters > 0);
});

test('pytanie o polskie przekąski zalicza marki i nazwy ich przekąsek', async () => {
  const env = setup();
  const ids = ['slodycze', ...PROMPTS.filter((p) => p.id !== 'slodycze').slice(0, PROMPTS_PER_DAY - 1).map((p) => p.id)];
  env.DB.raw.prepare('INSERT INTO days (day, prompts) VALUES (?, ?)').run(DAY, JSON.stringify(ids));
  const cases = [
    ['Tymbark', 'Tymbark'],
    ['mus Tymbark', 'Tymbark'],
    ['Tarczyński', 'Tarczyński'],
    ['kabanosy Tarczynski', 'Tarczyński'],
    ['Dobra Kaloria', 'Dobra Kaloria'],
    ['Lajkonik', 'Lajkonik'],
  ];
  for (const [i, [raw, shown]] of cases.entries()) {
    const token = tok(i + 1);
    const run = await call(env, 'POST', '/api/run', { body: { token, name: 'Gracz ' + (i + 1) } });
    assert.equal(run.status, 200);
    const prompt = await call(env, 'POST', '/api/prompt', { body: { token } });
    assert.match(prompt.json.text, /przekąski/);
    const answer = await call(env, 'POST', '/api/answer', {
      body: { token, idx: 0, answer: raw },
      now: T0 + INTRO_MS + 1500,
    });
    assert.equal(answer.status, 200, raw);
    assert.equal(answer.json.result?.shown, shown, raw);
    assert.ok(answer.json.result.meters > 0, raw);
  }
});
