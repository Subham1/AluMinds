const mongoose = require("mongoose");

/*
const predictionSchema = new mongoose.Schema({
    parameters: [
      { type: Number, required: true } // This is for storing an array of parameters
    ],
    outputs: [
      { type: Number, required: true } // Array for storing prediction outputs
    ],
    createdAt: { type: Date, default: Date.now }
  });
*/
const PredictionSchema = new mongoose.Schema({
  parameters: {
    castingTemperature: { type: Number, required: true }, // Example: in °C
    coolingWaterTemperature: { type: Number, required: true }, // Example: in °C
    castingSpeed: { type: Number, required: true }, // Example: in m/min
    emulsionTemperature: { type: Number, required: true }, // Example: in °C
    emulsionPressure: { type: Number, required: true }, // Example: in bar
    emulsionConcentration: { type: Number, required: true }, // Example: percentage
    rodQuenchWaterPressure: { type: Number, required: true }, // Example: in bar
    entryTemperature: { type: Number, required: true }, // Example: in °C
  },
  chemicalComposition: {
    aluminum: { type: Number, required: true }, // Example: percentage
    silicon: { type: Number, required: true }, // Example: percentage
    magnesium: { type: Number, required: true }, // Example: percentage
    iron: { type: Number, required: true }, // Example: percentage
  },
  predictions: {
    ultimateTensileStrength: { type: Number, required: true }, // Example: in MPa
    elongation: { type: Number, required: true }, // Example: percentage
    conductivity: { type: Number, required: true }, // Example: in %IACS
  },
  createdAt: { type: Date, default: Date.now }, // Timestamp for record creation
});

module.exports = mongoose.model("Prediction", PredictionSchema);
