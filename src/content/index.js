import nauka from './nauka.js';
import przyroda from './przyroda.js';
import geografia from './geografia.js';
import kultura from './kultura.js';
import internet from './internet.js';
import miejsca from './miejsca.js';
import ludzie from './ludzie.js';
import sportSzkola from './sport-szkola.js';
import polskiNet from './polski-net.js';
import uzupelnienia from './uzupelnienia.js';
import { normalize } from '../game.js';

// Id kategorii nigdy nie usuwamy ani nie zmieniamy: zapisane dni w bazie wskazują na nie po id.
const BASE = [
  ...nauka, ...przyroda, ...geografia, ...kultura, ...internet,
  ...miejsca, ...ludzie, ...sportSzkola, ...polskiNet,
];

/** Dokłada uzupełnienia do kategorii; wpis, którego nazwa lub alias już jest w kategorii, jest pomijany. */
function withExtras(prompt) {
  const extra = uzupelnienia[prompt.id];
  if (!extra) return prompt;
  const seen = new Set(prompt.answers.flatMap((e) => e.slice(1).map(normalize)));
  const added = [];
  for (const entry of extra) {
    const keys = entry.slice(1).map(normalize);
    if (keys.some((k) => !k || seen.has(k))) continue;
    keys.forEach((k) => seen.add(k));
    added.push(entry);
  }
  return { ...prompt, answers: [...prompt.answers, ...added] };
}

export const PROMPTS = BASE.map(withExtras);
