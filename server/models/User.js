const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
        type: String,
        required: true
      },
      provider: {
        type: String,
        required: true
      },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true
      }
  }
);

const User = model('User', userSchema);

module.exports = User;