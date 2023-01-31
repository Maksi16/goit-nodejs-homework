const express = require("express");

const { auth: ctrl } = require("../../controlles");
const { validationBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validationBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verify);

router.post("/verify", ctrl.resendVerify);

router.post("/login", validationBody(schemas.registerSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validationBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
