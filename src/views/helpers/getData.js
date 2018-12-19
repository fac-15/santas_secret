const dbConnection = require("../../database/db_connection.js");
const getUserData = cb => {
  dbConnection.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log(" dbConnection Query error in getData helper :", err);
      return cb(err);
    } else {
      return cb(null, res.rows);
    }
  });
};

module.exports = getUserData;
