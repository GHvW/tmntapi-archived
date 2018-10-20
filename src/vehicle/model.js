const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  name: String,
  episode: String
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema, "vehicle");
module.exports = Vehicle;
