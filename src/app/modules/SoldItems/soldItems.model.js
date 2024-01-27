const { default: mongoose } = require("mongoose");

const soldItemSchema = new mongoose.Schema({
  buyerName: {
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, { timestamps: true })

const SoldItemsModel = mongoose.model("soldItems", soldItemSchema);

module.exports = SoldItemsModel