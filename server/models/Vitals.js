const { Schema, Types } = require('mongoose');
//schema for vitals within patient model
const vitalsSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    systolicBP: {
        type: Number,
        required: true
    },
    diastolicBP: {
        type: Number,
        required: true
    },
    hr: {
        type: Number,
        required: true
    },
    o2: {
        type: Number,
        required: true
    }
  }
);

module.exports = vitalsSchema;