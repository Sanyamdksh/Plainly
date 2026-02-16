const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    req.flash("error", "you need to login first");
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    //   -password means we don't need password in the "user"
    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "something went wrong");
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
