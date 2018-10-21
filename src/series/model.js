
const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  installments: [String]
});

const Series = mongoose.model("Series", seriesSchema, "series");
module.exports = Series;
