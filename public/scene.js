// Scena: morze w pikselartowym stylu, bez dna. Rysowane na canvasie o niskiej rozdzielczości i skalowane bez wygładzania.
// Wszystkie sprite'y są rysowane kodem (prostokąty), bez zewnętrznych plików.
// Świat poniżej powierzchni jest generowany kawałkami (chunkami) deterministycznie z numeru kawałka,
// więc głębokość może rosnąć bez limitu, a stworzenia zależą od głębokości.

const K = 0.8; // piksele sceny na metr głębokości
const CH = 400; // wysokość jednego kawałka świata w pikselach sceny

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

const krill = sprite(9, 7, (R) => {
  const rows = ['..rrrr...', '.rrrrrd..', 'rrwrrrrd.', 'rr..drrr.', 'r....drr.', '....rrrd.', '...rrrd..'];
  const pal = { r: '#ff5c7a', d: '#bf3556', w: '#ffffff' };
  rows.forEach((row, y) => [...row].forEach((ch, x) => ch !== '.' && R(pal[ch], x, y, 1, 1)));
});

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
      if (rand() < 0.6) {
        const cnt = 4 + Math.floor(rand() * 5);
        const fx = rand();
        const sp = (6 + rand() * 8) * d;
        for (let j = 0; j < cnt; j++) {
          creatures.push({ kind: 'fishS', wy: wy + (rand() - 0.5) * 20, fx: fx + j * 0.014, sp, ph: rand() * 6 });
        }
      } else creatures.push({ kind: 'fishM', wy, fx: rand(), sp: (5 + rand() * 6) * d, ph: rand() * 6 });
    } else if (m < 3600) {
      creatures.push(rand() < 0.3
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
  let dirty = true;
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

  function setDepth(m, animate = true) {
    target = m;
    dirty = true;
    if (!animate || reduce) {
      shown = from = m;
      t0 = -1;
      emit();
      return;
    }
    from = shown;
    t0 = performance.now();
    // Nawet mały zjazd trwa dość długo i ma wyraźny rozbieg, a duży jest szybszy, nie wolniejszy w odbiorze.
    dur = Math.min(3800, 1400 + Math.abs(m - from) * 0.45);
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
      bubbles.push({ x: kx + (Math.random() - 0.5) * 10, wy: ky + camY + (Math.random() - 0.5) * 6, vy: 14 + Math.random() * 28, r: Math.random() < 0.3 ? 2 : 1, age: 0 });
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
      case 'jellyCyan': ctx.drawImage(jellyCyan, x, y + Math.round(Math.sin(t * 1.5 + c.ph) * 3)); break;
      case 'jellyPink': ctx.drawImage(jellyPink, x, y + Math.round(Math.sin(t * 1.5 + c.ph) * 3)); break;
      case 'jellyBig': {
        const by = y + Math.round(Math.sin(t * 1.2 + c.ph) * 4);
        ctx.drawImage(jellyCyan, x, by, 18, 24);
        disc('rgba(110,225,255,0.07)', x + 9, by + 6, 14);
        break;
      }
      case 'angler': {
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

    // promienie światła
    for (const r of RAYS) {
      for (let y = Math.max(0, surfaceY); y < H; y += 2) {
        const m = (camY + y) / K;
        if (m > 1500) break;
        const a = 0.075 * (1 - m / 1500);
        const x = r.x * W + (y - surfaceY) * r.s + Math.sin(t * 0.3 + r.x * 9) * 6;
        fill(`rgba(190,235,255,${a.toFixed(3)})`, x, y, r.w, 2);
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
    fill('rgba(235,245,255,0.55)', kx + 4, lineTop, 1, Math.max(0, ky - lineTop - 2));
    disc('rgba(255,92,122,0.08)', kx + 4, ky + 3, 10);
    disc('rgba(255,92,122,0.12)', kx + 4, ky + 3, 6);
    ctx.drawImage(krill, kx, ky);

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
        fill(`rgba(160,235,255,${a})`, kx + 4 + Math.cos(ang) * r, ky + 3 + Math.sin(ang) * r, 1, 1);
      }
    }

    // bąbelki (przy zejściu gęsty strumień za krylem)
    if (!reduce) {
      nextBubble -= dt;
      if (nextBubble <= 0) {
        nextBubble = 0.4 - f * 0.36;
        const burstN = f > 0.3 ? 2 : 1;
        for (let b = 0; b < burstN; b++) {
          bubbles.push({ x: kx + 1 + Math.random() * 6, wy: ky + camY - 2, vy: 10 + Math.random() * 10 + f * 60, r: f > 0.5 && Math.random() < 0.3 ? 2 : 1, age: 0 });
        }
      }
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.wy -= b.vy * dt;
      b.age += dt;
      const by = b.wy - camY;
      if (by < surfaceY || by > H + 40 || b.age > 7) { bubbles.splice(i, 1); continue; }
      const bx = b.x + Math.sin(b.age * 3 + i) * 1.5;
      if (b.r === 1) fill('rgba(200,238,255,0.55)', bx, by, 2, 2);
      else {
        const col = 'rgba(200,238,255,0.5)';
        fill(col, bx + 1, by, 2, 1); fill(col, bx + 1, by + 3, 2, 1); fill(col, bx, by + 1, 1, 2); fill(col, bx + 3, by + 1, 1, 2);
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
        const len = Math.round(5 + f * 38 * s.par);
        fill(`rgba(215,242,255,${(0.05 + 0.32 * f * s.a).toFixed(3)})`, s.x * W, y, 1, len);
      }
      // ciemniejące brzegi ekranu przy szybkim zjeździe
      const edge = (f * 0.35).toFixed(3);
      fill(`rgba(2,6,15,${edge})`, 0, 0, 3, H);
      fill(`rgba(2,6,15,${edge})`, W - 3, 0, 3, H);
    }

    // kuter i linia wody
    if (surfaceY > -30 && surfaceY < H + 30) {
      const bob = Math.round(Math.sin(t * 1.1) * 1);
      ctx.drawImage(boat, Math.round(kx - 22 + 4), surfaceY - 20 + bob);
      for (let x = 0; x < W; x++) {
        const yy = surfaceY + Math.round(Math.sin(x * 0.22 + t * 1.4));
        fill('#bfeef0', x, yy, 1, 1);
        if (x % 2 === 0) fill('rgba(95,182,211,0.5)', x, yy + 1, 1, 1);
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
