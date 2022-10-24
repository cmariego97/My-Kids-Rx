const { Schema, Types } = require('mongoose');

const medSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dose: {
        type: Number,
        required: true
    },
    directions: {
        type: String,
        required: true
    }
  }
);

module.exports = medSchema;