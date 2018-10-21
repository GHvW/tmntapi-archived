const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  biology: String,
  gear: { type: [String], default: "None" },
  firstAppearance: String
});

//"character" needs to match the collection name
const Character = mongoose.model("Character", characterSchema, "character");
module.exports = Character;
