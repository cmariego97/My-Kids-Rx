const { Schema } = require('mongoose');
//schema for imaging within patient model
const imSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    type: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    }
  }
);

module.exports = imSchema;