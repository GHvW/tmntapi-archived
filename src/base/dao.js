
class BaseDao {
  constructor(model) {
    this.model = model;
  }
}

const findAll = (model) => {
  return () => {
    return new Promise((resolve, reject) => {
      model.find({}, (err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  }
}

const findById = (model) => {
  return (id) => {
    return new Promise((resolve, reject) => {
      model.findById(id, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve(doc);
      });
    });
  }
}

module.exports = { BaseDao, findAll, findById };
