const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  type: String,
  episode: [String]
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema, "vehicle");
module.exports = Vehicle;
