const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  ingredients: [String],
  episode: [String]
});

const Pizza = mongoose.model("Pizza", pizzaSchema, "pizza");
module.exports = Pizza;
