const express = require("express");
const router = express.Router();

const itemsController = require("./items.controller");
const verifyJWT = require("../../../utils/verifyJWT");

router.get("/getAllItems", verifyJWT, itemsController.getAllItems);
router.post("/addItem", verifyJWT, itemsController.AddNewItem);
router.delete("/deleteItem", verifyJWT, itemsController.DeleteItem);
router.delete("/bulkDeleteItem", verifyJWT, itemsController.BulkDeleteItems);
router.put("/updateItem", verifyJWT, itemsController.UpdateItem);
router.get("/filterKey", itemsController.getFilterKey)
router.get("/getOneItem/:_id", verifyJWT, itemsController.getOneItem);

module.exports = router;