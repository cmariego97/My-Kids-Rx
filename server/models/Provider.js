const { Schema, model } = require('mongoose');

// Schema to create Provider model
const providerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
        type: String,
        required: true
      },
    suffix: {
        type: String,
        required: true
      },
  }
);

const Provider = model('Provider', providerSchema);

module.exports = Provider;