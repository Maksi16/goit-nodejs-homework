const express = require("express");

const { contacts: ctrl } = require("../../controlles");
const router = express.Router();

const { validationBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, ctrl.getById);

router.post("/", authenticate, validationBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  validationBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validationBody(schemas.udateSchema),
  ctrl.updateStatusContact
);

module.exports = router;
