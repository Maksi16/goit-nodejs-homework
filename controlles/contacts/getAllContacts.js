const { Contact } = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const contactsAll = await Contact.find({ owner }, { skip, limit }).populate(
      "owner",
      "email"
    );
    if (favorite) {
      contactsList = await Contact.find(
        { owner, favorite },
        { skip, limit }
      ).populate("owner", "email");
    }
    res.status(200).json(contactsAll);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
