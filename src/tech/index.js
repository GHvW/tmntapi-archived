
const express = require("express");
const { BaseDao, findAll, findById } = require("../base/dao");
const Tech = require("./model");
const { getAllHandler, getByIdHandler } = require("../base/controller");

const router = express.Router();

const getAllTech = getAllHandler(findAll(Tech));
const getTechById = getByIdHandler(findById(Tech));

router.get("/", getAllTech);

router.get("/:id", getTechById);

module.exports = router;
