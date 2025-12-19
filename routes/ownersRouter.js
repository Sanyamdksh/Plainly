const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const admin = require("../middlewares/adminWare");

router.get("/admin", (req, res) => {
  let success = req.flash("success");
  res.send("hello");
  // res.render("createProducts",{success})
});

module.exports = router;
