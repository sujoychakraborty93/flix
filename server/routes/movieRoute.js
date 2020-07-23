const express = require("express");
const router = express.Router();
const movieModel = require("../model/MovieModel");
require("dotenv/config");

// get all movies:- /api/movies
router.get("/", (req, res) => {
  movieModel.find({}, (err, data) => {
    res.send(data);
  });
});

// add a new movie:- /api/movies/add
router.post("/add", (req, res) => {
  movieModel.create(req.body, (err, data) => {
    res.send(data);
  });
});

// get movie by title:- /api/movies/title/:title
router.get("/title/:title", (req, res) => {
  movieModel.findOne({ title: req.params.title }, (err, data) => {
    res.send(data);
  });
});

// get movie by id:- /api/movies/id/:id
router.get("/id/:id", (req, res) => {
  movieModel.findOne({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

// delete movie by id:- /api/movies/id/:id
router.delete("/delete/id/:id", (req, res) => {
  movieModel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
    res.send(data);
  });
});

// update movies by id:- /api/movies/id/:id
router.post("/update/id/:id", (req, res) => {
  movieModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
});
module.exports = router;
