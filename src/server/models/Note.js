const { Schema, Types } = require('mongoose');

const noteSchema = new Schema(
  {
    date: {
      type: String,
      required: true
    },
    notes: {
        type: String,
        required: true
    }
  }
);

module.exports = noteSchema;