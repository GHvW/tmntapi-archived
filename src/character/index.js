const express = require("express");
const { BaseDao, findAll, findById } = require("../base/dao");
const Character = require("./model");
const { getAllHandler, getByIdHandler } = require("../base/controller");

const router = express.Router();

const bDao = new BaseDao(Character);
const dbFindAll = findAll(bDao.model);
const dbFindById = findById(bDao.model);

const getAllCharacters = getAllHandler(dbFindAll);
const getCharacterById = getByIdHandler(dbFindById);

router.get("/", getAllCharacters);

router.get("/:id", getCharacterById);

module.exports = router;
