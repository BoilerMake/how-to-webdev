var ellipsize = require('ellipsize');
var Post = require('../models/Post');

exports.getHome = function(req, res) {
  Post.find({}, function(err, posts) {
    if (!err) {
      res.render('home', {
        title: 'The Official Blog of Rich Sanchez',
        posts: posts,
        helpers: {
          ellipsize: wrappedEllipsize
        }
      });
    } else {
      res.sendStatus(500);
    }
  });
};

function wrappedEllipsize(body) {
  var maxChars = 240;
  return ellipsize(body, maxChars);
}
