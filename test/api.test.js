import test from 'node:test';
import assert from 'node:assert/strict';
import { handle } from '../src/index.js';
import { PROMPTS } from '../src/content/index.js';
import { GRACE_MS, INTRO_MS, LIMIT_MS, MIN_ANSWER_MS, PROMPTS_PER_DAY } from '../src/game.js';
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
const entryWithTier = (prompt, tier) => prompt.answers.find((a) => a[0] === tier);
/** Wpis o najwyższym poziomie rzadkości w kategorii (nie każda ma poziomy 5-6). */
const bestEntry = (prompt) => prompt.answers.reduce((m, a) => (a[0] > m[0] ? a : m));

/** Przechodzi cały bieg; answerFor(prompt, i) zwraca tekst odpowiedzi. Zwraca stan końcowy. */
async function playRun(env, token, name, answerFor, start = T0, thinkMs = 5000) {
  let r = await call(env, 'POST', '/api/run', { body: { token, name }, now: start });
  assert.equal(r.status, 200);
  let now = start;
  let last = r.json;
  while (!last.finished) {
    const p = await call(env, 'POST', '/api/prompt', { body: { token }, now });
    assert.equal(p.status, 200);
    const prompt = promptByText(p.json.text);
    assert.ok(prompt, 'pytanie istnieje w treści');
    now += INTRO_MS + thinkMs;
    const a = await call(env, 'POST', '/api/answer', {
      body: { token, idx: p.json.idx, answer: answerFor(prompt, p.json.idx) },
      now,
    });
    assert.equal(a.status, 200, JSON.stringify(a.json));
    last = a.json.state;
    now += 100;
  }
  return last;
}

test('pełny bieg: 7 pytań, punkty, głębokość i miejsce w rankingu', async () => {
  const env = setup();
  const state = await playRun(env, tok(1), 'Przemek', (p) => bestEntry(p)[1]);
  assert.equal(state.total, PROMPTS_PER_DAY);
  assert.equal(state.finished, true);
  assert.equal(state.history.length, PROMPTS_PER_DAY);
  const sum = state.history.reduce((a, h) => a + h.points, 0);
  assert.equal(state.points, sum);
  assert.equal(state.depth, sum * 10);
  assert.ok(state.history.every((h) => h.tier >= 3), 'każde pytanie ma poziom >= 3 przy odpowiedzi najrzadszej');
  assert.ok(state.points >= PROMPTS_PER_DAY * 40);
  assert.deepEqual(state.me, { rank: 1, players: 1 });
  const lb = await call(env, 'GET', '/api/leaderboard');
  assert.equal(lb.json.day, DAY);
  assert.equal(lb.json.rows.length, 1);
  assert.equal(lb.json.rows[0].name, 'Przemek');
  assert.equal(lb.json.rows[0].depth, state.depth);
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

test('ranking: więcej punktów wygrywa, przy remisie krótszy czas', async () => {
  const env = setup();
  const best = (p) => bestEntry(p)[1];
  const worst = (p) => entryWithTier(p, 1)[1];
  await playRun(env, tok(1), 'Wolny', best, T0, 9000);
  await playRun(env, tok(2), 'Szybki', best, T0, 3000);
  await playRun(env, tok(3), 'Słaby', worst, T0, 1000);
  const lb = await call(env, 'GET', '/api/leaderboard', { headers: { 'x-player-token': tok(3) } });
  assert.deepEqual(lb.json.rows.map((r) => r.name), ['Szybki', 'Wolny', 'Słaby']);
  assert.deepEqual(lb.json.rows.map((r) => r.rank), [1, 2, 3]);
  assert.deepEqual(lb.json.me, { rank: 3, players: 3 });
  assert.equal(lb.json.players, 3);
});

test('timeout liczony po stronie serwera: porzucone pytania dostają 0 punktów', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Zniknął' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  assert.equal(p.json.startsInMs, INTRO_MS);
  assert.equal(p.json.remainingMs, INTRO_MS + LIMIT_MS);
  // Wraca po godzinie: pytanie 0 zapisane jako puste, kolejne jeszcze nie ruszyło.
  const back = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Zniknął' }, now: T0 + 3600_000 });
  assert.equal(back.json.idx, 1);
  assert.equal(back.json.points, 0);
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
    body: { token: tok(1), idx: 0, answer: bestEntry(prompt)[1] },
    now: late,
  });
  assert.equal(a.status, 409);
  assert.equal(a.json.state.idx, 1);
  assert.equal(a.json.state.history[0].points, 0);
});

test('odpowiedź w granicach tolerancji jest przyjęta, czas przycięty do limitu', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Na styk' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const onTime = T0 + INTRO_MS + LIMIT_MS + GRACE_MS;
  const a = await call(env, 'POST', '/api/answer', {
    body: { token: tok(1), idx: 0, answer: entryWithTier(prompt, 1)[1] },
    now: onTime,
  });
  assert.equal(a.status, 200);
  assert.equal(a.json.result.ms, LIMIT_MS);
  assert.equal(a.json.result.tier, 1);
});

