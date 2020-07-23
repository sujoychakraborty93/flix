const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    age: Number,
    firstname: { type: String, required: true },
    middlename: String,
    lastname: String,
    emailid: String,
    sex: String,
    updated: { type: Date, default: Date.now },
  },
  {
    collection: "user",
  }
);
const usersSchemaModel = mongoose.model("Users", usersSchema);
module.exports = usersSchemaModel;
