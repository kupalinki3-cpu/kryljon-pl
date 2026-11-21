import { createScene } from './scene.js';
import { sfx } from './sfx.js';

// Klient gry Polion. Wszystkie napisy od graczy trafiają do DOM wyłącznie przez textContent.
const LIMIT_MS = 25000; // musi zgadzać się z src/game.js; serwer i tak liczy czas sam
const GRACE_MS = 1500;
const TIER_SQUARES = ['⬛', '⬜', '🟦', '🟩', '🟨', '🟧', '🟪'];

const $ = (id) => document.getElementById(id);
let mode = 'daily';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const views = ['start', 'play', 'reveal', 'final'];
const show = (name) => views.forEach((v) => ($(`view-${v}`).hidden = v !== name));

const store = {
  get(k) {
    try { return localStorage.getItem(`glebia:${k}`); } catch { return null; }
  },
  set(k, v) {
    try { localStorage.setItem(`glebia:${k}`, v); } catch { /* tryb prywatny: gramy bez zapisu */ }
  },
};

function playerToken() {
  let t = store.get('token');
  if (!t || !/^[A-Za-z0-9_-]{16,64}$/.test(t)) {
    const bytes = crypto.getRandomValues(new Uint8Array(24));
    t = btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    store.set('token', t);
  }
  return t;
}
const token = playerToken();

async function api(method, path, body, signal) {
  const init = { method, headers: { 'x-player-token': token }, signal };
  if (body) {
    init.body = JSON.stringify({ token, mode, ...body });
    init.headers['content-type'] = 'application/json';
  }
  let res;
  try {
    res = await fetch(path, init);
  } catch {
    throw Object.assign(new Error('Brak połączenia z serwerem'), { status: 0 });
  }
  let data = {};
  try { data = await res.json(); } catch { /* pusta odpowiedź */ }
  if (!res.ok) throw Object.assign(new Error(data.error || 'Błąd serwera'), { status: res.status, data });
  return data;
}

let toastTimer = 0;
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

const fmtDepth = (m) => `${m.toLocaleString('pl-PL')} m`;
const fmtTime = (ms) => `${(ms / 1000).toFixed(1).replace('.', ',')} s`;
const fmtHm = (ms) => {
  const m = Math.max(0, Math.floor(ms / 60000));
  return `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')} min`;
};

// ---------- scena, HUD i skala głębokości ----------
const FLAVOR = [
  'Tego nie ma jeszcze w naszej bazie.',
  'Odpowiedź, którą wyrzuca z siebie każdy.',
  'Dość oczywiste.',
  'Całkiem niezłe.',
  'Mało kto na to wpada.',
  'Tu dociera już naprawdę niewielu.',
  'Tu nie zagląda prawie nikt.',
];

// Linijka głębokości przewija się razem z krylem i nie ma końca; elementy są w puli i tylko zmieniają pozycję.
const RULER_STEPS = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000];
const rulerLabel = (m) => (m >= 1000 ? `${(m / 1000).toLocaleString('pl-PL')} km` : `${m} m`);

function createRuler() {
  const box = $('ruler');
  const wrap = $('ruler-ticks');
  const you = $('ruler-you');
  const pool = [];
  let top = 0;
  let height = 0;
  const measure = () => {
    const r = box.getBoundingClientRect();
    top = r.top;
    height = r.height;
  };
  measure();
  addEventListener('resize', measure);
  return ({ camY, S, K, youY }) => {
    const pxPerM = K * S;
    const stepM = RULER_STEPS.find((v) => v * pxPerM >= 64) ?? RULER_STEPS[RULER_STEPS.length - 1];
    const minor = stepM / 5;
    const mTop = (camY + top / S) / K;
    const mBot = (camY + (top + height) / S) / K;
    const i0 = Math.max(0, Math.ceil(mTop / minor));
    const i1 = Math.floor(mBot / minor);
    let n = 0;
    for (let i = i0; i <= i1; i++, n++) {
      let el = pool[n];
      if (!el) {
        el = document.createElement('div');
        el.append(document.createElement('span'));
        wrap.append(el);
        pool[n] = el;
      }
      const m = i * minor;
      const major = i % 5 === 0;
      el.style.display = '';
      el.className = major ? 'tick major' : 'tick';
      el.style.transform = `translateY(${((m * K - camY) * S - top).toFixed(1)}px)`;
      const span = el.firstChild;
      const label = major ? rulerLabel(m) : '';
      if (span.textContent !== label) span.textContent = label;
    }
    for (let j = n; j < pool.length; j++) pool[j].style.display = 'none';
    const y = Math.max(0, Math.min(height, youY - top));
    you.style.transform = `translateY(${y.toFixed(1)}px)`;
  };
}

