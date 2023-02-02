const db = require("../../data/db-config");
const getAll = () => {
  // HOKUS POKUS
  return db("cars");
}

const getById = (id) => {
  // HOKUS POKUS
  return db("cars").where({ id }).first();
}

const create = (newCar) => {
  // HOKUS POKUS
  return db("cars")
  .insert(newCar)
  .then(idx => {
    return getById(idx[0]);
  });
}

module.exports = {
  getAll,getById,create
}