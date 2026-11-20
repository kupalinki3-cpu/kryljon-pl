// Scena: morze w pikselartowym stylu. Rysowane na canvasie o niskiej rozdzielczości i skalowane bez wygładzania.
// Wszystkie sprite'y są rysowane kodem (prostokąty), bez zewnętrznych plików.

const K = 0.5; // piksele sceny na metr głębokości
const MAX_M = 7000;
const FLOOR_PX = MAX_M * K + 90; // pozycja dna w pikselach świata

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const WATER = [
  [0, '#2f86b3'], [150, '#1b6293'], [600, '#10416c'], [1500, '#0a2c4f'],
  [3000, '#071d37'], [5000, '#040f22'], [7200, '#02060f'],
].map(([m, c]) => [m, hex(c)]);
const SKY_TOP = hex('#a9cde0');
const SKY_LOW = hex('#e9f3f4');

const mix = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
const css = (c) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;

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

function buildWorld() {
  const rand = rng(20261121);
  const creatures = [];
  const dir = () => (rand() < 0.5 ? -1 : 1);
  for (let i = 0; i < 80; i++) {
    const m = 40 + rand() * 7000;
    const wy = m * K;
    const d = dir();
    if (m < 1500) {
      if (rand() < 0.6) {
        const n = 4 + Math.floor(rand() * 5);
        const fx = rand();
        const sp = (6 + rand() * 8) * d;
        for (let j = 0; j < n; j++) {
          creatures.push({ kind: 'fishS', wy: wy + (rand() - 0.5) * 20, fx: fx + j * 0.014, sp, ph: rand() * 6 });
        }
      } else {
        creatures.push({ kind: 'fishM', wy, fx: rand(), sp: (5 + rand() * 6) * d, ph: rand() * 6 });
      }
    } else if (m < 3600) {
      if (rand() < 0.3) creatures.push({ kind: 'jellyCyan', wy, fx: rand(), sp: 2 * d, ph: rand() * 6 });
      else creatures.push({ kind: 'fishM', wy, fx: rand(), sp: (4 + rand() * 5) * d, ph: rand() * 6 });
    } else if (rand() < 0.3) {
      creatures.push({ kind: 'angler', wy, fx: rand(), sp: (3 + rand() * 3) * d, ph: rand() * 6 });
    } else {
      creatures.push({ kind: rand() < 0.5 ? 'jellyCyan' : 'jellyPink', wy, fx: rand(), sp: 2 * d, ph: rand() * 6 });
    }
  }
  const snow = Array.from({ length: 70 }, () => ({
    x: rand(), wy: rand() * 4000, par: 0.3 + rand() * 0.6, dx: (rand() - 0.5) * 4, a: 0.14 + rand() * 0.22,
  }));
  const glow = Array.from({ length: 60 }, () => ({
    x: rand(), wy: (2200 + rand() * 4800) * K, ph: rand() * 6, c: ['98,230,255', '255,92,122', '255,200,87'][Math.floor(rand() * 3)],
  }));
  const clouds = Array.from({ length: 5 }, (_, i) => ({ x: rand(), wy: -(40 + i * 14 + rand() * 20), w: 18 + Math.floor(rand() * 20), sp: 1 + rand() * 2 }));
  return { creatures, snow, glow, clouds };
}

const RAYS = [{ x: 0.15, w: 10, s: 0.35 }, { x: 0.38, w: 16, s: 0.3 }, { x: 0.6, w: 9, s: 0.4 }, { x: 0.82, w: 14, s: 0.32 }];

