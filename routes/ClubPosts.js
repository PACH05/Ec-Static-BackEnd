const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/VerifyToken");
const Posts = require("../models/Posts");
const Clubs = require("../models/Clubs");

route.get("/", verifyToken, async (req, res) => {
  const clubID = req.query.clubID;
  try {
    const isClubAvailable = await Clubs.find({ ClubTag: clubID });
    if (!isClubAvailable || isClubAvailable.length == 0) {
      res.status(404).json({ message: "club-not-found" });
    } else {
      const clubPosts = await Posts.find({ clubID: clubID });
      console.log(`Fetching ${clubID} club posts`);
      res.status(200).json({ posts: clubPosts });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ err });
  }
});

module.exports = route;
