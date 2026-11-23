const mongoose = require("mongoose");
const express = require("express")
const { textModel } = require("./db");
const bcrypt = require("bcrypt");
const textRouter = express.Router();

textRouter.post("/share/text", async (req, res) => {
  const { userName, password, data } = req.body;

  // Field validation
  if (!userName || !password || !data) {
    return res.status(400).json({
      message: "Please fill all three fields"
    });
  }

  if (userName.length < 3 || password.length < 3 || data.trim().length <= 1) {
    return res.status(400).json({
      message: "Invalid username, password or text"
    });
  }

  try {
    // finding all accounts with the same username
    const users = await textModel.find({ userName });

    let existingUser = null;

    // Compareing entered password with stored hash paswords
    for (const user of users) {
      const isMatch = await bcrypt.compare(password,user.password);

      if (isMatch) {
        existingUser = user;
        break;
      }
    }

    // If matching account update text
    if (existingUser) {
      existingUser.data = data;
      await existingUser.save();

      return res.status(200).json({
        message: "Existing text updated successfully",
        data: existingUser.data
      });
    }

    // else create a new account
    const hash_password = await bcrypt.hash(password, 10);

    const newUser = await textModel.create({
      userName,
      password: hash_password,
      data
    });

    return res.status(201).json({
      message: "New text shared successfully",
      data: newUser.data
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

textRouter.post("/view/text", async (req, res) => {
  const { userName, password } = req.body;

  // Validate fields
  if (!userName || !password) {
    return res.status(400).json({
      message: "Please enter username and password"
    });
  }

  if (userName.trim().length < 3) {
    return res.status(400).json({
      message: "Username must be at least 3 characters"
    });
  }

  if (password.length < 3) {
    return res.status(400).json({
      message: "Password must be at least 3 characters"
    });
  }

  try {
    // Finding all accounts with the same username
    const users = await textModel.find({
      userName: userName.trim()
    });

    // Checking password of each account
    let existingUser = null;

    for (const user of users) {
      const isMatch = await bcrypt.compare(password,user.password);

      if (isMatch) {
        existingUser = user;
        break;
      }
    }

    // If username/password combination doesnt exist
    if (!existingUser) {
      return res.status(401).json({
        message: "Incorrect username or password"
      });
    }

    //Return existing text
    return res.status(200).json({
      message: "Text retrieved successfully",
      text: existingUser.data
    });

  } catch (error) {
    console.error("View text error:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

module.exports={
  textRouter:textRouter
}

