const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array
  },
  {
    timestamps: true
  }
);

userSchema.plugin(timestamp);

const User = mongoose.model("User", userSchema);

module.exports = User;
