const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

mongoose
  .connect(db, { useNewURLParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

const users = require("./routes/api/users");
const products = require("./routes/api/products");

app.use("/api/users", users)
app.use("/api/products", products)

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());