const contacts = require("../models/contacts");
const { HttpError } = require("../helpers");

const getAll = async (req, res, next) => {
  try {
    const contactsAll = await contacts.listContacts();
    res.status(200).json(contactsAll);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contacts.getContactById(contactId);
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const contact = await contacts.addContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};
const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contacts.removeContact(contactId, req.body);
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contacts.updateContact(contactId);
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
