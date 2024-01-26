const ItemsModel = require("./items.model")


exports.getAllItems = async (req, res, next) => {
  try {
    const result = await ItemsModel.find({});
    res.send({ result });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.AddNewItem = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
  } catch (error) {

  }
}