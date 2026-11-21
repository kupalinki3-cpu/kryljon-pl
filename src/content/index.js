import nauka from './nauka.js';
import przyroda from './przyroda.js';
import geografia from './geografia.js';
import kultura from './kultura.js';
import internet from './internet.js';
import miejsca from './miejsca.js';
import ludzie from './ludzie.js';
import sportSzkola from './sport-szkola.js';
import polskiNet from './polski-net.js';

// Id kategorii nigdy nie usuwamy ani nie zmieniamy: zapisane dni w bazie wskazują na nie po id.
export const PROMPTS = [
  ...nauka, ...przyroda, ...geografia, ...kultura, ...internet,
  ...miejsca, ...ludzie, ...sportSzkola, ...polskiNet,
];
