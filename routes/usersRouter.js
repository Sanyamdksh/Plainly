const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { saveAddress } = require("../controllers/userController");
const isLoggedin = require("../middlewares/isLoggedin");
const userModel = require("../models/user-model");
const orderModel = require("../models/order-model");

router.get("/profile", isLoggedin, (req, res) => {
  return res.json({ user: req.user });
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/save-add", isLoggedin, saveAddress);

router.post("/place-order", isLoggedin, async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    if (!items || !amount || !address) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }
    const order = await orderModel.create({
      user: req.user._id,
      items,
      amount,
      address,
    });
    res.json({ success: true, message: "order placed successfully", order });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/orders", isLoggedin, async (req, res) => {
  try {
    const orders = await orderModel.find({ user: req.user._id });
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
