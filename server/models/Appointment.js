const { Schema } = require('mongoose');

const apptSchema = new Schema(
  {
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    reason: {
      type: String,
      required: true,
    }
  }
);

module.exports = apptSchema;