const drawRuler = createRuler();
const scene = createScene($('scene'), {
  onFrame(f) {
    $('hud-depth').textContent = fmtDepth(Math.round(f.depth));
    drawRuler(f);
  },
});
const setDepth = (m, animate = false, tier = 0) => scene.setDepth(m, animate, tier);

function renderHud(currentIdx) {
  const wrap = $('hud-steps');
  wrap.replaceChildren();
  for (let i = 0; i < (state?.total ?? 7); i++) {
    const el = document.createElement('i');
    const h = state?.history?.find((x) => x.idx === i);
    if (h) el.className = `t${h.tier}`;
    else if (i === currentIdx) el.className = 'now';
    wrap.append(el);
  }
  $('hud-score').textContent = String(state?.points ?? 0);
  const total = state?.total ?? 7;
  $('hud-prompt').textContent = !state
    ? 'Wybierz tryb gry'
    : currentIdx == null || currentIdx >= total ? 'Nurkowanie zakończone' : `Pytanie ${currentIdx + 1} z ${total}`;
}

// ---------- dźwięk ----------
sfx.setMuted(store.get('muted') === '1');
function paintSound() {
  const btn = $('sound-btn');
  btn.setAttribute('aria-pressed', String(!sfx.muted));
  btn.setAttribute('aria-label', sfx.muted ? 'Dźwięk wyłączony' : 'Dźwięk włączony');
}
$('sound-btn').addEventListener('click', () => {
  sfx.setMuted(!sfx.muted);
  store.set('muted', sfx.muted ? '1' : '0');
  paintSound();
  sfx.start();
});
paintSound();

// ---------- stan gry ----------
let state = null; // ostatni stan biegu z serwera
let today = null; // odpowiedź /api/today
let tickTimer = 0;
let submitting = false;
let restarting = false;

function stopTimer() {
  clearInterval(tickTimer);
  tickTimer = 0;
}

async function loadToday() {
  today = await api('GET', '/api/today');
  $('ai-note').hidden = !today.aiEnabled;
  $('start-day').textContent = `Dzień ${today.day}.`;
  const upd = () => {
    const left = today.resetsInMs - (performance.now() - today.fetchedAt);
    const txt = `Nowe pytania rankingowe za ${fmtHm(left)}.`;
    $('start-reset').textContent = txt;
    $('final-reset').textContent = txt;
  };
  today.fetchedAt = performance.now();
  upd();
  setInterval(upd, 30000);
}

let dailyDone = null; // zakończony dziś bieg rankingowy (stan z serwera)

// ---------- statystyki lokalne (tylko w tej przeglądarce) ----------
function readStats() {
  try {
    const s = JSON.parse(store.get('stats') || '{}');
    return { runs: 0, bestDaily: 0, bestFree: 0, streak: 0, lastDay: '', bestAnswer: 0, ...s };
  } catch {
    return { runs: 0, bestDaily: 0, bestFree: 0, streak: 0, lastDay: '', bestAnswer: 0 };
  }
}
const dayBefore = (day) => new Date(Date.parse(`${day}T00:00:00Z`) - 86400000).toISOString().slice(0, 10);

/** Zapisuje ukończony bieg raz i zwraca { record, streak }. */
function recordRun(finalState, runMode) {
  const oldKey = `${runMode}:${finalState.day}:${finalState.history.length}:${finalState.depth}`;
  const key = finalState.runId == null ? oldKey : `run:${finalState.runId}`;
  const st = readStats();
  const recorded = store.get('recorded');
  if (recorded === key) return { record: false, streak: st.streak };
  store.set('recorded', key);
  if (recorded === oldKey) return { record: false, streak: st.streak };
  st.runs += 1;
  let record = false;
  if (runMode === 'daily') {
    if (finalState.depth > st.bestDaily) { record = st.bestDaily > 0; st.bestDaily = finalState.depth; }
    if (st.lastDay !== finalState.day) {
      st.streak = st.lastDay === dayBefore(finalState.day) ? st.streak + 1 : 1;
      st.lastDay = finalState.day;
    }
  } else if (finalState.depth > st.bestFree) {
    record = st.bestFree > 0;
    st.bestFree = finalState.depth;
  }
  st.bestAnswer = Math.max(st.bestAnswer, ...finalState.history.map((h) => h.meters || 0));
  store.set('stats', JSON.stringify(st));
  return { record, streak: st.streak };
}

