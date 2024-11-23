const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("./config/passportConfig"); // Ensure this file exists and is configured
const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const Prediction =require("./models/Prediction");
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors({
  // Your ML model server's origin
}));
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes); // Authentication routes
app.use("/api/predictions", predictionRoutes); // Prediction routes

app.post('/save', async (req, res) => {
  try {
      const { type, input, output } = req.body;

      // Validate input
      if (!type || !input || !output) {
          return res.status(400).json({ message: "Invalid request data" });
      }

      // Create a new document
      const newEntry = new Prediction({ type, input, output });
      await newEntry.save();

      res.status(200).json({ message: `${type} data saved successfully!` });
  } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Failed to save data' });
  }
});
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5001, () =>
      console.log(`Server running on http://localhost:${process.env.PORT || 5001}`)
    );
  })
  .catch((err) => console.error("Database connection error:", err));
