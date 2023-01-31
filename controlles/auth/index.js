const register = require("./registerUsers");
const login = require("./loginUsers");
const getCurrent = require("./currentUser");
const logout = require("./logoutUsers");
const updateSubscription = require("./updateSubscriptionUsers");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendVerify,
};
