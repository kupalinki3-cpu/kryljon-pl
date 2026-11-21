-- Dotychczasowy bieg jest pierwszym podejściem. Zachowujemy identyfikatory i odpowiedzi.
ALTER TABLE runs ADD COLUMN attempt INTEGER NOT NULL DEFAULT 1 CHECK (attempt BETWEEN 1 AND 3);
CREATE UNIQUE INDEX runs_daily_attempt ON runs (day, player, attempt) WHERE mode = 'daily';
DROP INDEX runs_daily_once;

CREATE VIEW daily_best_runs AS
SELECT run.*
FROM runs AS run
WHERE run.mode = 'daily' AND run.finished = 1
  AND NOT EXISTS (
    SELECT 1 FROM runs AS other
    WHERE other.day = run.day AND other.player = run.player
      AND other.mode = 'daily' AND other.finished = 1
      AND (other.meters > run.meters
        OR (other.meters = run.meters AND other.total_ms < run.total_ms)
        OR (other.meters = run.meters AND other.total_ms = run.total_ms AND other.id < run.id))
  );
