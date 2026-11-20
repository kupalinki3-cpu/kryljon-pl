import nauka from './nauka.js';
import przyroda from './przyroda.js';
import geografia from './geografia.js';
import kultura from './kultura.js';
import internet from './internet.js';

// Id kategorii nigdy nie usuwamy ani nie zmieniamy: zapisane dni w bazie wskazują na nie po id.
export const PROMPTS = [...nauka, ...przyroda, ...geografia, ...kultura, ...internet];
