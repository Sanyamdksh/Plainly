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
      let { name, price, discount, bgcolor } = req.body;
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
  },
);

router.put(
  "/:id",
  isLoggedin,
  admin,
  upload.single("image"),
  async (req, res) => {
    try {
      let { name, price, discount, bgcolor } = req.body;
      const updateData = { name, price, discount, bgcolor };
      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }
      const updatedProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true },
      );
      if (!updatedProduct) {
        return res.status(400).json({ message: "Product not found" });
      }
      res.json({ product: updatedProduct });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },
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
