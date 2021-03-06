const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const admin = require("./routes/api3/users");

const routes = require("./routes");

//initilizing express
const app = express();

//Serving static files
// app.use(express.static("src"));

//Body parser middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Defining port
const PORT = process.env.PORT || 3050;

//Database configuration
const db = require("./config/keys").mongoURI;

//Connection to mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users2",{ useNewUrlParser: true });

mongoose
  .connect(db)
  .then(() => console.log("Connected to mongo db"))
  .catch(err => console.log(err));

//passport middle ware - initialize
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Use routes
app.use("/api/users/", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/admin", admin);
// Add routes, both API and view
app.use(routes);

//Test:
app.get("/", (req, res) => res.send("Hello !! welcome"));

//Listining to the port
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
