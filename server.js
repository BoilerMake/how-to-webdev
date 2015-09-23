var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.set('port', (process.env.PORT || 8080));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/assets',  express.static(__dirname + '/assets'));
app.use('/vendor',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'The Official Blog of Rich Sanchez'
  });
});

app.get('/:postTitle', function(req, res) {
  var postTitle = req.params.postTitle;

  res.render('post', {
    title: postTitle
  })
});

var server = app.listen(app.get('port'), function () {
  console.log('the server is listening on port %s', app.get('port'));
});
