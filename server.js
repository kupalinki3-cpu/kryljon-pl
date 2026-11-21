// Tryb lokalny: ten sam kod co na Cloudflare (src/index.js), ale na zwykłym Node i bazie w pliku.
// Uruchomienie: npm start. Bez wranglera, bez konta Cloudflare.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { handle } from './src/index.js';
import { makeD1 } from './local/d1-node.js';

const PORT = Number(process.env.PORT) || 8787;
const DB_FILE = process.env.GLEBIA_DB || fileURLToPath(new URL('./data/glebia.sqlite', import.meta.url));
const PUBLIC = fileURLToPath(new URL('./public/', import.meta.url));
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };

const ASSETS = {
  async fetch(request) {
    let path = decodeURIComponent(new URL(request.url).pathname);
    if (path.endsWith('/')) path += 'index.html';
    const file = normalize(join(PUBLIC, path));
    if (!file.startsWith(PUBLIC.endsWith(sep) ? PUBLIC : PUBLIC + sep)) return new Response('Nie znaleziono', { status: 404 });
    try {
      return new Response(await readFile(file), { headers: { 'content-type': TYPES[extname(file)] || 'application/octet-stream' } });
    } catch {
      return new Response('Nie znaleziono', { status: 404 });
    }
  },
};

const env = { DB: makeD1(DB_FILE), ASSETS, ADMIN_TOKEN: process.env.ADMIN_TOKEN };

const server = createServer(async (req, res) => {
  try {
    const chunks = [];
    let size = 0;
    for await (const c of req) {
      size += c.length;
      if (size > 16 * 1024) {
        res.writeHead(413).end('Za duże żądanie');
        return;
      }
      chunks.push(c);
    }
    const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
    const request = new Request(`http://${req.headers.host || 'localhost'}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: hasBody ? Buffer.concat(chunks) : undefined,
    });
    const response = await handle(request, env);
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (err) {
    console.error('Błąd serwera lokalnego:', err);
    if (!res.headersSent) res.writeHead(500);
    res.end('Błąd serwera');
  }
});

server.listen(PORT, () => {
  console.log(`Polion działa na http://localhost:${PORT}`);
  console.log(`Baza: ${DB_FILE}`);
  if (!process.env.ADMIN_TOKEN) console.log('ADMIN_TOKEN nie ustawiony: /api/admin/unmatched jest zamknięty.');
});
