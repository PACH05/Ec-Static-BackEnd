const express = require("express");
const bcrypt = require("bcryptjs");
const route = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWTSECRET = process.env.JWTSECRET;

route.post("/", async (req, res) => {
  const { name, email, username, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      name,
      email,
      username,
      password,
    });
    const token = jwt.sign(
      { username: response.username, id: response._id },
      JWTSECRET
    );
    return res
      .cookie("token", token)
      .json({ id: response._id, username: response.username });
  } catch (error) {
    res.json(error);
  }
});
module.exports = route;
