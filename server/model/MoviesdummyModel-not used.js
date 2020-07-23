const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  genre: Array,
  title: { type: String, required: true },
  year: Number,
  rating: Number,
  director: String,
  producer: String,
  language: String,
  budget: Number,
  revenue: Number,
  updated: { type: Date, default: Date.now },
});

const moviesSchemaModel = mongoose.model("Movies", movieSchema, "movies_dummy");
module.exports = moviesSchemaModel;
