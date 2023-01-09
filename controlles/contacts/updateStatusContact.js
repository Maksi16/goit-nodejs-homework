const { Contact } = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
