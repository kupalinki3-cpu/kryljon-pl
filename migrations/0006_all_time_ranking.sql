-- Zachowujemy numery i identyfikatory biegów, usuwając górną granicę podejść.
DROP INDEX runs_daily_attempt;
ALTER TABLE runs RENAME COLUMN attempt TO old_attempt;
ALTER TABLE runs ADD COLUMN attempt INTEGER NOT NULL DEFAULT 1 CHECK (attempt >= 1);
UPDATE runs SET attempt = old_attempt WHERE old_attempt <> 1;
ALTER TABLE runs DROP COLUMN old_attempt;
CREATE UNIQUE INDEX runs_daily_attempt ON runs (day, player, attempt) WHERE mode = 'daily';

CREATE INDEX runs_all_time_player ON runs (player, meters DESC, total_ms, id)
WHERE mode = 'daily' AND finished = 1;

CREATE VIEW all_time_best_runs AS
SELECT run.*
FROM runs AS run
WHERE run.mode = 'daily' AND run.finished = 1
  AND run.id = (
    SELECT other.id
    FROM runs AS other
    WHERE other.player = run.player AND other.mode = 'daily' AND other.finished = 1
    ORDER BY other.meters DESC, other.total_ms ASC, other.id ASC
    LIMIT 1
  );
