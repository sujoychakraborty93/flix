const express = require("express");
const router = express.Router();
const userProfileModel = require("../model/UserProfileModel");
const movieModel = require("../model/MovieModel");
require("dotenv/config");

// get all user profiles:- /api/userprofiles/
router.get("/", (req, res) => {
  userProfileModel.find({}, (err, data) => {
    res.send(data);
  });
});

// add a new user:- /api/userprofiles/add
router.post("/add", (req, res) => {
  userProfileModel.create(req.body, (err, data) => {
    res.send(data);
  });
});

// get all user profiles by user id:- /api/userprofiles/userid
router.get("/userid/:userid", (req, res) => {
  userProfileModel.find({ user_id: req.params.userid }, (err, data) => {
    res.send(data);
  });
});

// get all user profiles by profile name:- /api/userprofiles/profilename userprofiles
router.get("/profilename/:profilename", (req, res) => {
  console.log(req.params.profilename);
  userProfileModel.findOne(
    { profile_name: req.params.profilename },
    (err, data) => {
      res.send(data);
    }
  );
});

// get userprofile by id:- /api/userprofiles/id/:id
router.get("/id/:id", (req, res) => {
  userProfileModel.findOne({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

// delete user by id:- /api/userprofiles/delete/id/:id
router.delete("/delete/id/:id", (req, res) => {
  userProfileModel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

// update user by id:- /api/userprofiles/update/id/:id
router.post("/update/id/:id", (req, res) => {
  userProfileModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
