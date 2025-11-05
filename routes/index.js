const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/shop", isLoggedin, (req, res) => {
  res.render("shop");
});

router.get("/logout", isLoggedin, (req, res) => {
  res.render("shop");
});

module.exports = router;
