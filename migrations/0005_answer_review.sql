CREATE TABLE reviewed_answers (
  prompt_id TEXT NOT NULL,
  norm TEXT NOT NULL,
  display TEXT NOT NULL,
  meters INTEGER CHECK (meters IS NULL OR meters BETWEEN 10 AND 100000),
  reviewed_at INTEGER NOT NULL,
  sources TEXT,
  PRIMARY KEY (prompt_id, norm)
);

-- Brak metrów oznacza odrzucenie. Tylko zatwierdzone odpowiedzi wchodzą do gry.
CREATE INDEX reviewed_answers_approved ON reviewed_answers (prompt_id, norm) WHERE meters IS NOT NULL;

CREATE TABLE ai_answer_checks (
  id INTEGER PRIMARY KEY,
  prompt_id TEXT NOT NULL,
  norm TEXT NOT NULL,
  player TEXT NOT NULL,
  checked_at INTEGER NOT NULL
);
CREATE INDEX ai_answer_checks_time ON ai_answer_checks (checked_at);
CREATE INDEX ai_answer_checks_player ON ai_answer_checks (player, checked_at);
CREATE INDEX ai_answer_checks_candidate ON ai_answer_checks (prompt_id, norm, checked_at);
