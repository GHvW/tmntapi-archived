
class BaseDao {
  constructor(model) {
    this.model = model;
  }
}

//mongoose findall
// const findAll = (model) => {
//   return () => {
//     return new Promise((resolve, reject) => {
//       model.find({}, (err, docs) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(docs);
//       });
//     });
//   }
// }
const findAll = (model) => {
  return () => {
    return model.find({}).exec();
  }
}

//mongoose findbyid
// const findById = (model) => {
//   return (id) => {
//     return new Promise((resolve, reject) => {
//       model.findById(id, (err, doc) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(doc);
//       });
//     });
//   }
// }
const findById = (model) => {
  return(id) => {
    return model.findById(id).exec();
  }
}

module.exports = { BaseDao, findAll, findById };
