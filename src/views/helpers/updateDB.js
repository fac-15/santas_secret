// UPDATE users
//  SET  secret_santa = cloneValue[i]
//  WHERE id = originalValue[i]
const dbConnection = require('../../database/db_connection.js');

const updateDB = (originalNames, secretNames, cb) => {
  originalNames.forEach((name, i) => {
    dbConnection.query(
      `UPDATE users SET secret_santa='${
        secretNames[i]
      }' WHERE full_name='${name}'`,
      (err, res) => {
        if (err) {
          console.log('this is the updateDB error: ', err);
          return cb(err);
        } else {
          console.log('this is the result in updateDB: ', res.rows);
          return cb(null, res.rows);
        }
      }
    );
  });
};

// const updateDB = (namePairs) => {
//   namePairs.forEach((pair) => {
//     dbConnection.query(
//       `UPDATE users SET secret_santa=${pair.secret}
//       WHERE full_name=${pair.buyer}`,
//       (err, res) => {
//         if (err) {
//           console.log('dbConnection error in postData :', err);
//         } else {
//           console.log(res);
//         }
//       }
//     );
//   });
// };

module.exports = updateDB;
