const express = require("express");

const ctrl = require("../../controlles/contacts");
const router = express.Router();

const { validationBody } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validationBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validationBody(schemas.addSchema), ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validationBody(schemas.udateSchema),
  ctrl.updateStatusContact
);

module.exports = router;
