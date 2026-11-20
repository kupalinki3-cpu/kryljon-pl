# Głębia: uruchomienie krok po kroku

Dwa tryby: **lokalnie** (do grania i testów, bez konta) i **na Cloudflare** (żeby gra była w sieci). Zacznij od lokalnego.

Co było sprawdzone, a co nie: testy (`npm test`) i front w Chrome przeszły na Linuksie z symulowanym D1. Samo `wrangler dev` i deploy na Cloudflare nie były uruchamiane przez autora, więc pierwszy raz mogą pokazać błąd. Wtedy wklej komunikat.

## 0. Czego potrzebujesz

- **Node.js 22 lub nowszy** (`node -v`). Testy używają wbudowanego `node:sqlite`.
- **Git**.
- **Konto Cloudflare**, ale tylko do wdrożenia (część 3). Plan darmowy wystarcza dla Workera i D1.

## 1. Przygotowanie systemu

### Windows (PowerShell)

```
winget install OpenJS.NodeJS
winget install Git.Git
```

Zamknij i otwórz terminal. Jeśli `npm` zgłasza, że uruchamianie skryptów jest wyłączone:

```
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

(potwierdź `T`), albo wpisuj `npm.cmd` i `npx.cmd`, albo użyj zwykłego `cmd`.

### Linux

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
exec $SHELL
nvm install 22
```

### NixOS

```
nix-shell
```

`shell.nix` daje Node 22 i `steam-run-free` (potrzebny do `workerd`). Dev uruchamiasz przez `steam-run npm run dev`.

## 2. Lokalnie

```
git clone https://github.com/kupalinki3-cpu/kryljon-pl
cd kryljon-pl
npm test
```

Oczekiwany wynik: `# pass 27`, `# fail 0`.

Uruchomienie gry:

```
npm run db:migrate:local
npm run dev
```

Otwórz `http://localhost:8787`. (NixOS: `steam-run npm run dev`.)

Lokalna baza D1 to plik w katalogu `.wrangler/`. Jeśli chcesz zagrać od nowa, usuń ten katalog i zrób migrację jeszcze raz. W `wrangler.toml` zostaje na razie placeholder `database_id`; przy lokalnym D1 powinien wystarczyć (niesprawdzone).

## 3. Logowanie do Cloudflare i wdrożenie

### 3.1 Konto

Załóż konto na https://dash.cloudflare.com/sign-up (darmowe, bez karty).

### 3.2 Logowanie wranglera

```
npx wrangler login
```

Otworzy się przeglądarka. Kliknij **Allow**. Terminal napisze, że logowanie się udało. Sprawdź:

```
npx wrangler whoami
```

Na serwerze bez przeglądarki: wrangler wypisze adres, otwórz go na innym komputerze. Można też utworzyć token API (Cloudflare Dashboard → My Profile → API Tokens → szablon "Edit Cloudflare Workers", dodaj uprawnienie D1 Edit) i ustawić zmienną `CLOUDFLARE_API_TOKEN`.

### 3.3 Baza danych

```
npx wrangler d1 create glebia
```

Komenda wypisze fragment z `database_id` (długi identyfikator UUID). Wklej go do `wrangler.toml` w miejsce `UNSET-run-wrangler-d1-create`.

### 3.4 Migracja i sekret

```
npm run db:migrate:remote
npx wrangler secret put ADMIN_TOKEN
```

`ADMIN_TOKEN` to dowolny długi losowy ciąg. Zapamiętaj go, bo chroni endpoint do rozbudowy bazy (część 5). Nie wpisuj go do żadnego pliku w repo.

### 3.5 Deploy

```
npm run deploy
```

Wrangler wypisze adres w stylu `https://glebia.<twoja-nazwa>.workers.dev`. Własną domenę dodasz w panelu: Workers & Pages → glebia → Settings → Domains & Routes.

## 4. Aktualizacje

Po zmianach w kodzie lub treści: `npm test`, potem `npm run deploy`. Migracje bazy uruchamiasz tylko, gdy w `migrations/` pojawi się nowy plik: `npm run db:migrate:remote`.

**Nigdy nie usuwaj ani nie zmieniaj `id` kategorii w `src/content/`.** Pytania dnia są losowane po tych identyfikatorach, więc zmiana zepsuje stare dni.

## 5. Rozbudowa bazy odpowiedzi

Odpowiedzi, których nie ma w bazie, dostają 0 punktów i trafiają do kolejki. Podejrzysz najczęstsze:

```
curl -H "Authorization: Bearer TWOJ_ADMIN_TOKEN" "https://glebia.<twoja-nazwa>.workers.dev/api/admin/unmatched?min=2"
```

(Windows PowerShell: `curl.exe`, nie `curl`.) Dopisz wartościowe odpowiedzi do plików w `src/content/` z właściwym poziomem rzadkości (1-6) i wdróż ponownie. Poziomy są oceną redakcyjną i warto je korygować na podstawie tego, co wpisują gracze.

## 6. Najczęstsze problemy

| Objaw | Co zrobić |
|---|---|
| `running scripts is disabled` | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` albo `npm.cmd` |
| `npm test` wywala się na `node:sqlite` | Node jest za stary, zainstaluj 22+ |
| `wrangler dev` nie startuje na NixOS | użyj `steam-run npm run dev` |
| `Authentication error` przy deployu | `npx wrangler login` jeszcze raz |
| `database_id` / `D1_ERROR` | sprawdź, czy wkleiłeś `database_id` do `wrangler.toml` i wykonałeś migrację |
| Zła godzina "nowych pytań" | dzień liczy się w strefie Europe/Warsaw, o północy |
