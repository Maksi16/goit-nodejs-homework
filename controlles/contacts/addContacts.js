const { Contact } = require("../../models/contacts");

const add = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const contact = await Contact.create({ ...req.body, owner });
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
