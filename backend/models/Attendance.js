const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  loginTime: { type: Date },
  logoutTime: { type: Date },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);

