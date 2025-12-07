const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, fullname, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(401).send("Account already exists");
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          let token = generateToken(user);
          res.cookie("token", token);
          res.send("user created!");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

// res.send default status is 200 OK
// 401 corresponds to invalid credentials
module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user)
    return res
      .status(401)
      .json({ success: false, message: "Invalid Credentials" });

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token, { httpOnly: true });
      res.json({ success: true, message: "Login Successfull" });
    } else {
      res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
  });
};
