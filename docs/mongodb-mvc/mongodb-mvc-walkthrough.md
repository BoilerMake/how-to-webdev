MongoDB / MVC Walkthrough
=========================

In our final walkthrough we're going to add a real database to our web app as
well as restructure our application to utilize MVC.

## Getting Started

The first think we need to do is create directories for both our models (there's
actually only one) and our controllers.

```bash
$ mkdir models controllers
```

Now we can go ahead and create the model for our posts and the controllers for
our homepage and posts.

```bash
$ touch models/Post.js controllers/post.js controllers/home.js
```

Next we want to install all of our necessary Node.js dependancies. We need to
install `dotenv` (to load ENV variables) and `mongoose` (to interface with
MongoDB).

```bash
$ npm install dotenv mongoose --save
```

> Note: you might have to prepend sudo if running on Koding.

Finally we need to create a `.env` file where we can store our *secret* MongoDB
URL. We're actually going to create a `env.sample` file, and the copy it to
`.env` (since we're still running in development).

```bash
$ echo 'MONGODB="mongodb://0.0.0.0:27017/boilercamp-app"' > env.sample
$ cp env.sample .env
```

## Installing MongoDB

If you're on Koding follow [this tutorial](http://learn.koding.com/guides/install-mongodb/).

Make sure to configure for limited storage.

## Reimplement with MVC and Add Model

Let's make a model to represent the blog posts in the database! Add this to
`models/Post.js`.

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  url: String,
  created_at: Date
});

module.exports = mongoose.model('Post', postSchema);
```

We can move a lot of the logic out of our `server.js` file and into our
controllers.

Here's `controllers/home.js`:

```js
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
```

And our `controller/post.js`:

```js
var Post = require('../models/Post');


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
```

Here's our new `server.js`:

```js
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
```

## Seeding the Database

We need to get our posts into MongoDB.

Just download this file:

```bash
$ wget https://raw.githubusercontent.com/BoilerCamp/how-to-webdev/75c6a7542da0138fc1ea7a63b6f0a95d84a48115/seed.js
```

And run it:

```bash
$ node seed.js
```

## DONE

You're done with everything!!!!!!!
