const mongoose = require("mongoose");

const techSchema = mongoose.Schema({
  id: { type: number, unique: true },
  name: String,
  function: String,
  episode: [String]
});

const Tech = mongoose.model("Tech", techSchema, "tech");
module.exports = Tech;
