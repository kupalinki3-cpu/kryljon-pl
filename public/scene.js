// Scena: morze w pikselartowym stylu, bez dna. Rysowane na canvasie o niskiej rozdzielczości i skalowane bez wygładzania.
// Główne stworzenia korzystają z pikselowych ilustracji, a proste sprite’y są rysowane kodem.
// Świat poniżej powierzchni jest generowany kawałkami (chunkami) deterministycznie z numeru kawałka,
// więc głębokość może rosnąć bez limitu, a stworzenia zależą od głębokości.

const K = 0.8; // piksele sceny na metr głębokości
const CH = 400; // wysokość jednego kawałka świata w pikselach sceny
const DIVE_COLORS = ['215,242,255', '185,201,214', '79,176,255', '91,224,138', '255,200,87', '255,138,61', '197,123,255'];

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const WATER = [
  [0, '#2f86b3'], [150, '#1b6293'], [600, '#10416c'], [1500, '#0a2c4f'], [3000, '#071d37'],
  [5000, '#040f22'], [8000, '#02060f'], [12000, '#04040f'], [20000, '#060210'], [40000, '#030108'],
].map(([m, c]) => [m, hex(c)]);
const SKY_TOP = hex('#a9cde0');
const SKY_LOW = hex('#e9f3f4');

const mix = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
const css = (c) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
const clamp01 = (v) => Math.max(0, Math.min(1, v));

function waterColor(m) {
  if (m <= WATER[0][0]) return WATER[0][1];
  for (let i = 1; i < WATER.length; i++) {
    if (m <= WATER[i][0]) {
      const [m0, c0] = WATER[i - 1];
      const [m1, c1] = WATER[i];
      return mix(c0, c1, (m - m0) / (m1 - m0));
    }
  }
  return WATER[WATER.length - 1][1];
}

function sprite(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const x = c.getContext('2d');
  draw((col, a, b, cw, ch) => {
    x.fillStyle = col;
    x.fillRect(a, b, cw, ch);
  }, x);
  return c;
}
function artSprite(image, rect, width, height) {
  return sprite(width, height, (_r, ctx) => {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(image, ...rect, 0, 0, width, height);
  });
}

function drawSwim(ctx, image, x, y, tailOnLeft, bend, flip = false) {
  const { width, height } = image;
  const tailWidth = Math.round(width * 0.27);
  ctx.save();
  ctx.translate(x + (flip ? width : 0), y);
  if (flip) ctx.scale(-1, 1);
  // Przesuwamy grzbiet ogona stopniowo po pikselu, korpus pozostaje nieruchomy.
  const tailX = tailOnLeft ? 0 : width - tailWidth;
  const bodyX = tailOnLeft ? tailWidth : 0;
  ctx.drawImage(image, bodyX, 0, width - tailWidth, height, bodyX, 0, width - tailWidth, height);
  for (let i = 0; i < tailWidth; i += 1) {
    const distance = tailOnLeft ? tailWidth - i : i;
    const offset = Math.round(bend * distance / tailWidth);
    ctx.drawImage(image, tailX + i, 0, 1, height, tailX + i, offset, 1, height);
  }
  ctx.restore();
}

function flipped(src) {
  return sprite(src.width, src.height, (_r, x) => {
    x.translate(src.width, 0);
    x.scale(-1, 1);
    x.drawImage(src, 0, 0);
  });
}

const SIL = 'rgba(2,10,24,0.42)';
const fishS = sprite(8, 4, (R) => {
  R(SIL, 0, 0, 2, 1); R(SIL, 0, 3, 2, 1); R(SIL, 1, 1, 1, 2); R(SIL, 2, 1, 5, 2); R(SIL, 7, 1, 1, 2);
});
const fishM = sprite(14, 7, (R) => {
  R(SIL, 0, 1, 3, 2); R(SIL, 0, 4, 3, 2); R(SIL, 2, 2, 2, 3); R(SIL, 3, 2, 9, 3);
  R(SIL, 6, 1, 3, 1); R(SIL, 5, 5, 5, 1); R(SIL, 12, 3, 2, 1);
});
const fishSL = flipped(fishS);
const fishML = flipped(fishM);
function jelly(body, glow) {
  return sprite(9, 12, (R) => {
    R(body, 2, 0, 5, 1); R(body, 1, 1, 7, 1); R(body, 0, 2, 9, 3);
    R(glow, 3, 2, 2, 1);
    R(body, 1, 5, 1, 4); R(body, 3, 5, 1, 6); R(body, 5, 5, 1, 5); R(body, 7, 5, 1, 7);
  });
}
const jellyCyan = jelly('rgba(110,225,255,0.85)', 'rgba(255,255,255,0.9)');
const jellyPink = jelly('rgba(255,120,170,0.85)', 'rgba(255,255,255,0.9)');
const anglerR = sprite(20, 14, (R) => {
  R('#0a1424', 2, 5, 13, 7); R('#0a1424', 0, 7, 3, 3); R('#0a1424', 13, 8, 5, 3);
  R('#d9e8f2', 14, 8, 1, 1); R('#d9e8f2', 16, 8, 1, 1);
  R('#ffc857', 12, 6, 2, 2);
  R('#0a1424', 14, 2, 1, 4); R('#0a1424', 15, 1, 3, 1);
  R('#fff2a8', 17, 0, 3, 3);
});
const anglerL = flipped(anglerR);

