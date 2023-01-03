const express = require("express");

const ctrl = require("../../controlles/contacts");
const router = express.Router();

const { validationBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validationBody(schemas.contactSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put(
  "/:contactId",
  validationBody(schemas.contactSchema),
  ctrl.updateById
);

module.exports = router;
