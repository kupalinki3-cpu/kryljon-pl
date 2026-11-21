import test from 'node:test';
import assert from 'node:assert/strict';
import { PROMPTS } from '../src/content/index.js';
import {
  BANDS,
  PROMPTS_PER_DAY,
  boundedLevenshtein,
  adjustMeters,
  depthBand,
  pointsOf,
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

test('nazwiska z PESEL zaliczają obie podobne pisownie i rzadkie nazwiska', () => {
  const prompt = byId('nazwisko');
  for (const name of ['Mystkowski', 'Mystkowska', 'Myszkowski', 'Myszkowska', 'Fiut', 'Kutasko']) {
    assert.equal(matchAnswer(prompt, name.toUpperCase())?.shown, name);
  }
  assert.equal(matchAnswer(prompt, 'ugabugabalabubasjdksks'), null);
});

test('większe kategorie obniżają głębokość niezależnie od popularności odpowiedzi', () => {
  assert.equal(adjustMeters(1000, 0, 0, 0, 100), 1000);
  assert.equal(adjustMeters(1000, 0, 0, 0, 200), 850);
  assert.ok(adjustMeters(1000, 0, 0, 0, 1000) < 850);
  assert.equal(adjustMeters(1000, 0, 0, 0, 5000), 600);
});

test('audyt popularnych odpowiedzi zalicza typowe nazwy oraz skróty', () => {
  const cases = [
    ['slodycze', 'chrupki Flips', 'Flips'],
    ['imie', 'Ania', 'Anna'],
    ['rzeka', 'Drawa', 'Drawa'],
    ['program', '1 z 10', 'Jeden z dziesięciu'],
    ['serwis', 'IKP', 'Internetowe Konto Pacjenta'],
    ['naukowiec', 'Tadeusz Reichstein', 'Tadeusz Reichstein'],
    ['jezioro', 'jezioro lubie', 'Lubie'],
    ['mem', 'gdzie jest bialy wegorz', 'Polish cow'],
    ['polskie_planszowki', 'Kolejka IPN', 'Kolejka'],
    ['gra', 'CP 2077', 'Cyberpunk 2077'],
  ];
  for (const [id, answer, expected] of cases) {
    assert.equal(matchAnswer(byId(id), answer)?.shown, expected, `${id}: ${answer}`);
  }
  for (const [id, wrong] of [['sklep', 'Lidl'], ['bajka', 'Smerfy'], ['polskie_planszowki', 'Dixit']]) {
    assert.equal(matchAnswer(byId(id), wrong), null, `${id}: ${wrong}`);
  }
});

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
    const spread = new Set();
    p.answers.forEach((entry, i) => {
      const [meters, canonical, ...aliases] = entry;
      assert.ok(Number.isInteger(meters) && meters >= 10 && meters <= 100000, `${p.id}[${i}] metry ${meters}`);
      assert.equal(typeof canonical, 'string', `${p.id}[${i}] nazwa`);
      spread.add(depthBand(meters).tier);
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
    assert.ok(spread.size >= 2, `${p.id}: wszystkie wpisy w jednym paśmie głębokości`);
  }
});

test('pasma głębokości i punkty z metrów', () => {
  assert.equal(depthBand(0).tier, 0);
  assert.equal(depthBand(-5).tier, 0);
  assert.equal(depthBand(NaN).tier, 0);
  assert.equal(depthBand(150).tier, 1);
  assert.equal(depthBand(200).tier, 2);
  assert.equal(depthBand(3999).tier, 4);
  assert.equal(depthBand(10000).tier, 6);
  assert.equal(depthBand(1e9).name, 'Legenda głębin', 'brak górnej granicy głębokości');
  assert.ok(BANDS.every((b, i) => i === 0 || b.max > BANDS[i - 1].max));
  assert.equal(pointsOf(0), 0);
  assert.equal(pointsOf(5000), 500);
  assert.equal(pointsOf(204), 20);
});

test('treść: pytania dnia da się ułożyć i zawierają różne kategorie', () => {
  const ids = PROMPTS.map((p) => p.id);
  const pick = pickPromptIds('2026-11-20', ids);
  assert.equal(pick.length, PROMPTS_PER_DAY);
  assert.equal(new Set(pick).size, PROMPTS_PER_DAY);
  assert.deepEqual(pick, pickPromptIds('2026-11-20', ids), 'deterministyczne');
  assert.notDeepEqual(pick, pickPromptIds('2026-11-21', ids), 'zmienia się z dniem');
  // Rozkład: przy ~100 kategoriach i 7 pytaniach dziennie w 1000 dniach każda kategoria powinna się pojawić.
  const seen = new Set();
  for (let d = 1; d <= 1000; d++) pickPromptIds(`2027-day-${d}`, ids).forEach((x) => seen.add(x));
  assert.equal(seen.size, ids.length);
});

