const getAll = require("./getAllContacts");
const getById = require("./getByIdContacts");
const add = require("./addContacts");
const updateById = require("./updateContacts");
const deleteById = require("./deleteContacts");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateStatusContact,
};
