const test = require("tape");
const dbBuild = require("../database/build_test.js");
const helperIndex = require("../views/helpers/index.js");

test("Is tape working", t => {
  t.equal(1, 1, "1 should equal 1");
  t.end();
});

test("Is the getData helper getting the right data from db?", t => {
  dbBuild((error, response) => {
    if(error){
      console.log("dbBuild err: ", error);
    } else {
      helperIndex.getData((err, res) => {
        if(err){
          console.log("getData err: ", err);
        } else {
          console.log("result from getData: ", res);
          t.deepEqual(res[0].full_name, "Hannah", "The first user's full_name should be Hannah");
          t.end();
        }
      })
    }
  })
})
