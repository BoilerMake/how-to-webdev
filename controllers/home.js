/*
 * Here we import ellipzise is a small helper library for cutting text off
 * early and adding an ellipsis.
 *
 * We also import our Post model to talk to MongoDB. We do this so we can find
 * all of our posts in the database.
 */
var ellipsize = require('ellipsize');
var Post = require('../models/Post');


/*
 * This is the function that gets called when a user makes a GET request to the
 * root of our web app. First we make a call to MongoDB, where we query for all
 * posts. Then if there are no errors we render the home view, passing in the
 * title, the posts, and a helper function called ellipsize. If there is an
 * error, like our database being down, then we send a 500 status code to the
 * user, which tells them that there is an "Internal Server Error."
 */
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

/*
 * A little helper function so that we don't have to repeat "240" several times
 * in our view.
 */
function wrappedEllipsize(body) {
  var maxChars = 240;
  return ellipsize(body, maxChars);
}
