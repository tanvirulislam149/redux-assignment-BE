const express = require("express");
const router = express.Router();

const SoldItemsController = require("./soldItemsController")

router.post("/postSoldItem", SoldItemsController.postSoldItem)


module.exports = router;