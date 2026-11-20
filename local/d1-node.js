// Minimalny odpowiednik D1 na wbudowanym node:sqlite: tylko ta część interfejsu, której używa src/index.js
// (prepare/bind/first/all/run oraz batch jako transakcja). Służy do trybu lokalnego (npm start) i testów.
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { dirname } from 'node:path';

const MIGRATIONS = new URL('../migrations/', import.meta.url);

/** Stosuje pliki z migrations/ w kolejności nazw; numer ostatniej zastosowanej trzyma PRAGMA user_version. */
function migrate(db) {
  const files = readdirSync(MIGRATIONS).filter((f) => f.endsWith('.sql')).sort();
  const done = db.prepare('PRAGMA user_version').get().user_version;
  files.slice(done).forEach((f, i) => {
    db.exec('BEGIN');
    try {
      db.exec(readFileSync(new URL(f, MIGRATIONS), 'utf8'));
      db.exec(`PRAGMA user_version = ${done + i + 1}`);
      db.exec('COMMIT');
    } catch (err) {
      db.exec('ROLLBACK');
      throw new Error(`Migracja ${f} nie powiodła się: ${err.message}`);
    }
  });
}

export function makeD1(file = ':memory:') {
  if (file !== ':memory:') mkdirSync(dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  migrate(db);

  class Stmt {
    constructor(sql) {
      this.sql = sql;
      this.args = [];
    }
    bind(...args) {
      this.args = args;
      return this;
    }
    _prep() {
      return db.prepare(this.sql);
    }
    _runSync() {
      const info = this._prep().run(...this.args);
      return { success: true, meta: { changes: Number(info.changes), last_row_id: Number(info.lastInsertRowid) } };
    }
    async first() {
      const row = this._prep().get(...this.args);
      return row === undefined ? null : { ...row };
    }
    async all() {
      return { results: this._prep().all(...this.args).map((r) => ({ ...r })), success: true };
    }
    async run() {
      return this._runSync();
    }
  }

  return {
    raw: db,
    prepare: (sql) => new Stmt(sql),
    async batch(stmts) {
      db.exec('BEGIN');
      try {
        const out = stmts.map((s) => s._runSync());
        db.exec('COMMIT');
        return out;
      } catch (err) {
        db.exec('ROLLBACK');
        throw err;
      }
    },
  };
}
