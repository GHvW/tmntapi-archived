const mongoose = require("mongoose");

const techSchema = mongoose.Schema({
  name: String,
  episode: String
});

const Tech = mongoose.model("Tech", techSchema, "tech");
module.exports = Tech;
