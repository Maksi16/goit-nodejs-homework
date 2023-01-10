const { token } = require("morgan");
const { User } = require("../../models/users");

const logout = async (req, res, next) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });

    res.json({ message: "Logout success" });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
