const { Contact } = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const contactsAll = await Contact.find({});
    res.status(200).json(contactsAll);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
