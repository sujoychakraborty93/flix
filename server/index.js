const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const logger = require("./public/logger");
const movieRoute = require("./routes/movieRoute");
const userRoute = require("./routes/userRoute");
const userProfileRoute = require("./routes/userProfileRoute");
require("dotenv/config");

if (process.env.NODE_ENV === "PROD") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb", extended: true })); // for json data in body
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // for form data in body
app.use(bodyParser.text());
app.use(cookieParser());
app.use(logger);

// connect to mongodb using mongoose
const url = process.env.MONGOOSE_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("conntected to db");
});

// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome to flix",
//   });
// });
app.use("/api/movies", movieRoute);
app.use("/api/users", userRoute);
app.use("/api/userprofiles", userProfileRoute);

if (process.env.NODE_ENV === "PROD") {
  app.get("/*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}

port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening to server on port ${port}`);
});
