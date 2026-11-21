const $ = (id) => document.getElementById(id);
const queue = $('queue');
const status = $('status');
let token = '';

async function api(path, body) {
  const headers = { authorization: `Bearer ${token}` };
  if (body) headers['content-type'] = 'application/json';
  const response = await fetch(`/api/admin/${path}`, {
    method: body ? 'POST' : 'GET',
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || 'Błąd serwera');
  return payload;
}

function setSession(active) {
  $('unlock').hidden = active;
  $('actions').hidden = !active;
  if (!active) {
    token = '';
    queue.replaceChildren();
    $('admin-token').focus();
  }
}

function renderItem(row) {
  const item = document.createElement('li');
  item.className = 'panel px';
  const title = document.createElement('h2');
  title.textContent = row.sample;
  const details = document.createElement('p');
  details.textContent = `${row.category} · głosy: ${row.n}`;
  const form = document.createElement('form');
  const label = document.createElement('label');
  label.textContent = 'Głębokość (m) ';
  const meters = document.createElement('input');
  meters.type = 'number';
  meters.min = '10';
  meters.max = '100000';
  meters.required = true;
  meters.value = '250';
  label.append(meters);
  const approve = document.createElement('button');
  approve.className = 'btn cyan';
  approve.type = 'submit';
  approve.textContent = 'Zatwierdź';
  const reject = document.createElement('button');
  reject.className = 'btn ghost';
  reject.type = 'button';
  reject.textContent = 'Odrzuć';
  const review = async (decision) => {
    approve.disabled = true;
    reject.disabled = true;
    try {
      await api('review', { promptId: row.prompt_id, answer: row.sample, decision, meters: meters.valueAsNumber });
      item.remove();
      status.textContent = decision === 'approve' ? 'Odpowiedź jest już w grze.' : 'Zgłoszenie odrzucone.';
    } catch (error) {
      status.textContent = error.message;
    } finally {
      approve.disabled = false;
      reject.disabled = false;
    }
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    review('approve');
  });
  reject.addEventListener('click', () => review('reject'));
  form.append(label, approve, reject);
  item.append(title, details, form);
  return item;
}

async function loadQueue() {
  const session = token;
  const { rows, minimumPlayers } = await api('unmatched');
  if (session !== token) return;
  queue.replaceChildren(...rows.map(renderItem));
  status.textContent = rows.length
    ? `Zgłoszenia do sprawdzenia: ${rows.length}`
    : `Pusto. Zgłoszenia pojawiają się po ${minimumPlayers} głosach różnych graczy.`;
  setSession(true);
}

$('unlock').addEventListener('submit', async (event) => {
  event.preventDefault();
  const submit = $('unlock').querySelector('button');
  submit.disabled = true;
  token = $('admin-token').value.trim();
  $('admin-token').value = '';
  try {
    await loadQueue();
  } catch (error) {
    setSession(false);
    status.textContent = error.message;
  } finally {
    submit.disabled = false;
  }
});

$('refresh').addEventListener('click', () => loadQueue().catch((error) => { status.textContent = error.message; }));
$('logout').addEventListener('click', () => {
  setSession(false);
  status.textContent = 'Wylogowano.';
});
