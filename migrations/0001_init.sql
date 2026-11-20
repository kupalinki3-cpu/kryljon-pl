-- Pytania danego dnia zapisujemy raz, żeby wdrożenie nowych kategorii nie zmieniło ich w trakcie dnia.
CREATE TABLE days (
  day TEXT PRIMARY KEY,
  prompts TEXT NOT NULL            -- JSON: lista id kategorii w kolejności gry
);

CREATE TABLE runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  day TEXT NOT NULL,
  player TEXT NOT NULL,            -- SHA-256 tokenu gracza (sam token nigdy nie trafia do bazy)
  name TEXT NOT NULL,
  idx INTEGER NOT NULL DEFAULT 0,  -- numer bieżącego pytania
  started_at INTEGER,              -- ms: kiedy rusza zegar bieżącego pytania (NULL = jeszcze nie pobrano)
  points INTEGER NOT NULL DEFAULT 0,
  total_ms INTEGER NOT NULL DEFAULT 0,
  finished INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  UNIQUE (day, player)
);
CREATE INDEX runs_board ON runs (day, finished, points DESC, total_ms ASC, id ASC);

CREATE TABLE answers (
  run_id INTEGER NOT NULL,
  idx INTEGER NOT NULL,
  day TEXT NOT NULL,
  prompt_id TEXT NOT NULL,
  raw TEXT NOT NULL,               -- '' = brak odpowiedzi w czasie
  norm TEXT NOT NULL,
  key TEXT,                        -- nazwa kanoniczna z listy albo NULL gdy brak dopasowania
  tier INTEGER NOT NULL DEFAULT 0,
  points INTEGER NOT NULL DEFAULT 0,
  ms INTEGER NOT NULL,
  PRIMARY KEY (run_id, idx)
);
CREATE INDEX answers_prompt ON answers (day, prompt_id, key);
-- Kolejka do rozbudowy bazy: najczęstsze niedopasowane odpowiedzi per kategoria.
CREATE INDEX answers_unmatched ON answers (prompt_id, norm) WHERE key IS NULL AND norm != '';
