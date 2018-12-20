const express = require("express");
const router = express.Router();
const helpers = require("../views/helpers/index.js");

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  console.log(req.body.name);
  helpers.postData(req.body.name, (err, res) => {
    if(err){
      console.log("error in postData: ", err);
    } else {
      helpers.getData((error, response) => {
        if(error){
          console.log("error in getData: ", error);
        } else {
          console.log("getData response: ", response);
        }
      })
    }
  })
});

router.get("/results", (req, res) => {
  res.render("results");
});

router.get("/error", (req, res) => {
  res.render("error");
});

module.exports = router;
