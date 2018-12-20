const dbConnection = require("../../database/db_connection.js");
const getUserNames = cb => {
  dbConnection.query("SELECT full_name FROM users", (err, res) => {
    if (err) {
      console.log(" dbConnection Query error in getData helper :", err);
      return cb(err);
    } else {
      const array = [];
      res.rows.forEach(row => {
        array.push(row.full_name);
      });
      cb(null, array);
    }
  });
};

module.exports = getUserNames;