// Kryl na żyłce: 15×11 px, trzy klatki ruchu odnóży, ogona i czułków.
const KRILL_W = 15;
const KRILL_H = 11;
const KRILL_PAL = {
  r: '#ef3151', l: '#fff7fa', d: '#b62542', D: '#86132d', w: '#ffffff', k: '#1a0a12',
  a: '#fff7fa', t: '#f97990', g: '#f7dce2',
};
function krillFrame(rows) {
  return sprite(KRILL_W, KRILL_H, (R) => {
    rows.forEach((row, y) => [...row].forEach((ch, x) => ch !== '.' && R(KRILL_PAL[ch], x, y, 1, 1)));
  });
}
const krillA = krillFrame([
  '..........a.a..',
  '.........a..a..',
  '....lllll.a.a..',
  '..llrrrrrrrr...',
  '.llrrdrrdrrrwk.',
  'tlrrd.rrd.rrrrr',
  'ttrd..drd..rrd.',
  'tt.d...d...ggD.',
  '.t.....g.g.g...',
  '......g..g.g...',
  '...............',
]);
const krillB = krillFrame([
  '..........a.a..',
  '..........aa.a.',
  '....lllll...a..',
  '..llrrrrrrrr...',
  '.llrrdrrdrrrwk.',
  'tlrrd.rrd.rrrrr',
  'ttrd..drd..rrd.',
  '.tt.d..d...ggD.',
  '.tt....g..g.g..',
  '.......g.g..g..',
  '...............',
]);

const krillC = krillFrame([
  '.........a..a..',
  '..........a.a..',
  '....lllll..a...',
  '..llrrrrrrrr...',
  '.llrrdrrdrrrwk.',
  'tlrrd.rrd.rrrrr',
  'trrd..drd..rrd.',
  't..d...d...ggD.',
  '........g.g.g..',
  '.........g.g.g.',
  '...............',
]);
const krillFrames = [krillA, krillB, krillC, krillB];

// ---- nowe stworzenia (sprite'y generowane kodem) ----
const rowsSprite = (pal, rows) =>
  sprite(rows[0].length, rows.length, (R) => rows.forEach((row, y) => [...row].forEach((ch, x) => ch !== '.' && R(pal[ch], x, y, 1, 1))));

const turtleR = rowsSprite({ s: 'rgba(32,96,70,0.92)', h: 'rgba(120,205,150,0.9)', f: 'rgba(60,140,100,0.92)', e: '#10261c' }, [
  '.....hhhhh........',
  '...hhsssssshh.....',
  '..hsshhsshhssff...',
  '.fsshsshhsshssfff.',
  '.fsshsshhsshsssfe.',
  '..hsshhsshhssff...',
  '...hhsssssshh.....',
  '.....hhhhh........',
]);
const turtleL = flipped(turtleR);

function silhouetteFish(w, h, bodyCol, bellyCol, hump, tailLen) {
  // boczny sylwet ryby/ssaka; hump 0..1 — jak wypukły grzbiet
  return sprite(w, h, (R) => {
    const cy = Math.floor(h / 2);
    const len = w - tailLen;
    for (let x = 0; x < len; x++) {
      const t = x / (len - 1);
      const hh = Math.round((h / 2 - 1.5) * Math.sin(Math.PI * Math.pow(t, 0.7)) * (0.55 + 0.45 * hump));
      R(bodyCol, tailLen + x, cy - hh, 1, hh * 2 + 1);
      if (hh > 1) R(bellyCol, tailLen + x, cy + Math.floor(hh / 2), 1, Math.ceil(hh / 2) + 1);
    }
    // ogon rozwidlony
    for (let i = 0; i < tailLen; i++) {
      const sp = Math.round((i / tailLen) * (h / 2 - 1));
      R(bodyCol, tailLen - 1 - i, cy - sp, 1, 1);
      R(bodyCol, tailLen - 1 - i, cy + sp, 1, 1);
      R(bodyCol, tailLen - 1 - i, cy, 1, 1);
    }
  });
}
const sharkR = (() => {
  const base = silhouetteFish(34, 12, 'rgba(34,56,76,0.9)', 'rgba(150,176,192,0.75)', 0.8, 7);
  return sprite(34, 15, (R, x) => {
    x.drawImage(base, 0, 3);
    R('rgba(34,56,76,0.9)', 17, 0, 1, 3); R('rgba(34,56,76,0.9)', 18, 1, 3, 2); R('rgba(34,56,76,0.9)', 16, 2, 6, 1);
    R('#ffffff', 28, 6, 1, 1); R('#05080c', 29, 6, 1, 1);
  });
})();
const sharkL = flipped(sharkR);
const whaleR = (() => {
  const body = silhouetteFish(86, 26, 'rgba(8,24,46,0.72)', 'rgba(96,140,172,0.34)', 0.9, 16);
  return sprite(86, 32, (R, x) => {
    x.drawImage(body, 0, 3);
    R('rgba(8,24,46,0.72)', 30, 24, 14, 3); R('rgba(8,24,46,0.72)', 34, 27, 8, 2);
    for (let i = 0; i < 6; i++) R('rgba(150,190,215,0.22)', 52 + i * 4, 18, 2, 1);
    R('#cfe3f2', 74, 14, 1, 1);
  });
})();
const whaleL = flipped(whaleR);
const wreck = (() => {
  const H = '#0b1521'; const M = '#122234'; const G = 'rgba(60,150,110,0.7)'; const W = '#ffcf6a';
  return sprite(58, 34, (R) => {
    // pochylony kadłub
    for (let i = 0; i < 9; i++) R(H, 4 + i * 2, 20 + Math.floor(i * 0.9), 50 - i * 4, 2);
    R(M, 2, 17, 54, 3);
    R(H, 18, 7, 20, 10); R(M, 17, 6, 22, 2);
    [21, 27, 33].forEach((x) => R(W, x, 10, 3, 3));
    R(H, 12, 0, 1, 18); R(H, 8, 4, 9, 1); R(H, 44, 3, 1, 14); R(H, 41, 8, 7, 1);
    R(G, 3, 16, 6, 2); R(G, 20, 6, 10, 1); R(G, 46, 17, 6, 2);
    R(H, 50, 21, 6, 3);
  });
})();
const reefOrange = rowsSprite({ o: '#ff8a2a', w: '#fff5e6', k: '#251008' }, ['..oo...', '.owwoo.', 'oowwoko', '.owwoo.', '..oo...']);
const reefBlue = rowsSprite({ b: '#3a8dff', y: '#ffd44d', k: '#08142a' }, ['...bb..', '.bbbbb.', 'bbbbbkb', '.bbybb.', '..yb...']);
const reefYellow = rowsSprite({ y: '#ffd44d', b: '#2a1a05', k: '#251008' }, ['..yy...', '.yyyyy.', 'yybyyky', '.yyyyy.', '..yy...']);
const reefOrangeL = flipped(reefOrange); const reefBlueL = flipped(reefBlue); const reefYellowL = flipped(reefYellow);
const mantaFrame = (flap) =>
  sprite(30, 19, (R) => {
    const wing = '#304e6a';
    const edge = '#567995';
    for (const side of [-1, 1]) {
      for (let row = 1; row <= 7 - flap; row++) {
        const y = 9 + side * row;
        const left = 13 - row;
        const right = 24 - row * 2;
        R(wing, left, y, right - left + 1, 1);
        R(edge, right, y, 1, 1);
      }
    }
    R(edge, 1, 11, 4, 1);
    R(edge, 5, 10, 4, 1);
    R(edge, 9, 9, 5, 1);
    R('#203b56', 13, 8, 12, 3);
    R(wing, 19, 7, 6, 1);
    R(wing, 19, 11, 6, 1);
    R(edge, 24, 7, 3, 1);
    R(edge, 24, 11, 3, 1);
    R('#bce8f6', 23, 8, 1, 1);
  });
