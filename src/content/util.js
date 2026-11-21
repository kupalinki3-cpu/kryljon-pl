// Pomocnicze funkcje do zapisu treści. Wpis w kategorii: [metry, "nazwa", ...aliasy].
const fnv = (s) => {
  let h = 0x811c9dc5;
  for (const c of s) {
    h ^= c.codePointAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
};

/** Głębokość bazowa z lekkim, stałym rozrzutem zależnym od nazwy (±20%), żeby wpisy nie miały identycznych metrów. */
export const jit = (base, name) => Math.round((base * (0.8 + 0.4 * (fnv(name) / 4294967296))) / 10) * 10;

/** Grupa wpisów o podobnej rzadkości. Element to "Nazwa" albo ["Nazwa", "alias", ...]. */
export const group = (base, ...items) =>
  items.map((it) => {
    const a = Array.isArray(it) ? it : [it];
    return [jit(base, a[0]), ...a];
  });

export const cat = (id, text, ...groups) => ({ id, text, answers: groups.flat() });
