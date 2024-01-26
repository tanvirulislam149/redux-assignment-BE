const express = require("express");
const router = express.Router();

const itemsController = require("./items.controller");

router.get("/getAllItems", itemsController.getAllItems);
router.post("/addItem", itemsController.AddNewItem);
router.delete("/deleteItem", itemsController.DeleteItem);

module.exports = router;