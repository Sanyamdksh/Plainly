const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "admin access only" });
  }
  next();
};
