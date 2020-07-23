const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  imdb_id: Number,
  poster_path: String,
  wiki_link: String,
  original_title: String,
  is_adult: Number,
  year_of_release: Number,
  runtime: Number,
  imdb_rating: Number,
  imdb_votes: Number,
  story: String,
  summary: String,
  tagline: String,
  actors: Array,
  wins_nominations: String,
  release_date: Date,
  genres: Array,
  updated: { type: Date, default: Date.now },
});

const moviesSchemaModel = mongoose.model("Movies", movieSchema, "movies");
module.exports = moviesSchemaModel;
