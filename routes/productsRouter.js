const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    let product = await productModel.create({
      image: `/uploads/${req.file.filename}`,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
    req.flash("success", "Product created Successfully");
    res.redirect("/owners/admin");
    // res.send("chal gya");
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    let products = await productModel.find();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
