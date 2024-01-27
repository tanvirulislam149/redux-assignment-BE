const ItemsModel = require("../items/items.model");
const SoldItemsModel = require("./soldItems.model");

exports.postSoldItem = async (req, res, next) => {
  try {
    const find = await ItemsModel.findOne({ _id: req.body.id }).exec();
    const result = await SoldItemsModel.create(req.body);
    if ((find.quantity - req.body.quantity) > 0) {
      const update = await ItemsModel.findOneAndUpdate({ _id: req.body.id }, {
        $set: { quantity: find.quantity - req.body.quantity }
      });
    } else {
      const deleteItem = await ItemsModel.deleteOne({ _id: req.body.id });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
} 