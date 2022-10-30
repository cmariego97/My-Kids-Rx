const mongoose = require('mongoose');
const dotenv = require("dotenv")
//enable access to environmental variables
dotenv.config()
//connect to mongodb
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/schools-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;