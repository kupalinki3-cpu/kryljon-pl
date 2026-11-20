# Głębia

Krok po kroku (Windows, Linux, NixOS, logowanie do Cloudflare): [TUTORIAL.md](TUTORIAL.md).

Codzienna polska gra w stylu Krillion: 7 pytań dziennie, 25 sekund na odpowiedź. Im rzadsza odpowiedź, tym więcej punktów i tym głębiej schodzi haczyk (10 m za punkt, maks. 7000 m). Ranking dzienny (Dziś / Wczoraj), anonimowi gracze z pseudonimem.

Stos: Cloudflare Worker + D1 + pliki statyczne z `public/`. Bez zależności w runtime.

## Uruchomienie

```
npm test                      # 27 testów: silnik, treść, API na symulowanym D1
npx wrangler d1 create glebia # wpisz zwrócone database_id do wrangler.toml
npm run db:migrate:local      # migracje lokalnie
npm run dev                   # wrangler dev
npx wrangler secret put ADMIN_TOKEN
npm run db:migrate:remote
npm run deploy
```

Wersje wranglera i `compatibility_date` w `wrangler.toml` nie były tu sprawdzane (brak sieci i workerd w piaskownicy). Sprawdź je przy pierwszym `wrangler dev`.

## Zasady, które trzeba znać

- **Czas liczy serwer.** Pierwsze pobranie pytania ustawia start (+3 s na przeczytanie). Odpowiedź po 25 s + 1,5 s tolerancji dostaje 409, pytanie liczy się jako puste.
- **Pytania dnia** są losowane deterministycznie z daty (Europe/Warsaw) i zapisywane w tabeli `days`. **Nigdy nie usuwaj ani nie zmieniaj `id` kategorii** w `src/content/`, bo zepsujesz stare dni.
- **Dopasowanie odpowiedzi:** bez wielkości liter i polskich znaków, dokładne, potem literówki (tylko nazwy ≥ 7 znaków, cyfry muszą się zgadzać, wynik musi być jednoznaczny).
- **Poziomy rzadkości są redakcyjne i niekalibrowane.** Wpis w treści ma postać `[poziom 1-6, "nazwa", ...aliasy]`.
- **Tożsamość:** token w localStorage, w bazie tylko jego skrót SHA-256. Wyczyszczenie localStorage pozwala zagrać drugi raz tego samego dnia.

## Rozbudowa bazy

`GET /api/admin/unmatched?min=2&limit=200` z nagłówkiem `Authorization: Bearer <ADMIN_TOKEN>` zwraca najczęstsze odpowiedzi, które nie trafiły do bazy, pogrupowane per pytanie. Dopisz je do plików w `src/content/` z właściwym poziomem. Nowe kategorie dodaje się w `src/content/*.js` i `src/content/index.js`.

## Struktura

- `src/game.js` – czysta logika (normalizacja, dopasowanie, daty, losowanie)
- `src/index.js` – API Workera
- `src/content/` – 41 kategorii, ok. 2350 wpisów
- `migrations/0001_init.sql` – schemat D1
- `public/` – front: `scene.js` (pikselartowe morze na canvasie), `app.js` (logika), `style.css`, `index.html`. Czcionka Pixelify Sans ładuje się z Google Fonts, bez sieci wchodzi monospace
- `test/` – testy (`d1shim.js` emuluje D1 na `node:sqlite`)
