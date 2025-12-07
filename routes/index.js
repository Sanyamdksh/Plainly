const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.json("error");
});

router.get("/shop", isLoggedin, async (req, res) => {
  let product = await productModel.find();
  let success = req.flash("success");
  res.render("shop", { product, success });
});

router.get("/cart", isLoggedin, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");

  let bill = 0;
  user.cart.forEach((product) => {
    const discountPrice =
      Number(product.price) - (product.price * product.discount) / 100;
    bill += discountPrice;
  });
  bill = bill + 20;
  res.render("cart", { user, bill });
});

router.get("/addtocart/:productid", isLoggedin, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Added to cart");
  res.redirect("/shop");
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
