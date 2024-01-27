const express = require("express");
const router = express.Router();

const SoldItemsController = require("./soldItemsController")

router.post("/postSoldItem", SoldItemsController.postSoldItem)
router.get("/getSoldItems", SoldItemsController.getSoldItems)


module.exports = router;