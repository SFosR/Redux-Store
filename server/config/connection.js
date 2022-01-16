const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongosh "mongodb+srv://redux.gppqy.mongodb.net/redux" --username sfoster71', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