test('matchAnswer: dokładne dopasowanie bez diakrytyków i wielkości liter', () => {
  const p = byId('przedmiot');
  const r = matchAnswer(p, 'HISTORIA SZTUKI');
  assert.equal(r.shown, 'historia sztuki');
  assert.ok(r.meters > 1000 && r.meters < 4000);
  assert.equal(matchAnswer(p, 'wos').shown, 'wiedza o społeczeństwie');
  assert.equal(matchAnswer(p, 'łacina').shown, 'język łaciński i kultura antyczna');
  assert.equal(matchAnswer(p, 'wf'), null);
  assert.equal(matchAnswer(p, ''), null);
  assert.equal(matchAnswer(p, '   '), null);
});

test('polski internet: znany twórca płytko, a nieznany głęboko', () => {
  const t = byId('tworca');
  const jumper = matchAnswer(t, 'paweł jumper');
  assert.equal(jumper.shown, 'Paweł Jumper');
  assert.ok(jumper.meters >= 100 && jumper.meters <= 300, `Jumper ${jumper.meters} m`);
  assert.equal(matchAnswer(t, 'JUMPER').shown, 'Paweł Jumper');
  const imie = byId('imie');
  assert.ok(matchAnswer(imie, 'Gostomir').meters > matchAnswer(imie, 'Jan').meters * 10);
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
  assert.equal(matchAnswer(byId('miasto'), 'Atlantyda'), null);
  assert.equal(matchAnswer(byId('tworca'), 'uga buga balabuba'), null);
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

test('rzadkość dynamiczna: popularne płytsze, niepopularne głębsze, "Każdy zna" nie głębieje, mała próba prawie nic nie zmienia', async () => {
  const { adjustMeters } = await import('../src/game.js');
  // pełna próba (total >= 100)
  assert.equal(adjustMeters(1000, 50, 50, 500), 500); // najczęstsza: -50%
  assert.equal(adjustMeters(1000, 0, 50, 500), 1250); // nikt nie podaje: +25%
  assert.ok(adjustMeters(1000, 25, 50, 500) < 1000 && adjustMeters(1000, 25, 50, 500) > 500);
  assert.equal(adjustMeters(150, 0, 50, 500), 150); // poniżej 200 m nie robi się głębiej
  assert.equal(adjustMeters(150, 50, 50, 500), 80); // ale może być płycej
  // brak danych: bez zmian
  assert.equal(adjustMeters(1000, 0, 0, 0), 1000);
  // mała próba: korekta proporcjonalnie słabsza
  assert.ok(Math.abs(adjustMeters(1000, 5, 5, 10) - 1000) <= 60);
  // zawsze co najmniej 10 m
  assert.ok(adjustMeters(10, 50, 50, 500) >= 10);
});

test('polskie memy przyjmują cytaty i aliasy, a motoryzacja polskie marki i modele', () => {
  const mem = byId('mem');
  assert.equal(matchAnswer(mem, 'ale urwal ale to bylo dobre').shown, 'Ale urwał');
  const jumper = matchAnswer(mem, 'paweł jumper');
  assert.equal(jumper.shown, 'Paweł Jumper');
  for (const alias of ['to sie kameruje', 'Uwaga, to się kameruje!']) {
    const match = matchAnswer(mem, alias);
    assert.equal(match.entry, jumper.entry);
    assert.equal(match.meters, jumper.meters);
  }
  assert.equal(matchAnswer(mem, 'minecraft'), null);

  const cars = byId('polskie_auta');
  assert.equal(matchAnswer(cars, 'maluch').shown, 'Fiat 126p');
  assert.equal(matchAnswer(cars, 'jelcz').shown, 'Jelcz');
  assert.equal(matchAnswer(cars, 'toyota'), null);
});

test('wirale i slang zaliczają rozpoznawalne skróty bez polskich znaków', () => {
  const mem = byId('mem');
  const slang = byId('slang');
  assert.equal(matchAnswer(mem, 'ogolnie z plocka')?.shown, 'Ja ogólnie z Płocka jestem');
  assert.equal(matchAnswer(mem, 'plakal')?.shown, 'Płakał, płakał');
  assert.equal(matchAnswer(mem, 'siup siup')?.shown, 'Kolejna noc');
  assert.equal(matchAnswer(mem, 'to kameruje')?.shown, 'Paweł Jumper');
  assert.equal(matchAnswer(mem, 'Płock'), null);
  assert.equal(matchAnswer(slang, '67')?.shown, '6 7');
  assert.equal(matchAnswer(slang, 'spk')?.shown, 'spoko');
  assert.equal(matchAnswer(slang, 'frfr')?.shown, 'fr');
  assert.equal(matchAnswer(slang, 'farmić aurę')?.shown, 'aura farming');
});