function renderStartStats() {
  const st = readStats();
  const el = $('start-stats');
  if (!st.runs) { el.hidden = true; return; }
  const best = Math.max(st.bestDaily, st.bestFree);
  const parts = [`Nurkowań: ${st.runs}`, `Rekord: ${fmtDepth(best)}`];
  if (st.streak > 1) parts.push(`Seria: ${st.streak} dni z rzędu`);
  el.textContent = parts.join(' · ');
  el.hidden = false;
}

function enterRun(newState, newMode) {
  mode = newMode;
  state = newState;
  store.set('last', newMode);
  setDepth(state.depth, false);
  renderHud(state.idx);
  $('play-sub').textContent = newMode === 'daily'
    ? `Podejście ${state.attempt} · im rzadsza odpowiedź, tym głębiej`
    : '▼ gra swobodna · bez rankingu ▼';
}

async function startDaily(name, fresh = false) {
  const body = { mode: 'daily', name };
  if (fresh) Object.assign(body, { fresh: true, afterRunId: dailyDone?.runId });
  enterRun(await api('POST', '/api/run', body), 'daily');
  store.set('name', name);
  store.set('day', state.day);
  await route();
}

async function startFree(name) {
  const body = { mode: 'free', fresh: true };
  if (name) body.name = name;
  const newState = await api('POST', '/api/run', body);
  stopTimer();
  enterRun(newState, 'free');
  await route();
}

async function route() {
  if (state.finished) return showFinal();
  await nextPrompt();
}

async function nextPrompt() {
  const runId = state.runId;
  const p = await api('POST', '/api/prompt', { runId });
  if (state.runId !== runId) return;
  if (p.finished) {
    state = p;
    return showFinal();
  }
  showPrompt(p);
}

function showPrompt(p) {
  stopTimer();
  $('ai-progress').hidden = true;
  submitting = false;
  currentIdx = p.idx;
  show('play');
  renderHud(p.idx);
  $('play-prompt').textContent = p.text;
  const input = $('answer');
  const btn = $('answer-btn');
  input.value = '';
  input.disabled = true;
  btn.disabled = true;
  setHint('Czas ruszy za chwilę. Przeczytaj pytanie.');
  if (p.aiChecking) return submit(false, p);
  startQuestionTimer(p);
}

function paintClock(remaining, paused = false) {
  const ring = $('ring');
  $('timer-text').textContent = String(Math.ceil(Math.max(0, remaining) / 1000));
  ring.style.strokeDashoffset = String(2 * Math.PI * 44 * (1 - Math.max(0, remaining) / LIMIT_MS));
  ring.classList.toggle('warn', remaining < 10000 && remaining >= 5000);
  ring.classList.toggle('danger', remaining < 5000);
  ring.closest('.timer').classList.toggle('urgent', !paused && remaining > 0 && remaining < 5000);
}

function startQuestionTimer(p, resumed = false) {
  stopTimer();
  const ring = $('ring');
  const t0 = performance.now();
  deadline = t0 + p.remainingMs;
  let unlocked = resumed;
  let lastTickSec = 0;
  $('ring').closest('.timer').classList.remove('urgent');
  const frame = () => {
    if (restarting) return;
    const elapsed = performance.now() - t0;
    const toStart = p.startsInMs - elapsed;
    const remaining = p.remainingMs - elapsed;
    if (toStart > 0) {
      $('timer-text').textContent = String(Math.ceil(toStart / 1000));
      ring.style.strokeDashoffset = '0';
      ring.classList.remove('warn', 'danger');
      return;
    }
    if (!unlocked) {
      unlocked = true;
      $('answer').disabled = false;
      $('answer-btn').disabled = false;
      $('answer').focus();
      sfx.start();
      setHint('Wpisz odpowiedź i zatwierdź Enterem. Brak echa? Spróbuj jeszcze raz.');
    }
    if (remaining <= 0) {
      stopTimer();
      paintClock(0);
      submit(true);
      return;
    }
    paintClock(remaining);
    const sec = Math.ceil(remaining / 1000);
    if (sec <= 3 && sec !== lastTickSec) { lastTickSec = sec; sfx.tick(); }
  };
  tickTimer = setInterval(frame, 100);
  frame();
}
let currentIdx = 0;
let deadline = 0; // performance.now() chwili, w której kończy się czas na bieżące pytanie

