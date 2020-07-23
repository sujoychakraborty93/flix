const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  profile_name: { type: String, required: true },
  movies_watched: Array,
  movies_suggested: Array,
  movies_predicted: Array,
  genre_liked: Array,
  user_id: Object,
  updated: { type: Date, default: Date.now },
});

const userProfilesSchemaModel = mongoose.model(
  "UserProfiles",
  userProfileSchema,
  "user_profiles"
);
module.exports = userProfilesSchemaModel;
