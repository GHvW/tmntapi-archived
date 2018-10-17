const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  name: String,
  description: String
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema, "vehicle");
module.exports = Vehicle;
