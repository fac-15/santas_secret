const dbConnection = require('../../database/db_connection.js');

const postUserData = (name, cb) => {
  dbConnection.query(
    'INSERT INTO users (full_name) VALUES ($1) returning id',
    [name],
    (err, res) => {
      if (err) {
        console.log('dbConnection error in postData :', err);
      } else {
        // charlie and Oliver got rid of res.rows in the cb here
        // for some reason, can't remember why
        // thought it was maybe to do with db validation
        // adding it back in makes our postData test pass, yay
        cb(null, res.rows);
      }
    }
  );
};
module.exports = postUserData;
