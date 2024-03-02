const mongoose = require('mongoose');

// MongoDB Connection
const mongoDbConnection=mongoose.connect('mongodb://0.0.0.0:27017/bookstore', {

//0.0.0.0 IS used instead of localhost
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoDbConnection;