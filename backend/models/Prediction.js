const mongoose = require("mongoose");



const predictionSchema = new mongoose.Schema({
  parameters: {
    type: Object, // Allow storing an object instead of [string]
    required: true,
  },
  outputs: {
    type: Object, // Allow storing an object instead of [string]
    required: true,
  },
});

module.exports = mongoose.model("Prediction", predictionSchema);
