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

// MongoDB connection
let connectionPromise;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGO_URL)
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  await connectionPromise;
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

app.use("/api/v1", textRouter);



module.exports = app;