

const express = require("express");
const { BaseDao, findAll, findById } = require("../base/dao");
const Series = require("./model");
const { getAllHandler, getByIdHandler } = require("../base/controller");

const router = express.Router();

const getAllSeries = getAllHandler(findAll(Series));
const getSeriesById = getByIdHandler(findById(Series));

router.get("/", getAllSeries);

router.get("/:id", getSeriesById);

module.exports = router;
