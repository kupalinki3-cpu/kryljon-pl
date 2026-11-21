// Krótkie dźwięki w stylu 8-bit (WebAudio). Kontekst powstaje dopiero po geście gracza; bez dźwięku gra działa tak samo.
let ctx = null;
let muted = false;

function audio() {
  if (muted) return null;
  try {
    ctx ??= new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq, dur, { type = 'square', vol = 0.04, at = 0, slideTo = null } = {}) {
  const c = audio();
  if (!c) return;
  const t = c.currentTime + at;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

const SCALE = [262, 330, 392, 523, 659, 784]; // C-dur, im rzadsza odpowiedź, tym wyżej

export const sfx = {
  get muted() { return muted; },
  setMuted(v) { muted = Boolean(v); },
  /** Odsłona wyniku: arpeggio tym dłuższe i wyższe, im głębsza odpowiedź (tier 0 = brak). */
  reveal(tier) {
    if (tier <= 0) return tone(180, 0.35, { type: 'sawtooth', slideTo: 90 });
    for (let i = 0; i < Math.min(tier, 6) ; i++) tone(SCALE[i], 0.12, { at: i * 0.07 });
    if (tier >= 5) tone(SCALE[5] * 2, 0.3, { type: 'triangle', at: 0.5, vol: 0.05 });
  },
  noEcho() { tone(220, 0.18, { type: 'triangle', vol: 0.05, slideTo: 140 }); },
  tick() { tone(880, 0.05, { vol: 0.03 }); },
  start() { tone(392, 0.08); tone(523, 0.12, { at: 0.08 }); },
};
