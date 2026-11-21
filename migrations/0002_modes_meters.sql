-- Dwa tryby (rankingowy raz dziennie, swobodny bez limitu), głębokość w metrach bez sufitu
-- oraz zapis prób "bez echa" (odpowiedzi spoza bazy nie kończą pytania, gracz próbuje dalej).

CREATE TABLE runs_v2 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  day TEXT NOT NULL,               -- dzień rankingowy albo 'free' dla trybu swobodnego
  mode TEXT NOT NULL DEFAULT 'daily',
  player TEXT NOT NULL,            -- SHA-256 tokenu gracza (sam token nigdy nie trafia do bazy)
  name TEXT NOT NULL,
  prompts TEXT,                    -- JSON z id kategorii (tylko tryb swobodny; rankingowy bierze je z tabeli days)
  idx INTEGER NOT NULL DEFAULT 0,
  started_at INTEGER,
  meters INTEGER NOT NULL DEFAULT 0,
  total_ms INTEGER NOT NULL DEFAULT 0,
  finished INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
INSERT INTO runs_v2 (id, day, mode, player, name, idx, started_at, meters, total_ms, finished, created_at)
  SELECT id, day, 'daily', player, name, idx, started_at, points * 10, total_ms, finished, created_at FROM runs;
DROP TABLE runs;
ALTER TABLE runs_v2 RENAME TO runs;
CREATE UNIQUE INDEX runs_daily_once ON runs (day, player) WHERE mode = 'daily';
CREATE INDEX runs_board ON runs (day, mode, finished, meters DESC, total_ms ASC, id ASC);
CREATE INDEX runs_free_latest ON runs (player, mode, id DESC);

ALTER TABLE answers RENAME COLUMN points TO meters;
UPDATE answers SET meters = meters * 10;
DROP INDEX IF EXISTS answers_unmatched;

CREATE TABLE misses (
  run_id INTEGER NOT NULL,
  idx INTEGER NOT NULL,
  prompt_id TEXT NOT NULL,
  raw TEXT NOT NULL,
  norm TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX misses_run ON misses (run_id, idx);
-- Kolejka do rozbudowy bazy: najczęstsze odpowiedzi bez echa per kategoria.
CREATE INDEX misses_queue ON misses (prompt_id, norm);
