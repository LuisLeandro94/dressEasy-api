const mongoose = require('mongoose');
const TypeEnum = require('../enums/type');

const dataSchema = new mongoose.Schema(
  {
    brand: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: TypeEnum,
    },
    model: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', dataSchema);
