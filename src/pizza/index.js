
const express = require("express");
const { BaseDao, findAll, findById } = require("../base/dao");
const Pizza = require("./model");
const { getAllHandler, getByIdHandler } = require("../base/controller");

const router = express.Router();

const getAllPizzas = getAllHandler(findAll(Pizza));
const getPizzaById = getByIdHandler(findById(Pizza));

router.get("/", getAllPizzas);

router.get("/:id", getPizzaById);

module.exports = router;
