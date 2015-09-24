var Post = require('../models/Post');

exports.getPost = function(req, res) {
  var postTitle = req.params.postTitle;

  res.render('post', {
    title: postTitle
  })
};
