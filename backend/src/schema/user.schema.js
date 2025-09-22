const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      enum: ["google", "github", "linkedin", "credentials"],
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
