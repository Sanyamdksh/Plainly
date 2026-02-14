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
      image: String,
      name: String,
      price: Number,
      discount: Number,
      bgcolor: String,
      quantity: {
        type: Number,
        required: true,
      },
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
