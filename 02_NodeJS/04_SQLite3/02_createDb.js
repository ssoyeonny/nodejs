var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("../../03_Sqlite/test.db");

sql = `CREATE TABLE IF NOT EXISTS bbs3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    writer TEXT NOT NULL,
    timestamp datetime DEFAULT CURRENT_TIMESTAMP)`;
db.run(sql);

//db.run(`ALTER TABLE bbs3 ADD COLUMN content TEXT`);

db.close();