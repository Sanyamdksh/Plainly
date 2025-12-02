const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      name: String,
      price: Number,
    },
  ],
  amount: Number,
  address: {
    contact: Number,
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String,
  },
  paymentMethod: {
    type: String,
    default: "COD",
  },
  status: {
    type: String,
    default: "Placed",
  },
  placedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("order", orderSchema);
