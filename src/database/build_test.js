const fs = require('fs');
const dbConnection = require('./db_connection.js');
const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const runDbBuild = (cb) => {
  dbConnection.query(sql, cb);
};

module.exports = runDbBuild;
