import { createScene } from './scene.js';

// Klient gry Głębia. Wszystkie napisy od graczy trafiają do DOM wyłącznie przez textContent.
const MAX_DEPTH = 7000; // 7 pytań * 100 pkt * 10 m
const LIMIT_MS = 25000; // musi zgadzać się z src/game.js; serwer i tak liczy czas sam
const TIER_SQUARES = ['⬛', '⬜', '🟦', '🟩', '🟨', '🟧', '🟪'];

const $ = (id) => document.getElementById(id);
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

async function api(method, path, body) {
  const init = { method, headers: { 'x-player-token': token } };
  if (body) {
    init.body = JSON.stringify({ token, ...body });
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

function buildRuler() {
  const track = $('ruler-track');
  for (let m = 0; m <= MAX_DEPTH; m += 500) {
    const t = document.createElement('div');
    t.className = m % 1000 === 0 ? 'tick major' : 'tick';
    t.style.top = `${(m / MAX_DEPTH) * 100}%`;
    if (m % 1000 === 0 && m > 0) {
      const s = document.createElement('span');
      s.textContent = `${m / 1000} km`;
      t.append(s);
    }
    track.append(t);
  }
}

const scene = createScene($('scene'), {
  onDepth(d) {
    $('hud-depth').textContent = fmtDepth(Math.round(d));
    $('ruler-you').style.top = `${Math.min(100, (d / MAX_DEPTH) * 100)}%`;
  },
});
const setDepth = (m, animate = false) => scene.setDepth(m, animate);

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
  $('hud-prompt').textContent =
    currentIdx == null || currentIdx >= total ? 'Nurkowanie zakończone' : `Pytanie ${currentIdx + 1} z ${total}`;
}

// ---------- stan gry ----------
let state = null; // ostatni stan biegu z serwera
let today = null; // odpowiedź /api/today
let tickTimer = 0;
let submitting = false;

function stopTimer() {
  clearInterval(tickTimer);
  tickTimer = 0;
}

async function loadToday() {
  today = await api('GET', '/api/today');
  $('start-day').textContent = `Dzień ${today.day}. ${today.total} pytań.`;
  const upd = () => {
    const left = today.resetsInMs - (performance.now() - today.fetchedAt);
    const txt = `Nowe pytania za ${fmtHm(left)}.`;
    $('start-reset').textContent = txt;
    $('final-reset').textContent = txt;
  };
  today.fetchedAt = performance.now();
  upd();
  setInterval(upd, 30000);
}

async function startRun(name) {
  state = await api('POST', '/api/run', { name });
  store.set('name', name);
  store.set('day', state.day);
  setDepth(state.depth, false);
  renderHud(state.idx);
  await route();
}

async function route() {
  if (state.finished) return showFinal();
  await nextPrompt();
}

async function nextPrompt() {
  const p = await api('POST', '/api/prompt', {});
  showPrompt(p);
}

function showPrompt(p) {
  stopTimer();
  submitting = false;
  show('play');
  renderHud(p.idx);
  $('play-prompt').textContent = p.text;
  const input = $('answer');
  const btn = $('answer-btn');
  input.value = '';
  input.disabled = true;
  btn.disabled = true;
  $('play-hint').textContent = 'Czas ruszy za chwilę. Przeczytaj pytanie.';
  const ring = $('ring');
  const circ = 2 * Math.PI * 44;
  const text = $('timer-text');
  const t0 = performance.now();
  let unlocked = false;
  const frame = () => {
    const elapsed = performance.now() - t0;
    const toStart = p.startsInMs - elapsed;
    const remaining = p.remainingMs - elapsed;
    if (toStart > 0) {
      text.textContent = String(Math.ceil(toStart / 1000));
      ring.style.strokeDashoffset = '0';
      ring.classList.remove('warn', 'danger');
      return;
    }
    if (!unlocked) {
      unlocked = true;
      input.disabled = false;
      btn.disabled = false;
      input.focus();
      $('play-hint').textContent = 'Wpisz odpowiedź i zatwierdź Enterem.';
    }
    if (remaining <= 0) {
      stopTimer();
      text.textContent = '0';
      ring.style.strokeDashoffset = String(circ);
      submit(true);
      return;
    }
    text.textContent = String(Math.ceil(remaining / 1000));
    ring.style.strokeDashoffset = String(circ * (1 - remaining / LIMIT_MS));
    ring.classList.toggle('warn', remaining < 10000 && remaining >= 5000);
    ring.classList.toggle('danger', remaining < 5000);
  };
  frame();
  tickTimer = setInterval(frame, 100);
  currentIdx = p.idx;
}
let currentIdx = 0;

async function submit(auto = false) {
  if (submitting) return;
  submitting = true;
  stopTimer();
  const input = $('answer');
  const answer = input.value;
  input.disabled = true;
  $('answer-btn').disabled = true;
  try {
    const r = await api('POST', '/api/answer', { idx: currentIdx, answer });
    state = r.state;
    showReveal(r.result, auto);
  } catch (e) {
    if (e.status === 409 && e.data?.state) {
      // Serwer już zamknął to pytanie (np. minął czas): pokaż zapisany wynik z historii.
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
  $('reveal-points').textContent = `+${res.points} pkt · w dół o ${fmtDepth(res.points * 10)}`;
  const line = $('reveal-line');
  if (res.shown) line.textContent = `Rozpoznano: ${res.shown}`;
  else if (res.raw) line.textContent = `„${res.raw}” nie ma jeszcze w bazie, więc 0 punktów.`;
  else line.textContent = auto ? 'Czas minął bez odpowiedzi.' : 'Brak odpowiedzi.';
  $('reveal-share').textContent = res.share
    ? `Taką samą odpowiedź wpisało dziś ${res.share.percent}% z ${res.share.total} graczy.`
    : FLAVOR[res.tier] ?? '';
  renderHud(state.finished ? null : state.idx);
  setDepth(state.depth, true);
  scene.burst();
  $('reveal-next').textContent = state.finished ? 'Zobacz wynik ▼' : 'Głębiej ▼';
  $('reveal-next').focus();
}

function shareText() {
  const squares = state.history.map((h) => TIER_SQUARES[h.tier] ?? '⬛').join('');
  const rank = state.me ? ` (miejsce ${state.me.rank}/${state.me.players})` : '';
  return `Głębia ${state.day}\n${fmtDepth(state.depth)}${rank}\n${squares}\n${location.origin}`;
}

function showFinal() {
  stopTimer();
  show('final');
  renderHud(null);
  setDepth(state.depth, false);
  $('final-depth').textContent = fmtDepth(state.depth);
  $('final-rank').textContent = state.me
    ? `Miejsce ${state.me.rank} z ${state.me.players} w dzisiejszym rankingu.`
    : '';
  $('final-squares').textContent = state.history.map((h) => TIER_SQUARES[h.tier] ?? '⬛').join('');
  const list = $('final-recap');
  list.replaceChildren();
  for (const h of state.history) {
    const li = document.createElement('li');
    const dot = document.createElement('span');
    dot.className = `tier-dot t${h.tier}`;
    const strong = document.createElement('strong');
    strong.textContent = h.shown || (h.raw ? h.raw : 'brak odpowiedzi');
    li.append(dot, document.createTextNode(`${h.prompt}: `), strong, document.createTextNode(` · ${h.label}, ${h.points} pkt`));
    list.append(li);
  }
  loadBoard('today');
}

// ---------- ranking ----------
let boardTab = 'today';
async function loadBoard(which) {
  boardTab = which;
  $('tab-today').setAttribute('aria-selected', String(which === 'today'));
  $('tab-yesterday').setAttribute('aria-selected', String(which === 'yesterday'));
  const list = $('board-list');
  const meta = $('board-meta');
  try {
    if (!today) await loadToday();
    const day = which === 'today' ? today.day : today.yesterday;
    const lb = await api('GET', `/api/leaderboard?day=${day}`);
    if (boardTab !== which) return; // użytkownik zdążył przełączyć kartę
    meta.textContent = lb.players
      ? `${lb.day}: ${lb.players} ${lb.players === 1 ? 'gracz' : 'graczy'} ukończyło nurkowanie.`
      : `${lb.day}: nikt jeszcze nie ukończył nurkowania.`;
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
$('start-form').addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const btn = $('start-btn');
  btn.disabled = true;
  try {
    await startRun($('name').value.trim());
  } catch (e) {
    toast(e.message);
  } finally {
    btn.disabled = false;
  }
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
  if (!boardDlg.open) boardDlg.showModal();
  loadBoard(boardTab);
};
$('menu-btn').addEventListener('click', openBoard);
$('final-board').addEventListener('click', openBoard);
$('board-close').addEventListener('click', () => boardDlg.close());
boardDlg.addEventListener('click', (ev) => {
  if (ev.target === boardDlg) boardDlg.close();
});
$('final-share').addEventListener('click', async () => {
  const text = shareText();
  try {
    await navigator.clipboard.writeText(text);
    toast('Wynik skopiowany do schowka');
  } catch {
    toast('Nie udało się skopiować. Zaznacz wynik ręcznie.');
  }
});
$('tab-today').addEventListener('click', () => loadBoard('today'));
$('tab-yesterday').addEventListener('click', () => loadBoard('yesterday'));

// ---------- start ----------
(async function init() {
  buildRuler();
  renderHud(null);
  show('start');
  const savedName = store.get('name');
  if (savedName) $('name').value = savedName;
  try {
    await loadToday();
    // Wznów dzisiejszy bieg tylko jeśli ta przeglądarka już dziś zaczęła (nie zakładamy biegu po cichu).
    if (savedName && store.get('day') === today.day) await startRun(savedName);
  } catch (e) {
    toast(e.message);
  }
  loadBoard('today');
})();
