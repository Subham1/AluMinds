const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  loginTime: { type: Date },
  logoutTime: { type: Date },
});

module.exports = mongoose.model("User", userSchema);

