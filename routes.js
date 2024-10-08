const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();

const dbLink = process.env.DBLINK;

mongoose
  .connect(process.env.DBLINK)
  .then((db) => console.log("Database connection successful"))
  .catch((err) => console.log(err));

//Route Imports
const registerRoute = require("./routes/Register");
const postsRoute = require("./routes/Posts");
const loginRoute = require("./routes/Login");
const checkToken = require("./routes/CheckToken");
const allPosts = require("./routes/AllPosts");
const Profile = require("./routes/Profile");
const clubPosts = require("./routes/ClubPosts");
const createClub = require("./routes/CreateClub");
const joinClub = require("./routes/JoinClub");
const clubDetails = require("./routes/ClubDetails");
const IncreaseLike = require("./routes/IncreaseLike");
const SearchPost = require("./routes/SearchPost");
const FindPost = require("./routes/FindPost");
const Comments = require("./routes/GetComments");
const AddComments = require("./routes/AddComment");
const UpdateProfile = require("./routes/UpdateProfile");
const GetUser = require("./routes/GetProfile");

//Using the imported routes
route.use("/register", registerRoute);
route.use("/createpost", postsRoute);
route.use("/login", loginRoute);
route.use("/checktoken", checkToken);
route.use("/allposts", allPosts);
route.use("/profile", Profile);
route.use("/clubposts", clubPosts);
route.use("/createclub", createClub);
route.use("/joinclub", joinClub);
route.use("/clubdetails", clubDetails);
route.use("/increaselike", IncreaseLike);
route.use("/searchpost", SearchPost);
route.use("/findpost", FindPost);
route.use("/getcomments", Comments);
route.use("/addcomment", AddComments);
route.use("/updateprofile", UpdateProfile);
route.use("/getuser", GetUser);


module.exports = route;
