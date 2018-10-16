const express = require("express");
const { BaseDao, findAll, findById } = require("../dao");
const Character = require("./model");
const { getAll, getById } = require("./controller");

const router = express.Router();

const bDao = new BaseDao(Character);
const dbFindAll = findAll(bDao.model);
const dbFindById = findById(bDao.model);

const getAllCharacters = getAll(dbFindAll);
const getCharacterById = getById(dbFindById);

router.get("/", getAllCharacters);

router.get("/:id", getCharacterById);

module.exports = router;
