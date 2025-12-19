const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");
const admin = require("../middlewares/adminWare");
const isLoggedin = require("../middlewares/isLoggedin");

router.post(
  "/create",
  isLoggedin,
  admin,
  upload.single("image"),
  async (req, res) => {
    try {
      let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
      let product = await productModel.create({
        image: `/uploads/${req.file.filename}`,
        name,
        price,
        discount,
        bgcolor,
      });
      res.json({
        success: true,
        product,
      });
    } catch (err) {
      res.send(err.message);
    }
  }
);

router.get("/all", async (req, res) => {
  try {
    let products = await productModel.find();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
