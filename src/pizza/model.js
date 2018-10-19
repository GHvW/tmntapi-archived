const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  ingredients: [String],
  episode: String
});

const Pizza = mongoose.model("Pizza", pizzaSchema, "pizza");
module.exports = Pizza;
