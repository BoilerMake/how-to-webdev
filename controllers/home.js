var Post = require('../models/Post');

exports.getHome = function(req, res) {
  Post.find({}, function(err, posts) {
    if (!err) {
      res.render('home', {
        title: 'The Official Blog of Rich Sanchez',
        posts: posts
      });
    } else {
      res.sendStatus(500);
    }
  });
};
