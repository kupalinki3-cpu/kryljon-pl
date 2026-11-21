import nauka from './nauka.js';
import przyroda from './przyroda.js';
import geografia from './geografia.js';
import kultura from './kultura.js';
import internet from './internet.js';
import miejsca from './miejsca.js';
import ludzie from './ludzie.js';
import sportSzkola from './sport-szkola.js';
import polskiNet from './polski-net.js';
import uzupelnieniaPodstawowe from './uzupelnienia.js';
import uzupPrzyroda from './uzup-przyroda.js';
import uzupKultura from './uzup-kultura.js';
import uzupLudzie from './uzup-ludzie.js';
import uzupReszta from './uzup-reszta.js';
import uzupNet from './uzup-net.js';
import uzupMasa from './uzup-masa.js';
import uzupMasa2 from './uzup-masa2.js';
import uzupMasa3 from './uzup-masa3.js';
import uzupMasa4 from './uzup-masa4.js';
import uzupMasa5 from './uzup-masa5.js';
import nowe from './nowe.js';
import nowe2 from './nowe2.js';
import nowe3 from './nowe3.js';
import nowe4 from './nowe4.js';
import { normalize } from '../game.js';

// Id kategorii nigdy nie usuwamy ani nie zmieniamy: zapisane dni w bazie wskazują na nie po id.
const uzupelnienia = {};
for (const part of [uzupelnieniaPodstawowe, uzupPrzyroda, uzupKultura, uzupLudzie, uzupReszta, uzupNet, uzupMasa, uzupMasa2, uzupMasa3, uzupMasa4, uzupMasa5]) {
  for (const [id, list] of Object.entries(part)) uzupelnienia[id] = [...(uzupelnienia[id] ?? []), ...list];
}

const BASE = [
  ...nauka, ...przyroda, ...geografia, ...kultura, ...internet,
  ...miejsca, ...ludzie, ...sportSzkola, ...polskiNet, ...nowe, ...nowe2, ...nowe3, ...nowe4,
];

/**
 * Dokłada uzupełnienia do kategorii. Gdy nazwa lub alias wpisu już istnieje w kategorii, nowe aliasy
 * dopisujemy do istniejącego wpisu (jego głębokość się nie zmienia); w przeciwnym razie powstaje nowy wpis.
 */
function withExtras(prompt) {
  const extra = uzupelnienia[prompt.id];
  if (!extra) return prompt;
  const answers = prompt.answers.map((e) => [...e]);
  const where = new Map();
  answers.forEach((e, i) => e.slice(1).forEach((n) => where.set(normalize(n), i)));
  const sorted = answers.map((e) => e[0]).sort((a, b) => a - b);
  const median = Math.round(sorted[Math.floor(sorted.length / 2)] / 10) * 10 || 100;
  for (const entry of extra) {
    // Wpis to [metry, nazwa, ...aliasy] albo samo [nazwa, ...aliasy]; bez metrów nowy wpis dostaje medianę kategorii.
    const hasMeters = typeof entry[0] === 'number';
    const names = hasMeters ? entry.slice(1) : entry;
    const hit = names.map((n) => where.get(normalize(n))).find((i) => i !== undefined);
    if (hit !== undefined) {
      for (const n of names) {
        const k = normalize(n);
        if (k && !where.has(k)) {
          answers[hit].push(n);
          where.set(k, hit);
        }
      }
    } else if (names.every((n) => normalize(n))) {
      answers.push(hasMeters ? [...entry] : [median, ...entry]);
      names.forEach((n) => where.set(normalize(n), answers.length - 1));
    }
  }
  return { ...prompt, answers };
}

// W kategoriach z osobami samo nazwisko (ostatni człon) też jest odpowiedzią, o ile nie koliduje z niczym w kategorii
// i jest jednoznaczne wśród osób. Nic nie zmienia się w głębokościach.
const PERSON_CATEGORIES = new Set([
  'naukowiec', 'pisarz', 'aktor', 'piosenkarz', 'prezenter', 'postac_historyczna', 'sportowiec', 'tworca', 'raper',
]);

function withSurnames(prompt) {
  if (!PERSON_CATEGORIES.has(prompt.id)) return prompt;
  const taken = new Set();
  prompt.answers.forEach((e) => e.slice(1).forEach((n) => taken.add(normalize(n))));
  const owners = new Map();
  prompt.answers.forEach((e, i) => {
    const words = normalize(e[1]).split(' ');
    const last = words[words.length - 1];
    if (words.length < 2 || last.length < 4 || taken.has(last)) return;
    owners.set(last, owners.has(last) ? -1 : i);
  });
  const answers = prompt.answers.map((e) => [...e]);
  for (const [name, i] of owners) if (i >= 0) answers[i].push(name);
  return { ...prompt, answers };
}

export const PROMPTS = BASE.map(withExtras).map(withSurnames);
