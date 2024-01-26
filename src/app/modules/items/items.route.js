const express = require("express");
const router = express.Router();

const itemsController = require("./items.controller");

router.get("/getAllItems", itemsController.getAllItems);
router.get("/addItem", itemsController.AddNewItem);

module.exports = router;