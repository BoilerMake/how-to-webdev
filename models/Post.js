var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  url: String,
  created_at: Date
});

module.exports = mongoose.model('Post', postSchema);
