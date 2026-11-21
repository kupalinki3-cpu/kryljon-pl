# Głębia

Krok po kroku (Windows, Linux, NixOS, logowanie do Cloudflare): [TUTORIAL.md](TUTORIAL.md).

Polska gra w stylu Krillion: 7 pytań, 25 sekund na odpowiedź. Każda odpowiedź ma w bazie własną głębokość w metrach: powszechna jak „Paweł Jumper” to ok. 200 m, a mało znany polski twórca z kilkoma tysiącami obserwujących to kilka tysięcy metrów. Głębokość się sumuje i nie ma sufitu.

Dwa tryby:

- **rankingowy**: raz dziennie, te same pytania dla wszystkich, ranking Dziś / Wczoraj, anonimowi gracze z pseudonimem;
- **swobodny**: dowolnie wiele gier, losowe pytania, bez rankingu.

Odpowiedź, której nie ma w bazie, nie kończy pytania („brak echa”): można próbować dalej, dopóki płynie czas.

Stos: Cloudflare Worker + D1 + pliki statyczne z `public/`. Bez zależności w runtime.

## Uruchomienie

```
npm test                      # 37 testów: silnik, rzadkość dynamiczna, treść, API (oba tryby, brak echa, migracja 0002)
npm start                     # gra lokalnie na http://localhost:8787, bez Cloudflare
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
- **Głębokości są redakcyjne i niekalibrowane.** Wpis w treści ma postać `[metry, "nazwa", ...aliasy]`; pomocniki `group`, `cat` i `jit` z `src/content/util.js` zapisują grupy wpisów o podobnej głębokości (z deterministycznym rozrzutem ±20%). Pasma na ekranie: do 200 m „Każdy zna”, do 500 „Znane”, do 1500 „Niezłe”, do 4000 „Rzadkie”, do 10000 „Głębinowe”, dalej „Legenda głębin”. Punkty to metry / 10.
- **Brak echa:** nieznana odpowiedź nie jest zapisywana jako wynik, zegar biegnie dalej, a próba trafia do tabeli `misses` (maks. 40 prób na pytanie). Gdy czas minie bez trafienia, pytanie liczy się jako 0 m.
- **Tryb swobodny:** losowe pytania zapisane w `runs.prompts`, limit 60 nowych gier na godzinę na gracza, wyniki nie wchodzą do rankingu.
- **Tożsamość:** token w localStorage, w bazie tylko jego skrót SHA-256. Wyczyszczenie localStorage pozwala zagrać drugi raz tego samego dnia.

## Rozbudowa bazy

Baza jest punktem startowym i rośnie razem z graczami: nie zna wszystkiego, co Polacy mogą wpisać. `GET /api/admin/unmatched?min=2&limit=200` z nagłówkiem `Authorization: Bearer <ADMIN_TOKEN>` zwraca najczęstsze odpowiedzi bez echa (liczone raz na gracza), pogrupowane per pytanie. Dopisz je do plików w `src/content/` z właściwą głębokością w metrach. Nowe kategorie dodaje się w `src/content/*.js` i `src/content/index.js`.

## Struktura

- `src/game.js` – czysta logika (normalizacja, dopasowanie, daty, losowanie)
- `src/index.js` – API Workera
- `src/content/` – 48 kategorii, ok. 2970 wpisów (nauka, przyroda, geografia, miejsca, kultura, ludzie, sport i szkoła, internet)
- `migrations/` – `0001_init.sql` (schemat D1), `0002_modes_meters.sql` (tryby, metry, tabela `misses`), `0003_popularity_index.sql` (indeks pod rzadkość dynamiczną)
- `public/` – front: `scene.js` (pikselartowe morze na canvasie), `app.js` (logika), `style.css`, `index.html`. Czcionka Pixelify Sans ładuje się z Google Fonts, bez sieci wchodzi monospace
- `test/` – testy (`d1shim.js` emuluje D1 na `node:sqlite`)

## Rzadkość dynamiczna

Głębokość odpowiedzi to wartość z bazy skorygowana o to, jak często gracze podają daną odpowiedź w kategorii
(`adjustMeters` w `src/game.js`): najczęstsza jest do 50% płytsza, odpowiedź, której nikt nie podaje, do 25% głębsza,
a wpisy poniżej 200 m („Każdy zna”) nigdy nie robią się głębsze. Korekta rośnie liniowo do 100 odpowiedzi w kategorii.
Współczynniki są redakcyjne i niekalibrowane na prawdziwym ruchu. Po zmianie migracji uruchom `npm run db:migrate:remote`.
