const express = require("express");
const route = express.Router();
const Comments = require("../models/Comments");
const verifyToken = require("../middleware/VerifyToken");

route.post("/", verifyToken, async (req, res) => {
  try {
    const { postID } = req.body;
    const fetchedComments = await Comments.find({ postID : postID });
    if (!fetchedComments || fetchedComments.length === 0) {
      res.status(404).json({ message: "no-comments-found" });
    } else {
      res.status(200).json(fetchedComments);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "no-comments-found" });
  }
});

module.exports = route;
