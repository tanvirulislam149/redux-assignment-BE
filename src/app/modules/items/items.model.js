const { default: mongoose } = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  capacity: {
    type: String
  },
  compatibility: {
    type: String,
    required: true,
    enum: {
      values: ['Windows', 'Mac', 'Linux'],
      message: '{VALUE} is not supported'
    }
  },
  interface: { type: String },
  condition: {
    type: String,
    required: true,
    enum: {
      values: ['New', 'Used'],
      message: '{VALUE} is not supported'
    }
  },
  color: {
    type: String
  },
  formFactor: {
    type: String
  }
})

const ItemsModel = mongoose.model("items", itemSchema);

module.exports = ItemsModel