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

router.post("/cart/add", isLoggedin, async (req, res) => {
  const { productId } = req.body;
  let user = await userModel.findById(req.user._id);

  //mongoose stores product as objID
  // productId from frontend is a string
  const exist_item = user.cart.find(
    (item) => item.product.toString() === productId
  );
  if (exist_item) exist_item.quantity += 1;
  else user.cart.push({ product: productId });

  await user.save();
  await user.populate("cart.product");
  res.json({ success: true, message: "Added to cart", cart: user.cart });
});

router.post("/cart/update", isLoggedin, async (req, res) => {
  const { productId, quantity } = req.body;

  if (quantity < 1)
    return res
      .status(400)
      .json({ success: false, message: "Quantity cannot be less than 1" });
  let user = await userModel.findById(req.user._id);
  const item = user.cart.find((i) => i.product.toString() === productId);

  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  item.quantity = quantity;
  await user.save();
  await user.populate("cart.product");
  res.json({ success: true, cart: user.cart });
});

router.post("/cart/remove", isLoggedin, async (req, res) => {
  const { productId } = req.body;
  let user = await userModel.findById(req.user._id).populate("cart.product");
  user.cart = user.cart.filter(
    (item) => item.product._id.toString() !== productId
  );

  await user.save();
  res.json({ success: true, cart: user.cart });
});

router.get("/cart", isLoggedin, async (req, res) => {
  const user = await userModel.findById(req.user._id).populate("cart.product");

  res.json({ success: true, cart: user.cart });
});

module.exports = router;
