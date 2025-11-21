const path = require('path')
const Database = require('better-sqlite3')

const dbPath = path.join(__dirname, '..', 'data.sqlite')
const db = new Database(dbPath)

// Ensure a single-row counter table exists
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS counter (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    value INTEGER NOT NULL
  )
`,
).run()

const getStmt = db.prepare('SELECT value FROM counter WHERE id = 1')
const insertStmt = db.prepare('INSERT INTO counter (id, value) VALUES (1, ?)')
const updateStmt = db.prepare('UPDATE counter SET value = ? WHERE id = 1')

// Seed with 0 if empty
const row = getStmt.get()
if (!row) {
  insertStmt.run(0)
}

function getCounterValue() {
  const item = getStmt.get()
  return item?.value ?? 0
}

function setCounterValue(nextValue) {
  updateStmt.run(nextValue)
  return getCounterValue()
}

module.exports = {
  db,
  getCounterValue,
  setCounterValue,
}



