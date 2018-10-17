const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  name: String,
  ingredients: Array,
  episode: String
});

const Pizza = mongoose.model("Pizza", pizzaSchema, "pizza");
module.exports = Pizza;
