const express = require("express");
const { getPrediction } = require("../controllers/predictionController");

const router = express.Router();

// Predict outputs based on user input
router.post("/predict", getPrediction);

module.exports = router;
