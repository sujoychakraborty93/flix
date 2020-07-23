const express = require("express");
const router = express.Router();
const usersModel = require("../model/UserModel");
require("dotenv/config");

// get all users:- /api/users/
router.get("/", (req, res) => {
  usersModel.find({}, (err, data) => {
    res.send(data);
  });
});

// add a new user:- /api/users/add
router.post("/add", (req, res) => {
  usersModel.create(req.body, (err, data) => {
    res.send(data);
  });
});

// get user by id:- /api/users/id/:id
router.get("/id/:id", (req, res) => {
  usersModel.findOne({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

// delete user by id:- /api/users/delete/id/:id
router.delete("/delete/id/:id", (req, res) => {
  usersModel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

// update user by id:- /api/users/update/id/:id
router.post("/update/id/:id", (req, res) => {
  usersModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
