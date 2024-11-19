const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, unique: true, required: true },
  loginTime: { type: Date },
  logoutTime: { type: Date },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);

