const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/results", (req, res) => {
  res.render("results");
});

router.get("/error", (req, res) => {
  res.render("error");
});

module.exports = router;
