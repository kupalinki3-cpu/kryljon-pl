-- Rzadkość zależy od tego, jak często inni gracze podają daną odpowiedź: indeks do szybkiego liczenia.
CREATE INDEX IF NOT EXISTS answers_popularity ON answers (prompt_id, key);