function setHint(text, bad = false) {
  const el = $('play-hint');
  el.textContent = text;
  el.classList.toggle('noecho', bad);
}

/** Czas minął, a ostatnia próba nie trafiła: serwer sam zapisze puste pytanie, gdy minie tolerancja. */
async function settleAfterExpiry() {
  stopTimer();
  const runId = state.runId;
  for (let i = 0; i < 5; i++) {
    await sleep(GRACE_MS + 400);
    if (state.runId !== runId) return;
    try {
      const r = await api('POST', '/api/answer', { runId, idx: currentIdx, answer: '' });
      if (r.result) {
        state = r.state;
        return showReveal(r.result, true);
      }
    } catch (e) {
      if (e.status === 409 && e.data?.state) {
        state = e.data.state;
        const h = state.history.find((x) => x.idx === currentIdx);
        if (h) return showReveal({ ...h, share: null }, true);
        return route();
      }
      if (i === 4) return toast(e.message);
    }
  }
}

async function submit(auto = false, resumedCheck = null) {
  if (submitting || restarting) return;
  submitting = true;
  if (auto) stopTimer();
  const input = $('answer');
  const answer = input.value;
  const { runId } = state;
  const idx = currentIdx;
  const current = () => state?.runId === runId && currentIdx === idx && !restarting;
  const progress = $('ai-progress');
  input.disabled = true;
  $('answer-btn').disabled = true;
  try {
    let r = resumedCheck ?? await api('POST', '/api/answer', { runId, idx, answer });
    if (!current()) return;
    if (r.aiChecking) {
      stopTimer();
      paintClock(r.remainingMs, true);
      setHint('Gemini sprawdza odpowiedź. Zegar jest zatrzymany.');
      progress.hidden = false;
      let failures = 0;
      do {
        await sleep(600);
        if (!current()) return;
        try {
          r = await api('POST', '/api/answer', { runId, idx, aiPoll: true }, AbortSignal.timeout(4_000));
          failures = 0;
        } catch (e) {
          if ((e.status !== 0 && e.status < 500) || ++failures >= 3) throw e;
        }
        if (!current()) return;
      } while (r.aiChecking);
      progress.hidden = true;
    }
    if (r.noEcho) {
      if (r.aiFinished) {
        if (r.remainingMs <= 0) return settleAfterExpiry();
        startQuestionTimer({ startsInMs: 0, remainingMs: r.remainingMs }, true);
      } else if (auto || performance.now() >= deadline) {
        return settleAfterExpiry();
      }
      submitting = false;
      input.disabled = false;
      $('answer-btn').disabled = false;
      input.value = '';
      input.focus();
      if (r.empty) return setHint('Wpisz odpowiedź.', true);
      let hint = `Brak echa dla „${r.raw}”. Spróbuj jeszcze raz.`;
      if (r.categoryHint) hint = `„${r.raw}” pasuje do innej kategorii (${r.categoryHint}). Spróbuj jeszcze raz.`;
      else if (r.aiFinished) hint = 'Gemini nie potwierdził odpowiedzi. Spróbuj jeszcze raz.';
      else if (r.aiLimit) hint = 'Dzienny limit sprawdzeń Gemini jest wykorzystany. Spróbuj innej odpowiedzi.';
      setHint(hint, true);
      scene.ping();
      sfx.noEcho();
      input.classList.remove('shake');
      void input.offsetWidth;
      input.classList.add('shake');
      return;
    }
    stopTimer();
    state = r.state;
    showReveal(r.result, auto);
  } catch (e) {
    if (!current()) return;
    progress.hidden = true;
    if (e.status === 409 && e.data?.state) {
      // Serwer już zamknął to pytanie (np. minął czas): pokaż zapisany wynik z historii.
      stopTimer();
      state = e.data.state;
      const h = state.history.find((x) => x.idx === currentIdx);
      if (h) return showReveal({ ...h, share: null }, true);
      return route();
    }
    submitting = false;
    input.disabled = false;
    $('answer-btn').disabled = false;
    toast(e.message);
  }
}

