const express = require("express");
const { BaseDao, findAll, findById } = require("../dao");
const Character = require("./model");
const { getAllCharacters, getCharacterById } = require("./controller");

const router = express.Router();

const bDao = new BaseDao(Character);
const dbFindAll = findAll(bDao.model);
const dbFindById = findById(bDao.model);

const getAll = getAllCharacters(dbFindAll);
const getById = getCharacterById(dbFindById);

router.get("/", getAll);

router.get("/:id", getById);

module.exports = router;
