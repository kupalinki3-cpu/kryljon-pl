import test from 'node:test';
import assert from 'node:assert/strict';
import { PROMPTS } from '../src/content/index.js';
import {
  PROMPTS_PER_DAY,
  boundedLevenshtein,
  cleanName,
  isValidDay,
  matchAnswer,
  msUntilNextDay,
  normalize,
  pickPromptIds,
  prevDay,
  warsawDay,
} from '../src/game.js';

const byId = (id) => PROMPTS.find((p) => p.id === id);

test('normalize usuwa diakrytyki, ł i znaki specjalne', () => {
  assert.equal(normalize('  Żółć, GĘŚLĄ!  '), 'zolc gesla');
  assert.equal(normalize('Łódź'), 'lodz');
  assert.equal(normalize("Rock'n'roll"), 'rock n roll');
  assert.equal(normalize('Kabaret Łowcy.B'), 'kabaret lowcy b');
  assert.equal(normalize('São Tomé'), 'sao tome');
  assert.equal(normalize(''), '');
});

test('boundedLevenshtein liczy poprawnie i odcina po limicie', () => {
  assert.equal(boundedLevenshtein('kitten', 'sitting', 5), 3);
  assert.equal(boundedLevenshtein('abc', 'abc', 2), 0);
  assert.equal(boundedLevenshtein('abcdef', 'uvwxyz', 2), 3);
});

test('treść: struktura, unikalność id, brak kolizji aliasów w kategorii', () => {
  assert.ok(PROMPTS.length >= PROMPTS_PER_DAY);
  const ids = new Set();
  for (const p of PROMPTS) {
    assert.match(p.id, /^[a-z0-9_]+$/, `id ${p.id}`);
    assert.ok(!ids.has(p.id), `duplikat id ${p.id}`);
    ids.add(p.id);
    assert.ok(p.text && p.text.length >= 3, `tekst ${p.id}`);
    assert.ok(p.answers.length >= 10, `za mało wpisów w ${p.id}`);
    const seen = new Map();
    const tiers = new Set();
    p.answers.forEach((entry, i) => {
      const [tier, canonical, ...aliases] = entry;
      assert.ok(Number.isInteger(tier) && tier >= 1 && tier <= 6, `${p.id}[${i}] poziom ${tier}`);
      assert.equal(typeof canonical, 'string', `${p.id}[${i}] nazwa`);
      tiers.add(tier);
      for (const name of [canonical, ...aliases]) {
        assert.equal(typeof name, 'string');
        const n = normalize(name);
        assert.ok(n.length > 0, `${p.id}: pusta nazwa po normalizacji (${name})`);
        if (seen.has(n) && seen.get(n) !== i) {
          assert.fail(`${p.id}: kolizja "${name}" między wpisami ${seen.get(n)} i ${i}`);
        }
        seen.set(n, i);
      }
    });
    assert.ok(tiers.size >= 3, `${p.id}: za mało poziomów rzadkości (${[...tiers]})`);
  }
});

test('treść: pytania dnia da się ułożyć i zawierają różne kategorie', () => {
  const ids = PROMPTS.map((p) => p.id);
  const pick = pickPromptIds('2026-11-20', ids);
  assert.equal(pick.length, PROMPTS_PER_DAY);
  assert.equal(new Set(pick).size, PROMPTS_PER_DAY);
  assert.deepEqual(pick, pickPromptIds('2026-11-20', ids), 'deterministyczne');
  assert.notDeepEqual(pick, pickPromptIds('2026-11-21', ids), 'zmienia się z dniem');
  // Rozkład: w 60 dniach każda kategoria powinna się pojawić.
  const seen = new Set();
  for (let d = 1; d <= 60; d++) pickPromptIds(`2026-12-${String(d).padStart(2, '0')}`, ids).forEach((x) => seen.add(x));
  assert.equal(seen.size, ids.length);
});

