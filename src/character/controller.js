const express = require("express");

// 
// exports.getAllHandler = (dbFn) => {
//   return (req, res) => {
//     dbFn()
//       .then(characters => {
//         res.status(200).send(characters);
//       })
//       .catch(err => {
//         res.status(500).send(`Error retrieving characters ${err}`);
//       });
//     }
// }
//
//  exports.getByIdHandler = (dbFn) => {
//   return (req, res) => {
//     dbFn(req.params.id)
//       .then(character => {
//         res.status(200).send(character);
//       })
//       .catch(err => {
//         res.status(500).send(`Error retrieving character with id ${req.params.id}`);
//       });
//   }
// }
