const { Schema, Types } = require('mongoose');
//schema for vaccine within patient model
const vaxSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    dose: {
        type: Number,
        required: true
    },
    date: {
      type: String,
      required: true,
    },
    site: {
        type: String,
        required: true
    },
    lotNumber: {
        type: Number,
        required: true
    },
    expDate: {
        type: String,
        required: true,
      }
  }
);

module.exports = vaxSchema;