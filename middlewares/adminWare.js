const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    req.flash("error", "you need to login first");
    return res.redirect("/");
  }
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "admin access only" });
  }
  next();
};