test('matchAnswer: dokładne dopasowanie bez diakrytyków i wielkości liter', () => {
  const p = byId('przedmiot');
  assert.equal(matchAnswer(p, 'HISTORIA SZTUKI').tier, 4);
  assert.equal(matchAnswer(p, 'wos').shown, 'wiedza o społeczeństwie');
  assert.equal(matchAnswer(p, 'jezyk kaszubski').tier, 6);
  assert.equal(matchAnswer(p, 'łacina').shown, 'język łaciński i kultura antyczna');
  assert.equal(matchAnswer(p, 'wf'), null);
  assert.equal(matchAnswer(p, ''), null);
  assert.equal(matchAnswer(p, '   '), null);
});

test('matchAnswer: literówki tylko w dłuższych nazwach i tylko jednoznacznie', () => {
  const p = byId('przedmiot');
  assert.equal(matchAnswer(p, 'filozofa').shown, 'filozofia'); // 1 błąd, >= 7 znaków
  assert.equal(matchAnswer(p, 'matmatyka').shown, 'matematyka');
  const rivers = byId('rzeka');
  assert.equal(matchAnswer(rivers, 'Reda').shown, 'Reda');
  assert.equal(matchAnswer(rivers, 'Rege'), null, 'krótkie nazwy bez rozmycia (Rega/Reda)');
  const games = byId('gra');
  assert.equal(matchAnswer(games, 'Dying Light 2').shown, 'Dying Light 2');
  assert.equal(matchAnswer(games, 'Dying Light 3'), null, 'cyfry muszą się zgadzać');
  assert.equal(matchAnswer(games, 'Cyberpunk 2078'), null);
});

test('matchAnswer: nazwy wymyślone nie przechodzą', () => {
  assert.equal(matchAnswer(byId('pierwiastek'), 'unobtainium'), null);
  assert.equal(matchAnswer(byId('stolica'), 'Atlantyda'), null);
});

test('warsawDay i msUntilNextDay poprawnie przechodzą przez zmianę czasu', () => {
  assert.equal(warsawDay(Date.parse('2026-11-20T23:30:00Z')), '2026-11-21'); // 00:30 CET
  assert.equal(warsawDay(Date.parse('2026-11-20T22:59:59Z')), '2026-11-20');
  // 28.03.2026 23:30 CET -> północ za 30 min (zmiana czasu dopiero o 02:00 29.03)
  assert.equal(msUntilNextDay(Date.parse('2026-03-28T22:30:00Z')), 30 * 60_000);
  // 29.03.2026 12:00 CEST (10:00Z) -> północ 30.03 00:00 CEST = 22:00Z, czyli 12 h
  assert.equal(msUntilNextDay(Date.parse('2026-03-29T10:00:00Z')), 12 * 3600_000);
  // dzień z jesienną zmianą (25.10.2026) ma 25 godzin: od 00:00 CEST do 00:00 CET
  const start = Date.parse('2026-10-24T22:00:00Z'); // 25.10 00:00 CEST
  assert.equal(msUntilNextDay(start), 25 * 3600_000);
});

test('prevDay i isValidDay', () => {
  assert.equal(prevDay('2026-03-01'), '2026-02-28');
  assert.equal(prevDay('2026-01-01'), '2025-12-31');
  assert.equal(prevDay('2024-03-01'), '2024-02-29');
  assert.ok(isValidDay('2026-11-20'));
  assert.ok(!isValidDay('2026-13-40'));
  assert.ok(!isValidDay('20-11-2026'));
  assert.ok(!isValidDay(undefined));
});

test('cleanName', () => {
  assert.equal(cleanName('  Przemek  '), 'Przemek');
  assert.equal(cleanName('a'), null);
  assert.equal(cleanName('x'.repeat(17)), null);
  assert.equal(cleanName('<b>Ala</b>'), 'bAla/b');
  assert.equal(cleanName('Zażółć gęślą'), 'Zażółć gęślą');
  assert.equal(cleanName('Ala\u0000​Ma'), 'Ala Ma');
  assert.equal(cleanName(42), null);
});
