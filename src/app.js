
const express = require("express");
const mongoose = require("mongoose");
const character = require("./character/index");
const pizza = require("./pizza/index");
const tech = require("./tech/index");
const vehicle = require("./vehicle/index");

const app = express();
const router = express.Router();

const db = "mongodb://localhost:27017/tmnt";
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connection to Mongo DB successful at ${db}`))
  .catch(err => console.log(`Error connecting to Mongo DB: ${err}`));

router.use("/character", character);

router.use("/pizza", pizza);

router.use("/tech", tech);

router.use("/vehicle", vehicle);

app.use("/api", router);

module.exports = app;
