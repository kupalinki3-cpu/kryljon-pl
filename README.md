# Polion

Krok po kroku (Windows, Linux, NixOS, logowanie do Cloudflare): [TUTORIAL.md](TUTORIAL.md).

Polska gra w stylu Krillion: 7 pytań, 25 sekund na odpowiedź. Każda odpowiedź ma w bazie własną głębokość w metrach: powszechna jak „Paweł Jumper” to ok. 200 m, a mało znany polski twórca z kilkoma tysiącami obserwujących to kilka tysięcy metrów. Głębokość się sumuje i nie ma sufitu.

Tryby gry:

- **rankingowy**: do trzech podejść dziennie, te same pytania dla wszystkich. W rankingu Dziś / Wczoraj widnieje najlepszy ukończony wynik gracza.
- **swobodny**: losowe pytania z polskiej bazy, bez rankingu. W trakcie nurkowania otwórz menu i wybierz „Od nowa”, aby wylosować nowy zestaw.

Odpowiedź, której nie ma w bazie, nie kończy pytania („brak echa”): można próbować dalej, dopóki płynie czas. W kategorii polskich memów wpisz nazwę mema, tytuł filmiku albo jego rozpoznawalny cytat. Gra sprawdza listę odpowiedzi i aliasów, np. „Ale urwał” i „ale urwal ale to bylo dobre” prowadzą do tego samego wpisu.

Stos: Cloudflare Worker + D1 + pliki statyczne z `public/`. Bez zależności w runtime.

## Uruchomienie

```
npm test                      # silnik, rzadkość odpowiedzi, treść, API i migracja
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
- **Pytania dnia** są losowane deterministycznie z daty (Europe/Warsaw) i zapisywane w tabeli `days`. Zachowuj identyfikatory kategorii. Przy wznowieniu zapisanej gry kategorie spoza puli zastępują pytania z puli danego trybu.
- **Dopasowanie odpowiedzi:** bez wielkości liter i polskich znaków, dokładne, potem literówki (tylko nazwy ≥ 7 znaków, cyfry muszą się zgadzać, wynik musi być jednoznaczny).
- **Głębokości są redakcyjne i niekalibrowane.** Wpis w treści ma postać `[metry, "nazwa", ...aliasy]`; pomocniki `group`, `cat` i `jit` z `src/content/util.js` zapisują grupy wpisów o podobnej głębokości (z deterministycznym rozrzutem ±20%). Pasma na ekranie: do 200 m „Każdy zna”, do 500 „Znane”, do 1500 „Niezłe”, do 4000 „Rzadkie”, do 10000 „Głębinowe”, od 10000 „???”. Punkty to metry / 10.
- **Brak echa:** nieznana odpowiedź nie jest zapisywana jako wynik, zegar biegnie dalej, a próba trafia do tabeli `misses` (maks. 40 prób na pytanie). Gdy czas minie bez trafienia, pytanie liczy się jako 0 m.
- **Tryb swobodny:** losowe pytania zapisane w `runs.prompts`, limit 60 nowych gier na godzinę na gracza, wyniki poza rankingiem.
- **Tożsamość:** token w localStorage, w bazie tylko jego skrót SHA-256.

## Rozbudowa bazy

Baza rośnie razem z graczami. Po trzech różnych tokenach graczy odpowiedź bez echa pojawia się z kategorią w panelu `/admin.html`. Zaloguj się tokenem `ADMIN_TOKEN` i zatwierdź odpowiedź z głębokością bazową albo odrzuć zgłoszenie. Decyzje są w D1 i działają od razu. Redakcyjne wpisy i nowe kategorie dodaje się w `src/content/`.

Opcjonalny sekret `GEMINI_API_KEY` włącza sprawdzanie automatyczne. Polion szuka pasującego artykułu w polskiej Wikipedii, a Gemini ocenia kategorię i bazową rzadkość na podstawie jego wstępu. Przy zatwierdzeniu zapisujemy odpowiedź, głębokość i adres źródła. Limit to 5 sprawdzeń na token gracza i 50 dla całej gry w ciągu 24 godzin. W razie braku potwierdzenia działa zwykła kolejka.

## Struktura

- `src/game.js` – czysta logika (normalizacja, dopasowanie, daty, losowanie)
- `src/index.js` – API Workera
- `src/content/` – 54 kategorie związane z Polską. Dane geograficzne pochodzą m.in. z [rejestru TERYT GUS](https://eteryt.stat.gov.pl/), potrawy i napoje z [Listy Produktów Tradycyjnych MRiRW](https://www.gov.pl/web/rolnictwo/lista-produktow-tradycyjnych12), uczelnie z [rejestru POL-on](https://radon.nauka.gov.pl/pomoc/knowledge-base/414/). Z zestawień PESEL z 20.01.2026 pochodzą także [nazwiska](https://dane.gov.pl/pl/dataset/1681) od 100 wystąpień i [imiona](https://dane.gov.pl/pl/dataset/1667) od 50 wystąpień, z osobno potwierdzonymi rzadszymi wpisami.
- `migrations/` – schemat D1, metry, tryby oraz podejścia do rankingu. Migracja `0004_daily_attempts.sql` przypisuje dotychczasowym rozgrywkom pierwsze podejście.
- `public/` – front: `scene.js` (pikselartowe morze na canvasie), `app.js` (logika), `style.css`, `index.html`. Czcionka Pixelify Sans ładuje się z Google Fonts, bez sieci wchodzi monospace
- `test/` – testy (`d1shim.js` emuluje D1 na `node:sqlite`)

## Rzadkość dynamiczna

W kategoriach z ponad 100 różnymi wpisami głębokość stopniowo spada, maksymalnie o 40% przed korektą za popularność. Warianty pisowni i aliasy w ramach jednego wpisu liczą się jako jedna odpowiedź.

Głębokość odpowiedzi to wartość z bazy skorygowana o to, jak często gracze podają daną odpowiedź w kategorii
(`adjustMeters` w `src/game.js`): najczęstsza jest do 50% płytsza, odpowiedź, której nikt nie podaje, do 25% głębsza,
a wpisy poniżej 200 m („Każdy zna”) nigdy nie robią się głębsze. Korekta rośnie liniowo do 100 odpowiedzi w kategorii.
Współczynniki są redakcyjne i niekalibrowane na prawdziwym ruchu. Po zmianie migracji uruchom `npm run db:migrate:remote`.
