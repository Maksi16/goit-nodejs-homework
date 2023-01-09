const register = require("./registerUsers");
const login = require("./loginUsers");
const getCurrent = require("./currentUser");
const logout = require("./logoutUsers");
const updateSubscription = require("./updateSubscriptionUsers");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
};
