const express = require("express");


exports.getAllCharacters = (dbPromise) => {
  return (req, res) => {
    dbPromise()
      .then(characters => {
        res.status(200).send(characters);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving characters ${err}`);
      });
    }
}

 exports.getCharacterById = (dbPromise) => {
  return (req, res) => {
    dbPromise(req.params.id)
      .then(character => {
        res.status(200).send(character);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving character with id ${req.params.id}`);
      });
  }
}
