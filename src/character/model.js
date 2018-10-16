const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: String,
  biology: String,
  weapon: String,
  description: String
});

//"character" needs to match the collection name
const Character = mongoose.model("Character", characterSchema, "character");
module.exports = Character;
