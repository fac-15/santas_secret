const dbConnection = require('../../database/db_connection.js');

const postUserData = (name, cb) => {
  dbConnection.query(
    'INSERT INTO users (full_name) VALUES ($1) returning id',
    [name],
    (err, res) => {
      if (err) {
        console.log('dbConnection error in postData :', err);
      } else {
        cb(null);
      }
    }
  );
};
module.exports = postUserData;
