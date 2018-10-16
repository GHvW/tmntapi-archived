const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  biology: String,
  weapon: String,
  description: String
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
