const express = require("express");
const router = express.Router();

const SoldItemsController = require("./soldItemsController");
const verifyJWT = require("../../../utils/verifyJWT");

router.post("/postSoldItem", verifyJWT, SoldItemsController.postSoldItem)
router.get("/getSoldItems", verifyJWT, SoldItemsController.getSoldItems)


module.exports = router;