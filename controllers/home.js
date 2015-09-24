var ellipsize = require('ellipsize');
var sendgrid  = require('sendgrid')(process.env.SENDGRID_API_KEY);
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

exports.postContact = function(req, res) {
  console.log(req.body);
  res.redirect('/?success');
};

function wrappedEllipsize(body) {
  var maxChars = 240;
  return ellipsize(body, maxChars);
}
