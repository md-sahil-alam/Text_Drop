const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { textRouter } = require("./textRouter");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: [
    "https://textdrop.in",
    "https://www.textdrop.in"
  ]
}));

app.use(express.json());

app.use("/api/v1", textRouter);

// MongoDB connection
async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected");
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({
      message: "Database connection failed"
    });
  }
});

module.exports = app;