const express = require("express");
const { BaseDao, findAll, findById } = require("../base/dao");
const Vehicle = require("./model");
const { getAllHandler, getByIdHandler } = require("../base/controller");

const router = express.Router();

const getAllVehicles = getAllHandler(findAll(Vehicle));
const getVehicleById = getByIdHandler(findById(Vehicle));

router.get("/", getAllVehicles);

router.get("/:id", getVehicleById);

module.exports = router;
