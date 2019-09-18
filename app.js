const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewURLParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const users = require("./routes/api/users");
const products = require("./routes/api/products");

app.use("/api/users", users)
app.use("/api/products", products)

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());