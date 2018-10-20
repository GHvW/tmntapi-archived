const express = require("express");


exports.getAllHandler = (dbFn) => {
  return (req, res) => {
    dbFn()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving data ${err}`);
      });
    }
}

 exports.getByIdHandler = (dbFn) => {
  return (req, res) => {
    dbFn(req.params.id)
      .then(item => {
        res.status(200).send(item);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving item with id ${req.params.id}: ${err}`);
      });
  }
}