const mantaA = mantaFrame(0);
const mantaB = mantaFrame(2);
const mantaAL = flipped(mantaA);
const mantaBL = flipped(mantaB);

const boat = sprite(44, 26, (R) => {
  const NAVY = '#14263d';
  const hull = [[0, 14, 44], [1, 15, 42], [2, 16, 40], [3, 17, 38], [5, 18, 34], [7, 19, 30], [9, 20, 26]];
  hull.forEach(([x, y, w]) => R(NAVY, x, y, w, 1));
  R('#d8334a', 1, 15, 42, 1);
  R('#f1f5f8', 14, 6, 16, 8);
  R(NAVY, 13, 5, 18, 2);
  [16, 21, 26].forEach((x) => R('#ffd36b', x, 8, 3, 3));
  R('#d8334a', 25, 1, 3, 4);
  R(NAVY, 25, 1, 3, 1);
  R(NAVY, 9, 0, 1, 14);
  R('#f1f5f8', 10, 0, 8, 2);
  R('#d8334a', 10, 2, 8, 2);
  R('#9fb4c6', 10, 0, 8, 1);
});

function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GLOW_COLORS = ['98,230,255', '255,92,122', '255,200,87', '197,123,255'];

/** Zawartość jednego kawałka świata; zależy tylko od jego numeru (czyli od głębokości). */
function makeChunk(ci) {
  const rand = rng(Math.imul(ci + 1, 2654435761) ^ 0x9e3779b9);
  const y0 = ci * CH;
  const creatures = [];
  const glow = [];
  const dir = () => (rand() < 0.5 ? -1 : 1);
  const n = 3 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) {
    const wy = y0 + rand() * CH;
    const m = wy / K;
    if (m < 50) continue;
    const d = dir();
    if (m < 1500) {
      const rare = rand();
      if (m < 160 && rare < 0.35) {
        const cnt = 3 + Math.floor(rand() * 4);
        const fx = rand();
        const sp = (5 + rand() * 6) * d;
        const kind = ['reefOrange', 'reefBlue', 'reefYellow'][Math.floor(rand() * 3)];
        for (let j = 0; j < cnt; j++) creatures.push({ kind, wy: wy + (rand() - 0.5) * 26, fx: fx + j * 0.02, sp, ph: rand() * 6 });
      } else if (m < 700 && rare < 0.45) creatures.push({ kind: 'turtle', wy, fx: rand(), sp: (3 + rand() * 2) * d, ph: rand() * 6 });
      else if (m >= 200 && rare < 0.52) creatures.push({ kind: 'manta', wy, fx: rand(), sp: (4 + rand() * 3) * d, ph: rand() * 6 });
      else if (m >= 300 && rare < 0.58) creatures.push({ kind: 'shark', wy, fx: rand(), sp: (7 + rand() * 4) * d, ph: rand() * 6 });
      else if (m >= 250 && m < 1400 && rare < 0.62) creatures.push({ kind: 'wreck', wy, fx: 0.2 + rand() * 0.55, sp: 0, ph: 0 });
      else if (rand() < 0.6) {
        const cnt = 4 + Math.floor(rand() * 5);
        const fx = rand();
        const sp = (6 + rand() * 8) * d;
        for (let j = 0; j < cnt; j++) {
          creatures.push({ kind: 'fishS', wy: wy + (rand() - 0.5) * 20, fx: fx + j * 0.014, sp, ph: rand() * 6 });
        }
      } else creatures.push({ kind: 'fishM', wy, fx: rand(), sp: (5 + rand() * 6) * d, ph: rand() * 6 });
    } else if (m < 3600) {
      const rr = rand();
      if (rr < 0.1) creatures.push({ kind: 'whale', wy, fx: rand(), sp: (2 + rand() * 1.5) * d, ph: rand() * 6 });
      else if (rr < 0.22) creatures.push({ kind: 'jellyCyan', wy, fx: rand(), sp: 3 * d, ph: rand() * 6 });
      else creatures.push(rand() < 0.3
        ? { kind: 'jellyCyan', wy, fx: rand(), sp: 2 * d, ph: rand() * 6 }
        : { kind: 'fishM', wy, fx: rand(), sp: (4 + rand() * 5) * d, ph: rand() * 6 });
    } else if (m < 10000) {
      const r = rand();
      if (r < 0.3) creatures.push({ kind: 'angler', wy, fx: rand(), sp: (3 + rand() * 3) * d, ph: rand() * 6 });
      else creatures.push({ kind: r < 0.65 ? 'jellyCyan' : 'jellyPink', wy, fx: rand(), sp: 2 * d, ph: rand() * 6 });
    } else {
      // legenda głębin: coraz mniej ryb, coraz więcej świateł i oczu w ciemności
      const r = rand();
      if (r < 0.25) creatures.push({ kind: 'angler', wy, fx: rand(), sp: (2 + rand() * 3) * d, ph: rand() * 6 });
      else if (r < 0.5) creatures.push({ kind: 'jellyBig', wy, fx: rand(), sp: 1.2 * d, ph: rand() * 6 });
      else if (r < 0.63) creatures.push({ kind: 'isopod', wy, fx: rand(), sp: 2 * d, ph: rand() * 6 });
      else if (r < 0.8) creatures.push({ kind: 'eyes', wy, fx: rand(), sp: 0, ph: rand() * 6 });
      else creatures.push({ kind: 'ribbon', wy, fx: rand(), sp: 4 * d, ph: rand() * 6 });
    }
  }
  const mm = (y0 + CH / 2) / K;
  if (mm > 1800) {
    const cnt = Math.min(34, 5 + Math.floor(mm / 700));
    for (let i = 0; i < cnt; i++) {
      glow.push({ x: rand(), wy: y0 + rand() * CH, ph: rand() * 6, c: GLOW_COLORS[Math.floor(rand() * (mm > 9000 ? 4 : 3))] });
    }
  }
  return { creatures, glow };
}

