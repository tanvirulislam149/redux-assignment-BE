const express = require("express");
const router = express.Router();

const itemsController = require("./items.controller");
const verifyJWT = require("../../../utils/verifyJWT");

router.get("/getAllItems", verifyJWT, itemsController.getAllItems);

module.exports = router;