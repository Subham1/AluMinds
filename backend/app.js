const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const predictionRoutes = require("./routes/predictionRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/predictions", predictionRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
  })
  .catch((error) => console.error("Database connection failed:", error));