test('odpowiedź przed startem zegara ma czas dolnej granicy', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Skoczek' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const a = await call(env, 'POST', '/api/answer', {
    body: { token: tok(1), idx: 0, answer: entryWithTier(prompt, 2)[1] },
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

test('dwie równoległe odpowiedzi na to samo pytanie: jedna przechodzi, druga dostaje 409', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Dwukrotnie' } });
  const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(1) } });
  const prompt = promptByText(p.json.text);
  const body = { token: tok(1), idx: 0, answer: entryWithTier(prompt, 3)[1] };
  const [x, y] = await Promise.all([
    call(env, 'POST', '/api/answer', { body, now: T0 + 6000 }),
    call(env, 'POST', '/api/answer', { body, now: T0 + 6000 }),
  ]);
  assert.deepEqual([x.status, y.status].sort(), [200, 409]);
  const rows = env.DB.raw.prepare('SELECT COUNT(*) AS n FROM answers').get();
  assert.equal(rows.n, 1);
  const run = env.DB.raw.prepare('SELECT idx, points FROM runs').get();
  assert.equal(run.idx, 1);
  assert.equal(run.points, 40);
});

test('jeden bieg na gracza dziennie, pseudonim się nie zmienia', async () => {
  const env = setup();
  await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Pierwszy' } });
  const again = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Inny' } });
  assert.equal(again.status, 200);
  const n = env.DB.raw.prepare('SELECT COUNT(*) AS n, MIN(name) AS name FROM runs').get();
  assert.equal(n.n, 1);
  assert.equal(n.name, 'Pierwszy');
  // Następnego dnia ten sam token może zagrać ponownie.
  const next = await call(env, 'POST', '/api/run', { body: { token: tok(1), name: 'Pierwszy' }, now: T0 + 24 * 3600_000 });
  assert.equal(next.json.day, '2026-11-21');
  assert.equal(next.json.idx, 0);
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
  assert.equal((await call(env, 'POST', '/api/prompt', { body: { token: tok(9) } })).status, 404);
  const bad = await handle(new Request('https://glebia.test/api/run', { method: 'POST', body: '{nie json' }), env, T0);
  assert.equal(bad.status, 400);
  const huge = await handle(new Request('https://glebia.test/api/run', { method: 'POST', body: 'x'.repeat(5000) }), env, T0);
  assert.equal(huge.status, 413);
  assert.equal((await call(env, 'GET', '/api/leaderboard?day=2026-13-99')).status, 400);
  assert.equal((await call(env, 'GET', '/api/leaderboard?day=2027-01-01')).status, 400);
  assert.equal((await call(env, 'GET', '/api/nie-ma')).status, 404);
});

test('odpowiedź spoza listy: 0 punktów, brak dopasowania, trafia do kolejki do rozbudowy bazy', async () => {
  const env = setup({ ADMIN_TOKEN: 'sekret-admina' });
  for (let i = 1; i <= 3; i++) {
    await call(env, 'POST', '/api/run', { body: { token: tok(i), name: `Gracz${i}` } });
    const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(i) } });
    const a = await call(env, 'POST', '/api/answer', {
      body: { token: tok(i), idx: 0, answer: i === 3 ? 'Inna Odpowiedź!' : 'Atlantyda Zażółć' },
      now: T0 + 6000,
    });
    assert.equal(a.json.result.tier, 0);
    assert.equal(a.json.result.points, 0);
    assert.equal(a.json.result.shown, null);
    assert.equal(a.json.result.share, null);
    assert.ok(p.json.text);
  }
  const denied = await call(env, 'GET', '/api/admin/unmatched');
  assert.equal(denied.status, 401);
  const wrong = await call(env, 'GET', '/api/admin/unmatched', { headers: { authorization: 'Bearer zle' } });
  assert.equal(wrong.status, 401);
  const ok = await call(env, 'GET', '/api/admin/unmatched', { headers: { authorization: 'Bearer sekret-admina' } });
  assert.equal(ok.status, 200);
  assert.equal(ok.json.rows.length, 1, 'tylko odpowiedzi powtórzone co najmniej 2 razy');
  assert.equal(ok.json.rows[0].norm, 'atlantyda zazolc');
  assert.equal(ok.json.rows[0].n, 2);
  // Bez ustawionego sekretu endpoint jest zawsze zamknięty.
  const closed = await call(setup(), 'GET', '/api/admin/unmatched', { headers: { authorization: 'Bearer undefined' } });
  assert.equal(closed.status, 401);
});

test('procent graczy z tą samą odpowiedzią pojawia się dopiero od 5 odpowiedzi', async () => {
  const env = setup();
  const shares = [];
  for (let i = 1; i <= 6; i++) {
    await call(env, 'POST', '/api/run', { body: { token: tok(i), name: `Gracz${i}` } });
    const p = await call(env, 'POST', '/api/prompt', { body: { token: tok(i) } });
    const prompt = promptByText(p.json.text);
    const a = await call(env, 'POST', '/api/answer', {
      body: { token: tok(i), idx: 0, answer: entryWithTier(prompt, 1)[1] },
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
  await playRun(env, tok(2), 'Skończył', (p) => entryWithTier(p, 2)[1]);
  const lb2 = await call(env, 'GET', '/api/leaderboard');
  assert.equal(lb2.json.rows.length, 1);
  assert.deepEqual(Object.keys(lb2.json.rows[0]).sort(), ['depth', 'ms', 'name', 'points', 'rank']);
});

test('ranking z poprzedniego dnia jest dostępny po zmianie daty', async () => {
  const env = setup();
  await playRun(env, tok(1), 'Wczorajszy', (p) => entryWithTier(p, 3)[1]);
  const next = T0 + 24 * 3600_000;
  const today = await call(env, 'GET', '/api/leaderboard', { now: next });
  assert.equal(today.json.rows.length, 0);
  const yesterday = await call(env, 'GET', `/api/leaderboard?day=${DAY}`, { now: next });
  assert.equal(yesterday.json.rows.length, 1);
});
