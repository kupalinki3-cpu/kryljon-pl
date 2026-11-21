// Czysta logika gry: bez dostępu do D1, żeby dało się ją testować w izolacji.

export const LIMIT_MS = 25_000; // czas na odpowiedź
export const INTRO_MS = 3_000; // czas na przeczytanie pytania, zanim ruszy zegar
export const GRACE_MS = 1_500; // tolerancja na opóźnienie sieci
export const MIN_ANSWER_MS = 1_000; // dolna granica czasu odpowiedzi (remisy w rankingu)
export const PROMPTS_PER_DAY = 7;
export const MAX_ANSWER_LEN = 80;

// Głębokość odpowiedzi to liczba metrów zapisana przy wpisie (bez górnego limitu).
// Pasma służą tylko do nazwy i koloru na ekranie; progi są redakcyjne i niekalibrowane.
export const BANDS = [
  { max: 200, tier: 1, name: 'Każdy zna' },
  { max: 500, tier: 2, name: 'Znane' },
  { max: 1500, tier: 3, name: 'Niezłe' },
  { max: 4000, tier: 4, name: 'Rzadkie' },
  { max: 10000, tier: 5, name: 'Głębinowe' },
  { max: Infinity, tier: 6, name: 'Legenda głębin' },
];

/** Pasmo dla liczby metrów. 0 m (brak odpowiedzi w czasie) ma własne pasmo o numerze 0. */
export function depthBand(meters) {
  if (!(meters > 0)) return { tier: 0, name: 'Brak odpowiedzi' };
  return BANDS.find((b) => meters < b.max);
}

/** Wynik punktowy to głębokość podzielona przez 10 (jak w oryginale: 10 m za punkt). */
export const pointsOf = (meters) => Math.round(meters / 10);

/** Małe litery, bez polskich (i innych) znaków diakrytycznych, tylko [a-z0-9] rozdzielone spacją. */
export function normalize(input) {
  return String(input)
    .toLowerCase()
    .replace(/ł/g, 'l')
    .replace(/ø/g, 'o')
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** Odległość Levenshteina z odcięciem: zwraca max+1, gdy przekroczono limit. */
export function boundedLevenshtein(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
      const v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

const indexCache = new Map();

/**
 * Wpis w kategorii: [metry, "nazwa kanoniczna", ...aliasy].
 * Zwraca { map: norm -> numer wpisu, keys: lista norm do dopasowania rozmytego }.
 * Duplikaty aliasów w jednej kategorii: wygrywa pierwszy wpis (testy wykrywają takie kolizje).
 */
export function buildIndex(prompt) {
  let idx = indexCache.get(prompt.id);
  if (idx) return idx;
  const map = new Map();
  prompt.answers.forEach((entry, i) => {
    for (const name of entry.slice(1)) {
      const n = normalize(name);
      if (n && !map.has(n)) map.set(n, i);
    }
  });
  idx = { map, keys: [...map.keys()] };
  indexCache.set(prompt.id, idx);
  return idx;
}

/**
 * Dopasowanie odpowiedzi do listy. Najpierw dokładne (po normalizacji), potem rozmyte
 * dla dłuższych nazw (>= 7 znaków): 1 literówka, a od 12 znaków 2 literówki,
 * i tylko gdy najlepszy wynik wskazuje jeden, jednoznaczny wpis.
 * Zwraca { entry: numer, meters, shown, norm } albo null.
 */
export function matchAnswer(prompt, raw) {
  const norm = normalize(raw);
  if (!norm) return null;
  const { map, keys } = buildIndex(prompt);
  let hit = map.get(norm);
  if (hit === undefined && norm.length >= 7) {
    const allowed = norm.length >= 12 ? 2 : 1;
    let best = allowed + 1;
    let bestEntry = -1;
    let ambiguous = false;
    const digits = norm.replace(/\D+/g, '');
    for (const k of keys) {
      if (k.length < 7) continue;
      // Cyfry muszą się zgadzać dokładnie ("Dying Light 3" to nie "Dying Light 2").
      if (k.replace(/\D+/g, '') !== digits) continue;
      const d = boundedLevenshtein(norm, k, allowed);
      if (d > allowed) continue;
      const e = map.get(k);
      if (d < best) {
        best = d;
        bestEntry = e;
        ambiguous = false;
      } else if (d === best && e !== bestEntry) {
        ambiguous = true;
      }
    }
    if (bestEntry >= 0 && !ambiguous) hit = bestEntry;
  }
  if (hit === undefined) return null;
  const entry = prompt.answers[hit];
  return { entry: hit, meters: entry[0], shown: entry[1], norm };
}

// ---------- dzień w strefie Europe/Warsaw ----------

const warsawFmt = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Warsaw',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

/** "YYYY-MM-DD" w czasie warszawskim dla znacznika czasu w ms. */
export function warsawDay(ms) {
  return warsawFmt.format(new Date(ms));
}

/** Poprzedni dzień kalendarzowy dla "YYYY-MM-DD" (bez problemów z DST). */
export function prevDay(day) {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d - 1)).toISOString().slice(0, 10);
}

/** Ile ms do północy w Warszawie (bisekcja po zmianie daty). */
export function msUntilNextDay(ms) {
  const day = warsawDay(ms);
  let lo = ms;
  let hi = ms + 26 * 3600_000;
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2);
    if (warsawDay(mid) === day) lo = mid;
    else hi = mid;
  }
  return hi - ms;
}

export function isValidDay(s) {
  return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s + 'T00:00:00Z'));
}

// ---------- wybór pytań dnia ----------

function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministyczny wybór n różnych id kategorii dla danego dnia. */
export function pickPromptIds(day, ids, n = PROMPTS_PER_DAY) {
  const pool = [...ids].sort();
  const rnd = mulberry32(fnv1a(`glebia:${day}`));
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(n, pool.length));
}

// ---------- imię gracza ----------

/** Zwraca oczyszczony pseudonim (2-16 znaków) albo null. */
export function cleanName(input) {
  if (typeof input !== 'string') return null;
  const s = input
    .replace(/[\p{C}\p{Z}]+/gu, ' ')
    .replace(/[<>&"'`]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
  const len = [...s].length;
  return len >= 2 && len <= 16 ? s : null;
}
