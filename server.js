/*
 * Here is where we import all of our dependancies. The first three lines are
 * importing node modules that we installed with npm. The fourth line is
 * including the JSON object representing our posts that we stored in post.json.
 *
 * Express acts as our webserver. It helps us render HTML to the user.
 * Express-handlebars is our templating engine. We don't want static HTML, but
 * rather we want to render handlebar-markup into HTML. This lets us pass
 * variables have true control flow in our views.
 * Ellipzise is a small helper library for cutting text off early and adding an
 * ellipsis.
 */
var express = require('express');
var exphbs = require('express-handlebars');
var ellipsize = require('ellipsize');
var posts = require('./posts.json');

/*
 * Create an instance of our express webserver, and set the port.
 */
var app = express();
app.set('port', (process.env.PORT || 8080));

/*
 * Tell express which view engine we're using, and tell handlebars where the
 * main layout (the part that is rendered for every page) is.
 */
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*
 * Bind our static assets to public endpoints.
 */
app.use('/assets',  express.static(__dirname + '/assets'));
app.use('/vendor',  express.static(__dirname + '/bower_components'));

/*
 * When a user makes a GET request to the root of our web app render the home
 * view, passing in the title, the posts, and a helper function called
 * ellipsize.
 */
app.get('/', function(req, res) {
  res.render('home', {
    title: 'The Official Blog of Rich Sanchez',
    posts: posts,
    helpers: {
      ellipsize: wrappedEllipsize
    }
  });
});

/*
 * When a user makes a GET request to any endpoint following the syntax
 * "/<anything>" pull out the part after the "/" (:postURL). Find the correct
 * post based on that :postURL, and then render the post view passing in the
 * correct post. If no post is found render the 404 page.
 */
app.get('/:postURL', function(req, res) {
  var postURL = req.params.postURL;
  var post = posts[postURL];

  if (post) {
    res.render('post', {
      post: post
    });
  } else {
    res.render('404');
  }
});

/*
 * Start the server!
 */
var server = app.listen(app.get('port'), function () {
  console.log('the server is listening on port %s', app.get('port'));
});

/*
 * A little helper function so that we don't have to repeat "240" several times
 * in our view.
 */
function wrappedEllipsize(body) {
  var maxChars = 240;
  return ellipsize(body, maxChars);
}