function showReveal(res, auto) {
  show('reveal');
  const badge = $('reveal-badge');
  badge.className = `badge t${res.tier}`;
  badge.textContent = res.label;
  $('reveal-points').textContent = res.meters > 0
    ? `${fmtDepth(res.meters)} w dół · +${res.points} pkt`
    : 'Ani metra w dół · 0 pkt';
  const line = $('reveal-line');
  if (res.shown) line.textContent = `Rozpoznano: ${res.shown}`;
  else line.textContent = auto ? 'Czas minął bez trafienia.' : 'Brak odpowiedzi.';
  $('reveal-share').textContent = res.share
    ? `Taką samą odpowiedź wpisało dziś ${res.share.percent}% z ${res.share.total} graczy.`
    : FLAVOR[res.tier] ?? '';
  if (res.source) {
    const source = document.createElement('a');
    source.href = res.source;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = 'Źródło';
    $('reveal-share').append(' · ', source);
  }
  renderHud(state.finished ? null : state.idx);
  setDepth(state.depth, true, res.tier);
  scene.burst();
  sfx.reveal(res.tier);
  $('ring').closest('.timer').classList.remove('urgent');
  $('reveal-next').textContent = state.finished ? 'Zobacz wynik ▼' : 'Głębiej ▼';
  $('reveal-next').focus();
}

function shareText() {
  const squares = state.history.map((h) => TIER_SQUARES[h.tier] ?? '⬛').join('');
  const rank = state.me && state.isBest ? ` (miejsce ${state.me.rank}/${state.me.players} w rankingu wszech czasów)` : '';
  const label = mode === 'daily' ? state.day : 'gra swobodna';
  return `Polion ${label}\n${fmtDepth(state.depth)}${rank}\n${squares}\n${location.origin}`;
}

function showFinal() {
  stopTimer();
  show('final');
  renderHud(null);
  setDepth(state.depth, false);
  $('final-depth').textContent = fmtDepth(state.depth);
  const daily = mode === 'daily';
  $('final-title').textContent = daily ? 'Dno osiągnięte' : 'Koniec nurkowania';
  $('final-rank').textContent = state.me
    ? `Rekord wszech czasów: ${fmtDepth(state.bestDepth)} · miejsce ${state.me.rank} z ${state.me.players}.`
    : daily ? '' : 'Gra swobodna nie wchodzi do rankingu.';
  $('final-reset').hidden = !daily;
  const { record, streak } = recordRun(state, mode);
  const badge = $('final-badge');
  const bits = [];
  if (record) bits.push('Nowy rekord!');
  if (daily && streak > 1) bits.push(`Seria: ${streak} dni z rzędu`);
  badge.textContent = bits.join(' · ');
  badge.hidden = bits.length === 0;
  $('final-squares').replaceChildren(...state.history.map(({ tier }) => {
    const marker = document.createElement('i');
    marker.className = `sq t${tier}`;
    return marker;
  }));
  const list = $('final-recap');
  list.replaceChildren();
  const maxM = Math.max(1, ...state.history.map((h) => h.meters || 0));
  for (const h of state.history) {
    const li = document.createElement('li');
    const dot = document.createElement('span');
    dot.className = `tier-dot t${h.tier}`;
    const strong = document.createElement('strong');
    strong.textContent = h.shown || (h.raw ? h.raw : 'brak odpowiedzi');
    li.append(dot, document.createTextNode(`${h.prompt}: `), strong, document.createTextNode(` · ${h.label}, ${fmtDepth(h.meters)}`));
    if (h.meters > 0 && h.meters === maxM && state.history.length > 1) {
      const star = document.createElement('span');
      star.className = 'star';
      star.textContent = '★';
      star.title = 'Najgłębsza odpowiedź w tym nurkowaniu';
      li.append(star);
    }
    const bar = document.createElement('span');
    bar.className = `bar t${h.tier}`;
    bar.style.width = `${Math.max(3, Math.round((h.meters / maxM) * 100))}%`;
    bar.setAttribute('aria-hidden', 'true');
    li.append(bar);
    list.append(li);
  }
  if (daily) dailyDone = state;
}

// ---------- ranking ----------
async function loadBoard() {
  const list = $('board-list');
  const meta = $('board-meta');
  try {
    const lb = await api('GET', '/api/leaderboard');
    meta.textContent = lb.players
      ? `Liczba graczy w rankingu: ${lb.players}`
      : 'Nikt jeszcze nie ukończył nurkowania rankingowego.';
    list.replaceChildren();
    const myName = store.get('name');
    for (const r of lb.rows) {
      const li = document.createElement('li');
      if (lb.me && lb.me.rank === r.rank) li.className = 'me';
      const rank = document.createElement('span');
      rank.className = 'rank';
      rank.textContent = `${r.rank}.`;
      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = r.name;
      const depth = document.createElement('span');
      depth.className = 'depth-cell';
      depth.textContent = fmtDepth(r.depth);
      const time = document.createElement('span');
      time.className = 'time-cell';
      time.textContent = fmtTime(r.ms);
      li.append(rank, name, depth, time);
      list.append(li);
    }
    if (lb.me && lb.me.rank > lb.rows.length) {
      const li = document.createElement('li');
      li.className = 'me';
      li.textContent = `Ty: miejsce ${lb.me.rank}${myName ? ` (${myName})` : ''}`;
      list.append(li);
    }
  } catch (e) {
    meta.textContent = e.message;
  }
}

