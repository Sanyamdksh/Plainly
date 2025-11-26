const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { saveAddress } = require("../controllers/userController");
const isLoggedin = require("../middlewares/isLoggedin");
const userModel = require("../models/user-model");

router.get("/profile", isLoggedin, (req, res) => {
  return res.json({ user: req.user });
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/save-add", isLoggedin, saveAddress);
module.exports = router;
