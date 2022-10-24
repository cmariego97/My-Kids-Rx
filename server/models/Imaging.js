const { Schema } = require('mongoose');
// const moment = require('moment');

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