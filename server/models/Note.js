const { Schema, Types } = require('mongoose');
//schema for note within patient model
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