// ---------- zdarzenia ----------
const nameValue = () => $('name').value.trim();
const busy = (btn, fn) => async () => {
  btn.disabled = true;
  try {
    await fn();
  } catch (e) {
    toast(e.message);
  } finally {
    btn.disabled = false;
  }
};
$('start-form').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const name = nameValue();
  const done = dailyDone && store.get('day') === today?.day;
  if (!done && (name.length < 2 || name.length > 16)) {
    $('name').focus();
    return toast('Do rankingu potrzebny jest pseudonim (2 do 16 znaków).');
  }
  busy($('start-daily'), () => startDaily(name, !!done))();
});
$('start-free').addEventListener('click', busy($('start-free'), () => startFree(nameValue())));
$('final-again').addEventListener('click', busy($('final-again'), () => {
  const name = store.get('name') || '';
  return mode === 'daily' ? startDaily(name, true) : startFree(name);
}));
$('final-menu').addEventListener('click', () => {
  stopTimer();
  setDepth(0, false);
  $('hud-steps').replaceChildren();
  $('hud-score').textContent = '0';
  $('hud-prompt').textContent = 'Wybierz tryb gry';
  renderStartStats();
  show('start');
});
$('answer-form').addEventListener('submit', (ev) => {
  ev.preventDefault();
  submit(false);
});
$('reveal-next').addEventListener('click', async () => {
  try {
    await route();
  } catch (e) {
    toast(e.message);
  }
});
const boardDlg = $('board');
const openBoard = () => {
  $('restart-free').hidden = mode !== 'free' || ($('view-play').hidden && $('view-reveal').hidden);
  if (!boardDlg.open) boardDlg.showModal();
  loadBoard();
};
$('menu-btn').addEventListener('click', openBoard);
$('final-board').addEventListener('click', openBoard);
$('restart-free').addEventListener('click', busy($('restart-free'), async () => {
  if (mode !== 'free' || ($('view-play').hidden && $('view-reveal').hidden)) return;
  if (submitting && !$('view-play').hidden) {
    boardDlg.close();
    return toast('Poczekaj, aż sprawdzimy odpowiedź.');
  }
  restarting = true;
  try {
    await startFree(store.get('name') || '');
    boardDlg.close();
  } finally {
    restarting = false;
  }
}));
$('board-close').addEventListener('click', () => boardDlg.close());
boardDlg.addEventListener('click', (ev) => {
  if (ev.target === boardDlg) boardDlg.close();
});
$('final-share').addEventListener('click', async () => {
  const text = shareText();
  try {
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      await navigator.share({ text });
      return;
    }
    await navigator.clipboard.writeText(text);
    toast('Wynik skopiowany do schowka');
  } catch {
    toast('Nie udało się skopiować. Zaznacz wynik ręcznie.');
  }
});

// ---------- start ----------
async function tryResumeFree() {
  try {
    enterRun(await api('POST', '/api/run', { mode: 'free', resume: true }), 'free');
    await route();
    return true;
  } catch (e) {
    if (e.status === 404) return false;
    throw e;
  }
}

async function tryResumeDaily(savedName) {
  const s = await api('POST', '/api/run', { mode: 'daily', name: savedName });
  if (s.finished) {
    dailyDone = s;
    return false;
  }
  enterRun(s, 'daily');
  await route();
  return true;
}

(async function init() {
  renderHud(null);
  show('start');
  renderStartStats();
  const savedName = store.get('name');
  if (savedName) $('name').value = savedName;
  try {
    await loadToday();
    // Wznawiamy tylko to, co ta przeglądarka już zaczęła; nic nie zakładamy po cichu.
    const last = store.get('last');
    let resumed = false;
    if (last === 'free') resumed = await tryResumeFree();
    if (!resumed && savedName && store.get('day') === today.day) resumed = await tryResumeDaily(savedName);
  } catch (e) {
    toast(e.message);
  }
})();
