var marked = require('marked');
var Post = require('../models/Post');

exports.getPost = function(req, res) {
  var postTitle = req.params.postTitle;

  Post.findOne({url: postURL}, function(err, post) {
    if (!post) {
      return res.render('404');
    }

    if (!err) {
      res.render('post', {
        post: post,
        helpers: {
          marked: marked
        }
      });
    } else {
      res.sendStatus(500);
    }
  });
};
