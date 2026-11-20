// Minimalny shim D1 na node:sqlite: tylko ta część interfejsu, której używa src/index.js
// (prepare/bind/first/all/run oraz batch jako transakcja). Służy wyłącznie do testów lokalnych.
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';

export function makeD1() {
  const db = new DatabaseSync(':memory:');
  db.exec(readFileSync(new URL('../migrations/0001_init.sql', import.meta.url), 'utf8'));

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
