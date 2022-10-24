const { Schema, model } = require('mongoose');

// Schema to create disease model
const diseaseSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    ageGroup: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    prevention: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
  }
);

const Disease = model('Disease', diseaseSchema);

module.exports = Disease;