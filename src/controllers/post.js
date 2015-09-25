/*
 * Here we import our Post model to talk to MongoDB. We do this so we can find
 * the request post for the page.
 */
var Post = require('../models/Post');

/*
 * This is the function that gets called when a user makes a GET request to any
 * endpoint following the syntax "/<anything>". We pull out the part after the
 * "/" (:postURL). Find the correct post based on that :postURL by querying
 * MongoDB. If there is an error, like our database being down, then we send a
 * 500 status code to the user, which tells them that there is an "Internal
 * Server Error." Then we see if there was a post cooresponding to the :postURL.
 * If there is we render the post view passing that post into the view. If not
 * we render the 404 page.
 */
exports.getPost = function(req, res) {
  var postURL = req.params.postURL;

  Post.findOne({url: postURL}, function(err, post) {
    if (err) {
      return res.sendStatus(500);
    }

    if (post) {
      res.render('post', {
        post: post
      });
    } else {
      res.render('404');
    }
  });
};
