require('dotenv').load();
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB);

var app = express();
app.set('port', (process.env.PORT || 8080));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/assets',  express.static(__dirname + '/assets'));
app.use('/vendor',  express.static(__dirname + '/bower_components'));

var homeController = require('./controllers/home');
var postController = require('./controllers/post');

app.get('/', homeController.getHome);
app.get('/:postURL', postController.getPost);

var server = app.listen(app.get('port'), function () {
  console.log('the server is listening on port %s', app.get('port'));
});
