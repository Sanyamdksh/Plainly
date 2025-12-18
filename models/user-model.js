const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
  },
  // contact: Number,
  // picture: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: String,
    contact: Number,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("user", userSchema);
