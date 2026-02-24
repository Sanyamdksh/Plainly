const express = require("express");
const router = express.Router();
const orderModel = require("../models/order-model");
const productModel = require("../models/product-model");
const isLoggedin = require("../middlewares/isLoggedin");
const admin = require("../middlewares/adminWare");

router.get("/analytics", isLoggedin, admin, async (req, res) => {
  try {
    const totalProducts = await productModel.countDocuments();
    const totalOrders = await orderModel.countDocuments();

    const revenue = await orderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$amount" },
        },
      },
    ]);

    const totalRevenue = revenue.length > 0 ? revenue[0].totalRevenue : 0;

    const soldAgg = await orderModel.aggregate([
      { $unwind: "$items" },
      {
        $group: {
          _id: null,
          totalSold: { $sum: "$items.quantity" },
        },
      },
    ]);

    const totalSold = soldAgg.length > 0 ? soldAgg[0].totalSold : 0;
    res.json({
      totalProducts,
      totalOrders,
      totalRevenue,
      totalSold,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
