const { Schema, model } = require('mongoose');

// Schema to create fact model
const factSchema = new Schema(
  {
    fact: {
      type: String,
      required: true
    }
  }
);

const Fact = model('Fact', factSchema);

module.exports = Fact;