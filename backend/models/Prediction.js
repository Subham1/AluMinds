const mongoose = require("mongoose");

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

const Prediction = mongoose.model("Prediction", predictionSchema);



