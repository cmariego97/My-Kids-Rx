const { Schema } = require('mongoose');
//schema for message within patient model
const messageSchema = new Schema(
  {
    //to is referring to the provider that the message is being sent to
    to: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    content: {
      type: String,
      required: true,
    }
  }
);

module.exports = messageSchema;