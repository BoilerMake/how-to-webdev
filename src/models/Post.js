/*
 * Here we include mongoose, and then we get the Schema class out of mongoose.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/*
 * Here we define what our posts are going to look like in the database. Each
 * post will have 4 attributes: title, body, url, and created_at. All of these
 * are strings except for created_at, which is a date.
 */
var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  url: String,
  created_at: Date
});

/*
 * Here we export our Post schema so that we can use it in our controllers.
 */
module.exports = mongoose.model('Post', postSchema);