export function createScene(canvas, { onDepth } = {}) {
  const ctx = canvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const world = buildWorld();
  const bubbles = [];
  let S = 4, W = 0, H = 0;
  let shown = 0, target = 0, from = 0, t0 = -1, dur = 1;
  let dirty = true;
  let nextBubble = 0;
  let lastNow = 0;

  function resize() {
    S = innerWidth < 640 ? 3 : 4;
    W = Math.ceil(innerWidth / S);
    H = Math.ceil(innerHeight / S);
    canvas.width = W;
    canvas.height = H;
    ctx.imageSmoothingEnabled = false;
    dirty = true;
  }
  addEventListener('resize', resize);
  resize();

  const emit = () => onDepth && onDepth(shown);

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
    dur = Math.min(2600, 900 + Math.abs(m - from) * 1.6);
  }

  const krillPos = (camY, t) => {
    const kx = Math.round(W * (S === 3 ? 0.17 : 0.14) + Math.sin(t * 1.6) * 1.5);
    const ky = Math.round(shown * K + 14 - camY + Math.sin(t * 2.1));
    return [kx, ky];
  };

  function burst() {
    if (reduce) return;
    const camY = Math.max(-0.28 * H, shown * K - 0.45 * H);
    const [kx, ky] = krillPos(camY, lastNow / 1000);
    for (let i = 0; i < 18; i++) {
      bubbles.push({ x: kx + (Math.random() - 0.5) * 10, wy: ky + camY + (Math.random() - 0.5) * 6, vy: 14 + Math.random() * 28, r: Math.random() < 0.3 ? 2 : 1, age: 0 });
    }
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

  function render(t, dt, camY) {
    const surfaceY = Math.round(-camY);

    // niebo
    if (surfaceY > 0) {
      for (let y = 0; y < surfaceY; y += 3) fill(css(mix(SKY_TOP, SKY_LOW, y / surfaceY)), 0, y, W, 3);
      for (const c of world.clouds) {
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

    // dno
    const floorTop = FLOOR_PX - camY;
    if (floorTop < H) {
      for (let x = 0; x < W; x += 2) {
        const h = Math.floor(6 + 5 * Math.sin(x * 0.07) + 4 * Math.sin(x * 0.19 + 1.3));
        fill('#010308', x, floorTop - h, 2, H - (floorTop - h) + 2);
      }
    }

    // świecące drobiny w głębi
    for (const g of world.glow) {
      const y = g.wy - camY;
      if (y < 0 || y > H) continue;
      const a = 0.35 + 0.35 * Math.sin(t * 2 + g.ph);
      const x = g.x * W;
      disc(`rgba(${g.c},${(a * 0.16).toFixed(3)})`, x, y, 2);
      fill(`rgba(${g.c},${a.toFixed(3)})`, x, y, 1, 1);
    }

    // stworzenia
    for (const c of world.creatures) {
      const y = Math.round(c.wy - camY + Math.sin(t * 0.8 + c.ph) * 2);
      if (y < -16 || y > H + 16 || y < surfaceY + 2) continue;
      const span = W + 60;
      const x = Math.round((((c.fx * span + t * c.sp) % span) + span) % span - 30);
      const right = c.sp > 0;
      switch (c.kind) {
        case 'fishS': ctx.drawImage(right ? fishS : fishSL, x, y); break;
        case 'fishM': ctx.drawImage(right ? fishM : fishML, x, y); break;
        case 'jellyCyan': ctx.drawImage(jellyCyan, x, y + Math.round(Math.sin(t * 1.5 + c.ph) * 3)); break;
        case 'jellyPink': ctx.drawImage(jellyPink, x, y + Math.round(Math.sin(t * 1.5 + c.ph) * 3)); break;
        case 'angler': {
          ctx.drawImage(right ? anglerR : anglerL, x, y);
          const lx = right ? x + 18 : x + 1;
          const a = 0.5 + 0.5 * Math.sin(t * 3 + c.ph);
          disc(`rgba(255,242,168,${(0.07 + a * 0.05).toFixed(3)})`, lx, y + 1, 9);
          disc(`rgba(255,242,168,${(0.1 + a * 0.08).toFixed(3)})`, lx, y + 1, 5);
          break;
        }
        default:
      }
    }

    // linka i haczyk z krylem
    const [kx, ky] = krillPos(camY, t);
    const lineTop = Math.max(0, surfaceY);
    fill('rgba(235,245,255,0.55)', kx + 4, lineTop, 1, Math.max(0, ky - lineTop - 2));
    disc('rgba(255,92,122,0.08)', kx + 4, ky + 3, 10);
    disc('rgba(255,92,122,0.12)', kx + 4, ky + 3, 6);
    ctx.drawImage(krill, kx, ky);

    // bąbelki
    if (!reduce) {
      nextBubble -= dt;
      if (nextBubble <= 0) {
        nextBubble = 0.4;
        bubbles.push({ x: kx + 2 + Math.random() * 4, wy: ky + camY, vy: 10 + Math.random() * 10, r: 1, age: 0 });
      }
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.wy -= b.vy * dt;
      b.age += dt;
      const by = b.wy - camY;
      if (by < surfaceY || b.age > 7) { bubbles.splice(i, 1); continue; }
      const bx = b.x + Math.sin(b.age * 3 + i) * 1.5;
      if (b.r === 1) fill('rgba(200,238,255,0.55)', bx, by, 2, 2);
      else {
        const col = 'rgba(200,238,255,0.5)';
        fill(col, bx + 1, by, 2, 1); fill(col, bx + 1, by + 3, 2, 1); fill(col, bx, by + 1, 1, 2); fill(col, bx + 3, by + 1, 1, 2);
      }
    }

    // śnieg morski
    for (const p of world.snow) {
      const span = H + 4;
      const y = ((((p.wy - camY * p.par - t * 3) % span) + span) % span) - 2;
      if (y < surfaceY + 2) continue;
      const x = ((((p.x * W + t * p.dx) % W) + W) % W);
      fill(`rgba(200,235,255,${p.a.toFixed(2)})`, x, y, 1, 1);
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
    if (t0 >= 0) {
      const p = Math.min(1, (now - t0) / dur);
      shown = from + (target - from) * (1 - Math.pow(1 - p, 3));
      emit();
      if (p >= 1) t0 = -1;
      dirty = true;
    }
    if (!reduce || dirty) {
      const camY = Math.max(-0.28 * H, shown * K - 0.45 * H);
      render(reduce ? 0 : now / 1000, dt, camY);
      dirty = false;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return { setDepth, burst, get depth() { return shown; } };
}
