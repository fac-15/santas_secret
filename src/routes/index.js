const express = require("express");
const router = express.Router();
const helpers = require("../views/helpers/index.js");
const reset = require("../database/build_test.js");

router.get("/", (req, response) => {
  helpers.getData((error, resultGetData) => {
    if (error) {
      console.log("error in getData: ", error);
    } else {
      console.log("getData response: ", resultGetData);
      response.render("home", {
        people: resultGetData
      });
    }
  });
});

router.post("/", (req, response) => {
  console.log(req.body.name);
  helpers.postData(req.body.name, (err, resultPostData) => {
    if (err) {
      console.log("error in postData: ", err);
    } else {
      response.redirect("/");
    }
  });
});

router.get("/reset", (req, response) => {
  console.log("you're in the reset route");
  reset((err, res) => {
    if (err) {
      console.log("reset error: ", err);
    } else {
      response.redirect("/");
    }
  });
});

router.get("/generate", (req, response) => {
  console.log("you're in the generate route");
  helpers.getNames((err, res) => {
    if (err) {
      console.log("generate error: ", err);
    } else {
      const shuffledNames = helpers.shuffle(res);
      console.log("unshuffled names in router: ", res);
      console.log("shuffled names in router: ", shuffledNames);
      response.redirect("/results");
    }
  });
});

router.get("/results", (req, response) => {
  console.log("you're in the results route");
  response.render("results");
});

router.get("/error", (req, response) => {
  response.render("error");
});

module.exports = router;
