const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  res.json({ success: true, message: "API running" });
});

router.get("/logout", isLoggedin, (req, res) => {
  res.clearCookie("token", {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
  });
  res.json({ success: true, message: "Logged out successfully" });
});

module.exports = router;
