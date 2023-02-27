const mysql = require("mysql");
const { dbConfig } = require("./dbConfig");

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }

  console.log("Connected to database");

  connection.release();
});

module.exports = pool;
