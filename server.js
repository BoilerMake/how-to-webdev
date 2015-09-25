/*
 * Here is where we import all of our dependancies. The first line imports
 * dotenv and the loads all of the environment varibles specified in there.
 * The next three lines are importing node modules that we installed with npm.
 *
 * Express acts as our webserver. It helps us render HTML to the user.
 * Express-handlebars is our templating engine. We don't want static HTML, but
 * rather we want to render handlebar-markup into HTML. This lets us pass
 * variables have true control flow in our views.
 * Mongoose is how we interface with our database, MongoDB.
 */
require('dotenv').load();
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');


/*
 * Connect to MongoDB with the database specified in our .env file.
 */
mongoose.connect(process.env.MONGODB);

/*
 * Create an instance of our express webserver, and set the port.
 */
var app = express();
app.set('port', (process.env.PORT || 8080));

/*
 * Tell express which view engine we're using, and tell handlebars where the
 * main layout (the part that is rendered for every page) is.
 */
app.set('views', 'src/views')
app.engine('handlebars', exphbs({
  layoutsDir: 'src/views/layouts/',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

/*
 * Bind our static assets to public endpoints.
 */
app.use('/assets',  express.static(__dirname + '/src/assets'));
app.use('/vendor',  express.static(__dirname + '/bower_components'));

/*
 * Import our home and post controllers.
 */
var homeController = require('./src/controllers/home');
var postController = require('./src/controllers/post');

/*
 * When a user makes a GET request to the root of our web app call the getHome
 * function in our homeController. And when a user makes a GET request to any
 * endpoint following the syntax "/<anything>" pull out the part after the "/"
 * (:postURL) and call the function getPost in the postController.
 */
app.get('/', homeController.getHome);
app.get('/:postURL', postController.getPost);

/*
 * Start the server!
 */
var server = app.listen(app.get('port'), function () {
  console.log('the server is listening on port %s', app.get('port'));
});