function buildStatic() {
  const rand = rng(20261121);
  const snow = Array.from({ length: 80 }, () => ({
    x: rand(), y: rand() * 400, par: 0.3 + rand() * 0.7, dx: (rand() - 0.5) * 4, a: 0.14 + rand() * 0.22,
  }));
  const streaks = Array.from({ length: 46 }, () => ({ x: rand(), y: rand() * 400, par: 0.5 + rand() * 0.9, a: 0.4 + rand() * 0.6 }));
  const clouds = Array.from({ length: 5 }, (_, i) => ({ x: rand(), wy: -(40 + i * 14 + rand() * 20), w: 18 + Math.floor(rand() * 20), sp: 1 + rand() * 2 }));
  return { snow, streaks, clouds };
}

const RAYS = [{ x: 0.15, w: 10, s: 0.35 }, { x: 0.38, w: 16, s: 0.3 }, { x: 0.6, w: 9, s: 0.4 }, { x: 0.82, w: 14, s: 0.32 }];
const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

/**
 * onFrame({ depth, camY, S, K, youY, H }) leci przy każdej zmianie głębokości lub rozmiaru okna:
 * youY to pozycja kryla w pikselach CSS od góry okna, reszta służy do narysowania przewijanej linijki.
 */
export function createScene(canvas, { onFrame } = {}) {
  const ctx = canvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stat = buildStatic();
  const chunks = new Map();
  const bubbles = [];
  const pings = [];
  let S = 4, W = 0, H = 0;
  let shown = 0, target = 0, from = 0, t0 = -1, dur = 1;
  let diveColor = DIVE_COLORS[0];
  let dirty = true;
  let krillArt, anglerArt, jellyArt, mantaArt, isopodArt, cave, surfaceArt, trawler;
  const loadArt = (file, onLoad) => {
    const image = new Image();
    image.onload = () => { onLoad(image); dirty = true; };
    image.src = new URL(file, import.meta.url);
  };
  loadArt('./art/kryl-i-zabnica.png', (image) => {
    krillArt = artSprite(image, [0, 0, 24, 18], 24, 18);
  });
  loadArt('./art/powierzchnia-v2.png', (image) => { surfaceArt = image; });
  loadArt('./art/glebiny-v2.png', (image) => { cave = image; });
  loadArt('./art/kuter-v2.png', (image) => {
    trawler = Array.from({ length: 4 }, (_, i) => artSprite(image, [i * 543, 156, 543, 398], 74, 54));
  });
  loadArt('./art/stworzenia-v2.png', (image) => {
    const frames = (y, h, width, height, padding = 0) => Array.from({ length: 4 }, (_, i) => {
      const frame = artSprite(image, [i * 362 + padding, y, 362 - 2 * padding, h], width, height);
      return { frame, reverse: flipped(frame) };
    });
    anglerArt = frames(98, 239, 65, 43);
    jellyArt = frames(403, 294, 26, 30, 44);
    mantaArt = frames(774, 232, 39, 25);
  });
  loadArt('./art/stworzenia.png', (image) => {
    isopodArt = artSprite(image, [631, 734, 615, 391], 43, 27);
  });
  let nextBubble = 0;
  let lastNow = 0;
  let prevPx = 0;
  let vel = 0; // prędkość zejścia w pikselach sceny na sekundę (wygładzona)

  const getChunk = (ci) => {
    let c = chunks.get(ci);
    if (!c) {
      c = makeChunk(ci);
      chunks.set(ci, c);
      if (chunks.size > 60) for (const k of chunks.keys()) if (Math.abs(k - ci) > 12) chunks.delete(k);
    }
    return c;
  };

  const camOf = (m) => Math.max(-0.28 * H, m * K - 0.42 * H);

  function emit() {
    if (!onFrame) return;
    const camY = camOf(shown);
    onFrame({ depth: shown, camY, S, K, youY: (shown * K + 17 - camY) * S, H: H * S });
  }

  function resize() {
    S = innerWidth < 640 ? 3 : 4;
    W = Math.ceil(innerWidth / S);
    H = Math.ceil(innerHeight / S);
    canvas.width = W;
    canvas.height = H;
    ctx.imageSmoothingEnabled = false;
    dirty = true;
    emit();
  }
  addEventListener('resize', resize);
  resize();

  function setDepth(m, animate = true, tier = 0) {
    target = m;
    dirty = true;
    if (!animate || reduce) {
      shown = from = m;
      t0 = -1;
      emit();
      return;
    }
    from = shown;
    diveColor = DIVE_COLORS[tier] ?? DIVE_COLORS[0];
    t0 = performance.now();
    // Nawet mały zjazd trwa dość długo i ma wyraźny rozbieg, a duży jest szybszy, nie wolniejszy w odbiorze.
    dur = Math.min(3100, 950 + Math.sqrt(Math.abs(m - from)) * 21);
  }

  const krillPos = (camY, t) => {
    const f = clamp01((vel - 30) / 260);
    const kx = Math.round(W * (S === 3 ? 0.17 : 0.14) + Math.sin(t * 1.6) * (1.5 + f * 2.5));
    const ky = Math.round(shown * K + 14 - camY + Math.sin(t * 2.1));
    return [kx, ky];
  };

  function burst() {
    if (reduce) return;
    const camY = camOf(shown);
    const [kx, ky] = krillPos(camY, lastNow / 1000);
    for (let i = 0; i < 22; i++) {
      bubbles.push({ x: kx + 7 + (Math.random() - 0.5) * 14, wy: ky + camY + 3 + (Math.random() - 0.5) * 8, vy: 14 + Math.random() * 28, r: Math.random() < 0.18 ? 3 : Math.random() < 0.4 ? 2 : 1, age: 0, wob: 1 + Math.random() * 1.6 });
    }
  }

  /** Brak echa: z kryla rozchodzi się pierścień sonaru, który nic nie odbija. */
  function ping() {
    if (reduce) return;
    pings.push({ age: 0 });
    dirty = true;
  }

  function disc(col, cx, cy, r) {
    ctx.fillStyle = col;
    for (let dy = -r; dy <= r; dy++) {
      const w = Math.floor(Math.sqrt(r * r - dy * dy));
      ctx.fillRect(Math.round(cx) - w, Math.round(cy) + dy, 2 * w + 1, 1);
    }
  }

  function fill(col, x, y, w, h) {
    ctx.fillStyle = col;
    ctx.fillRect(Math.round(x), Math.round(y), w, h);
  }

  function drawCreature(c, t, camY, surfaceY) {
    const y = Math.round(c.wy - camY + Math.sin(t * 0.8 + c.ph) * 2);
    if (y < -24 || y > H + 24 || y < surfaceY + 2) return;
    const span = W + 60;
    const x = Math.round((((c.fx * span + t * c.sp) % span) + span) % span - 30);
    const right = c.sp > 0;
    switch (c.kind) {
      case 'fishS': ctx.drawImage(right ? fishS : fishSL, x, y); break;
      case 'fishM': ctx.drawImage(right ? fishM : fishML, x, y); break;
      case 'jellyCyan': {
        const pose = Math.floor(t * 3 + c.ph) % 4;
        ctx.drawImage(jellyArt?.[pose].frame ?? jellyCyan, x, y + Math.round(Math.sin(t * 1.5 + c.ph) * 3));
        break;
      }
      case 'isopod':
        if (isopodArt) drawSwim(ctx, isopodArt, x, y, true, reduce ? 0 : Math.sin(t * 3 + c.ph) * 1.4, !right);
        break;
      case 'jellyPink': ctx.drawImage(jellyPink, x, y + Math.round(Math.sin(t * 1.5 + c.ph) * 3)); break;
      case 'jellyBig': {
        const by = y + Math.round(Math.sin(t * 1.2 + c.ph) * 4);
        ctx.drawImage(jellyCyan, x, by, 18, 24);
        disc('rgba(110,225,255,0.07)', x + 9, by + 6, 14);
        break;
      }
      case 'turtle': ctx.drawImage(right ? turtleR : turtleL, x, y + Math.round(Math.sin(t * 1.4 + c.ph) * 2)); break;
      case 'shark': ctx.drawImage(right ? sharkR : sharkL, x, y); break;
      case 'whale': ctx.drawImage(right ? whaleR : whaleL, x, y + Math.round(Math.sin(t * 0.5 + c.ph) * 3)); break;
      case 'manta': {
        if (mantaArt) {
          const pose = mantaArt[Math.floor(t * 3 + c.ph) % 4];
          ctx.drawImage(right ? pose.frame : pose.reverse, x, y);
          break;
        }
        const flapPhase = Math.floor(t * 2.2 + c.ph) % 2;
        ctx.drawImage(right ? (flapPhase ? mantaB : mantaA) : (flapPhase ? mantaBL : mantaAL), x, y);
        break;
      }
      case 'wreck': {
        const wx = Math.round(c.fx * W);
        ctx.drawImage(wreck, wx, y);
        const a = 0.35 + 0.25 * Math.sin(t * 1.3 + c.ph);
        disc(`rgba(255,207,106,${(0.05 + a * 0.05).toFixed(3)})`, wx + 29, y + 12, 9);
        break;
      }
      case 'reefOrange': ctx.drawImage(right ? reefOrange : reefOrangeL, x, y); break;
      case 'reefBlue': ctx.drawImage(right ? reefBlue : reefBlueL, x, y); break;
      case 'reefYellow': ctx.drawImage(right ? reefYellow : reefYellowL, x, y); break;
      case 'angler': {
        if (anglerArt) {
          const pose = anglerArt[Math.floor(t * 5 + c.ph) % 4];
          ctx.drawImage(right ? pose.frame : pose.reverse, x, y);
          const lureX = x + (right ? 58 : 7);
          const glow = reduce ? 0.09 : 0.08 + 0.05 * Math.sin(t * 3 + c.ph);
          disc(`rgba(120,227,245,${glow.toFixed(3)})`, lureX, y + 10, 7);
          break;
        }
        ctx.drawImage(right ? anglerR : anglerL, x, y);
        const lx = right ? x + 18 : x + 1;
        const a = 0.5 + 0.5 * Math.sin(t * 3 + c.ph);
        disc(`rgba(255,242,168,${(0.07 + a * 0.05).toFixed(3)})`, lx, y + 1, 9);
        disc(`rgba(255,242,168,${(0.1 + a * 0.08).toFixed(3)})`, lx, y + 1, 5);
        break;
      }
      case 'eyes': {
        const x2 = Math.round(c.fx * W);
        const open = Math.sin(t * 0.7 + c.ph) > -0.85;
        if (open) {
          disc('rgba(255,70,70,0.12)', x2, y, 6);
          fill('#ff6a5a', x2 - 3, y, 2, 2);
          fill('#ff6a5a', x2 + 2, y, 2, 2);
        }
        break;
      }
      case 'ribbon': {
        for (let k = 0; k < 9; k++) {
          const px = x + (right ? -k * 4 : k * 4);
          const py = y + Math.round(Math.sin(t * 2 + k * 0.7 + c.ph) * 3);
          fill(`rgba(197,123,255,${(0.75 - k * 0.07).toFixed(2)})`, px, py, 2, 2);
        }
        break;
      }
      default:
    }
  }

  function render(t, dt, camY) {
    const surfaceY = Math.round(-camY);
    const f = reduce ? 0 : clamp01((vel - 30) / 260);

    // niebo
    if (surfaceY > 0) {
      for (let y = 0; y < surfaceY; y += 3) fill(css(mix(SKY_TOP, SKY_LOW, y / surfaceY)), 0, y, W, 3);
      // słońce z poświatą i mewy
      const sunX = Math.round(W * 0.8);
      const sunY = Math.min(surfaceY - 22, 42 - camY * 0.6 + 40);
      if (sunY > 4) {
        disc('rgba(255,244,200,0.10)', sunX, sunY, 34);
        disc('rgba(255,244,200,0.18)', sunX, sunY, 22);
        disc('rgba(255,248,215,0.55)', sunX, sunY, 12);
        disc('#fffbe6', sunX, sunY, 8);
      }
      for (let g = 0; g < 3; g++) {
        const gx = (((g * 173 + t * (9 + g * 3)) % (W + 40)) + W + 40) % (W + 40) - 20;
        const gy = surfaceY - 30 - g * 16 + Math.round(Math.sin(t * 1.6 + g) * 2);
        if (gy < 4) continue;
        const wing = Math.sin(t * 5 + g * 2) > 0 ? 1 : 0;
        fill('rgba(40,60,80,0.8)', gx, gy + wing, 2, 1); fill('rgba(40,60,80,0.8)', gx + 2, gy + 1 - wing, 2, 1);
        fill('rgba(40,60,80,0.8)', gx + 4, gy + wing, 2, 1);
      }
      for (const c of stat.clouds) {
        const cy = c.wy - camY;
        if (cy < -8 || cy > surfaceY) continue;
        const cx = (((c.x * W + t * c.sp) % (W + 60)) + W + 60) % (W + 60) - 30;
        fill('rgba(255,255,255,0.75)', cx, cy, c.w, 3);
        fill('rgba(255,255,255,0.75)', cx + 4, cy - 3, c.w - 10, 3);
        fill('rgba(255,255,255,0.75)', cx + 8, cy - 6, Math.max(4, c.w - 20), 3);
      }
    }
    // woda
    for (let y = Math.max(0, surfaceY); y < H; y += 3) fill(css(waterColor((camY + y + 1) / K)), 0, y, W, 3);

    const waterTop = Math.max(0, surfaceY);
    const waterHeight = H - waterTop;
    if (surfaceArt && shown < 170) {
      const height = Math.max(H * 1.16, W * surfaceArt.height / surfaceArt.width);
      const width = height * surfaceArt.width / surfaceArt.height;
      ctx.save();
      ctx.globalAlpha = 1 - clamp01((shown - 35) / 135);
      ctx.drawImage(surfaceArt, Math.round((W - width) / 2), Math.round(surfaceY - height * 0.28), Math.ceil(width), Math.ceil(height));
      ctx.restore();
    }
    if (cave && shown > 45 && waterHeight > 0) {
      const scale = Math.max(W / cave.width, waterHeight / cave.height);
      const width = Math.ceil(cave.width * scale);
      const height = Math.ceil(cave.height * scale);
      const x = Math.round((W - width) * (S === 3 ? 0.08 : 0.5));
      const y = waterTop + Math.round((waterHeight - height) / 2);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, waterTop, W, waterHeight);
      ctx.clip();
      ctx.globalAlpha = clamp01((shown - 45) / 135) * (0.96 - 0.31 * clamp01((shown - 1600) / 5000));
      ctx.drawImage(cave, x, y, width, height);
      ctx.restore();
    }

    // promienie światła
    for (const r of RAYS) {
      for (let y = Math.max(0, surfaceY); y < H; y += 2) {
        const m = (camY + y) / K;
        if (m > 1500) break;
        const a = (surfaceArt && m < 150 ? 0.024 : 0.043) * (1 - m / 1500);
        const x = r.x * W + (y - surfaceY) * r.s + Math.sin(t * 0.3 + r.x * 9) * 6;
        fill(`rgba(190,235,255,${a.toFixed(3)})`, x, y, r.w, 2);
      }
    }

    // refleksy światła tańczące pod powierzchnią (znikają z głębokością)
    if (!reduce) {
      for (let i = 0; i < 60; i++) {
        const base = Math.max(0, surfaceY);
        const wy = base + 4 + ((i * 53) % 150);
        const m = (camY + wy) / K;
        if (m > 180 || wy > H) continue;
        const px = (((i * 97 + t * (4 + (i % 5))) % W) + W) % W;
        const a = (0.12 * (1 - m / 180) * (0.5 + 0.5 * Math.sin(t * 2.2 + i))).toFixed(3);
        fill(`rgba(230,250,255,${a})`, px, wy, 3 + (i % 3), 1);
      }
    }

    // Rozbite pasma światła pod falami podążają za powierzchnią.
    for (let i = 0; i < 20; i += 1) {
      const y = surfaceY + 8 + (i * 17) % 76;
      if (y < 0 || y >= H) continue;
      const start = ((i * 89 + Math.round(t * 12)) % 73) - 73;
      const alpha = (0.048 * (1 - (y - surfaceY) / 85)).toFixed(3);
      for (let x = start; x < W; x += 73) {
        const length = 8 + (i * 13) % 19;
        fill(`rgba(178,232,255,${alpha})`, x, y, length, 1);
        fill(`rgba(178,232,255,${alpha})`, x + length - 1, y + 1, 4, 1);
      }
    }

    // zawartość kawałków świata widocznych na ekranie
    const ciMin = Math.max(0, Math.floor(camY / CH) - 1);
    const ciMax = Math.floor((camY + H) / CH) + 1;
    for (let ci = ciMin; ci <= ciMax; ci++) {
      const ch = getChunk(ci);
      for (const g of ch.glow) {
        const y = g.wy - camY;
        if (y < 0 || y > H) continue;
        const a = 0.35 + 0.35 * Math.sin(t * 2 + g.ph);
        const x = g.x * W;
        disc(`rgba(${g.c},${(a * 0.16).toFixed(3)})`, x, y, 2);
        fill(`rgba(${g.c},${a.toFixed(3)})`, x, y, 1, 1);
      }
      for (const c of ch.creatures) drawCreature(c, t, camY, surfaceY);
    }

    // linka i haczyk z krylem
    const [kx, ky] = krillPos(camY, t);
    const lineTop = Math.max(0, surfaceY);
    fill('rgba(235,245,255,0.55)', kx + 7, lineTop, 1, Math.max(0, ky - lineTop - 2));
    disc('rgba(255,92,122,0.08)', kx + 7, ky + 5, 13);
    disc('rgba(255,92,122,0.12)', kx + 7, ky + 5, 8);
    // nóżki i ogon: szybciej przy zjeździe
    const flap = reduce ? 0 : Math.floor(t * (8 + f * 12)) % krillFrames.length;
    if (krillArt) {
      const bend = reduce ? 0 : [0, -1, 0, 1][flap];
      drawSwim(ctx, krillArt, kx - 5, ky - 5, true, bend);
    } else {
      ctx.drawImage(krillFrames[flap], kx, ky);
    }

    // pierścienie sonaru (brak echa)
    for (let i = pings.length - 1; i >= 0; i--) {
      const p = pings[i];
      p.age += dt;
      const life = p.age / 1.1;
      if (life >= 1) { pings.splice(i, 1); continue; }
      const r = 4 + life * 70;
      const a = (0.7 * (1 - life)).toFixed(2);
      const steps = Math.max(24, Math.floor(r * 3));
      for (let k = 0; k < steps; k++) {
        const ang = (k / steps) * Math.PI * 2;
        fill(`rgba(160,235,255,${a})`, kx + 7 + Math.cos(ang) * r, ky + 5 + Math.sin(ang) * r, 1, 1);
      }
    }

    // bąbelki (przy zejściu gęsty strumień za krylem)
    if (!reduce) {
      nextBubble -= dt;
      if (nextBubble <= 0) {
        nextBubble = 0.4 - f * 0.36;
        const burstN = f > 0.3 ? 2 : 1;
        for (let b = 0; b < burstN; b++) {
          const big = Math.random();
          bubbles.push({ x: kx + 3 + Math.random() * 9, wy: ky + camY - 2, vy: 10 + Math.random() * 10 + f * 60, r: big < 0.07 + f * 0.1 ? 3 : big < 0.3 + f * 0.25 ? 2 : 1, age: 0, wob: 1 + Math.random() * 1.6 });
        }
      }
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.wy -= b.vy * dt;
      b.age += dt;
      const by = b.wy - camY;
      if (by < surfaceY || by > H + 40 || b.age > 7) { bubbles.splice(i, 1); continue; }
      const bx = Math.round(b.x + Math.sin(b.age * 3 + i) * (b.wob ?? 1.5));
      const byr = Math.round(by);
      // bąbelek rośnie w drodze do góry (rozprężanie), a tuż pod powierzchnią pęka
      const size = b.r + (b.age > 2.4 && b.r < 3 ? 1 : 0);
      const nearTop = by - surfaceY < 6;
      if (nearTop) { fill('rgba(220,245,255,0.5)', bx - 1, byr, 1, 1); fill('rgba(220,245,255,0.5)', bx + 2, byr, 1, 1); continue; }
      if (size === 1) fill('rgba(200,238,255,0.6)', bx, byr, 2, 2);
      else if (size === 2) {
        const col = 'rgba(200,238,255,0.55)';
        fill(col, bx + 1, byr, 2, 1); fill(col, bx + 1, byr + 3, 2, 1); fill(col, bx, byr + 1, 1, 2); fill(col, bx + 3, byr + 1, 1, 2);
        fill('rgba(255,255,255,0.9)', bx + 1, byr + 1, 1, 1);
      } else {
        const col = 'rgba(200,238,255,0.5)';
        fill(col, bx + 2, byr, 2, 1); fill(col, bx + 2, byr + 5, 2, 1);
        fill(col, bx + 1, byr + 1, 1, 1); fill(col, bx + 4, byr + 1, 1, 1); fill(col, bx + 1, byr + 4, 1, 1); fill(col, bx + 4, byr + 4, 1, 1);
        fill(col, bx, byr + 2, 1, 2); fill(col, bx + 5, byr + 2, 1, 2);
        fill('rgba(255,255,255,0.95)', bx + 2, byr + 1, 2, 1); fill('rgba(255,255,255,0.8)', bx + 1, byr + 2, 1, 1);
        fill('rgba(120,200,230,0.18)', bx + 1, byr + 2, 4, 3);
      }
    }

    // śnieg morski: przy zejściu rozciąga się w smugi
    for (const p of stat.snow) {
      const span = H + 8;
      const y = ((((p.y - camY * p.par - t * 3) % span) + span) % span) - 4;
      if (y < surfaceY + 2) continue;
      const x = ((((p.x * W + t * p.dx) % W) + W) % W);
      fill(`rgba(200,235,255,${p.a.toFixed(2)})`, x, y, 1, 1 + Math.round(f * 7 * p.par));
    }

    // smugi prędkości: długie pionowe kreski przelatujące w górę
    if (f > 0.04) {
      const span = H + 80;
      for (const s of stat.streaks) {
        const y = ((((s.y - camY * s.par * 1.4) % span) + span) % span) - 40;
        if (y < surfaceY) continue;
        const len = Math.round(5 + f * 52 * s.par);
        fill(`rgba(${diveColor},${(0.04 + 0.22 * f * s.a).toFixed(3)})`, s.x * W, y, 1, len);
        fill(`rgba(225,249,255,${(f * s.a * 0.35).toFixed(3)})`, s.x * W, y + len - 2, 1, 2);
      }
      // ciemniejące brzegi ekranu przy szybkim zjeździe
      const edge = (f * 0.35).toFixed(3);
      fill(`rgba(2,6,15,${edge})`, 0, 0, 3, H);
      fill(`rgba(2,6,15,${edge})`, W - 3, 0, 3, H);
    }

    // kuter i linia wody
    if (surfaceY > -30 && surfaceY < H + 30) {
      const bob = Math.round(Math.sin(t * 1.1) * 1);
      if (trawler) {
        const frame = trawler[reduce ? 0 : Math.floor(t * 4) % trawler.length];
        const boatX = Math.max(-3, kx - 17);
        const boatY = surfaceY - 48 + bob;
        const draft = surfaceY - boatY;
        ctx.drawImage(frame, 0, 0, frame.width, draft, boatX, boatY, frame.width, draft);
        ctx.save();
        ctx.globalAlpha = 0.32;
        const submerged = frame.height - draft;
        ctx.drawImage(frame, 0, draft, frame.width, submerged, boatX, surfaceY, frame.width, submerged);
        ctx.restore();
      } else {
        ctx.drawImage(boat, Math.round(kx - 22 + 4), surfaceY - 20 + bob);
      }
      if (surfaceY >= 0) {
        // pływające kępy sargassum z zwisającymi pędami
        for (let c = 0; c < 3; c++) {
          const cx = Math.round((0.25 + c * 0.34) * W + Math.sin(t * 0.45 + c) * 3);
          fill('rgba(110,120,40,0.9)', cx, surfaceY - 1, 9 + (c % 3) * 3, 2);
          fill('rgba(150,165,60,0.9)', cx + 2, surfaceY - 2, 5, 1);
          for (let k = 0; k < 4; k++) {
            const len = 8 + ((c * 7 + k * 5) % 14);
            for (let j = 0; j < len; j += 2) {
              fill(`rgba(96,${110 + j * 2},46,${(0.85 - j / (len * 1.6)).toFixed(2)})`, cx + 1 + k * 3 + Math.round(Math.sin(t * 1.5 + j * 0.5 + k + c) * 1.4), surfaceY + 1 + j, 1, 2);
            }
          }
        }
      }
      const flow = reduce ? 0 : t;
      for (let x = 0; x < W; x += 1) {
        const swell = Math.sin(x * 0.105 + flow * 1.5);
        const ripple = Math.sin(x * 0.28 - flow * 2.1);
        const lift = Math.round(swell + ripple * 0.6);
        // Podstawowa linia i krótkie refleksy korzystają z błękitu płytkiej wody.
        if (!surfaceArt) fill('#397faa', x, surfaceY + lift, 1, 2);
        if (swell + ripple > 0.58) {
          fill(surfaceArt ? 'rgba(182,247,245,0.33)' : ripple > 0.7 ? '#a0cce4' : '#6aafd3', x, surfaceY + lift - 1, 1, 1);
        }
      }
    }
  }

  function frame(now) {
    const dt = lastNow ? Math.min(0.1, (now - lastNow) / 1000) : 0.016;
    lastNow = now;
    let moved = false;
    if (t0 >= 0) {
      const p = Math.min(1, (now - t0) / dur);
      shown = from + (target - from) * ease(p);
      moved = true;
      if (p >= 1) t0 = -1;
    }
    const px = shown * K;
    const inst = dt > 0 ? Math.abs(px - prevPx) / dt : 0;
    vel = vel * 0.75 + inst * 0.25;
    prevPx = px;
    if (moved) { emit(); dirty = true; }
    if (!reduce || dirty) {
      render(reduce ? 0 : now / 1000, dt, camOf(shown));
      dirty = false;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return { setDepth, burst, ping, get depth() { return shown; } };
}
