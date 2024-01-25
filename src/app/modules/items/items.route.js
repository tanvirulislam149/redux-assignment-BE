const express = require("express");
const router = express.Router();

const itemsController = require("./items.controller");

router.get("/getAllItems", itemsController.getAllItems);

module.exports = router;