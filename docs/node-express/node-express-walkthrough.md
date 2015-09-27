Node.js / Express.js Walkthrough
================================

Let's turn our static HTML, CSS, and client-side JavaScript website into a real
web app with Node.js and Express.js!

If you didn't finish the last section run:

```bash
$ git checkout -f completed-client-side-js
```

## Getting Started

Instead of using `http-server` to serve our static assets we're going to create
our own server to serve our content to our users. Let's create a `server.js`
file where the bulk of our server logic will live.

```bash
$ touch server.js
```

We're going to need to install Express.js and some other Node modules. Run these
commands to get them!

```bash
$ npm init
$ npm install express ellipsize express-handlebars --save
```

## Creating an Express.js Server

Let's go ahead and fill out our entire `server.js` file. The code [here](https://github.com/BoilerCamp/how-to-webdev/blob/85bd3ebbe45c22ede9ecaedf8b43ce23be007902/server.js) is very well commented and explains
everything.

```js
var express = require('express');
var exphbs = require('express-handlebars');
var ellipsize = require('ellipsize');
var posts = require('./posts.json');


var app = express();
app.set('port', (process.env.PORT || 8080));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/assets',  express.static(__dirname + '/assets'));
app.use('/vendor',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'The Official Blog of Rich Sanchez',
    posts: posts,
    helpers: {
      ellipsize: wrappedEllipsize
    }
  });
});

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

var server = app.listen(app.get('port'), function () {
  console.log('the server is listening on port %s', app.get('port'));
});

function wrappedEllipsize(body) {
  var maxChars = 240;
  return ellipsize(body, maxChars);
}
```

## "Storing" Posts

We're not quite ready to add a database to our backend, but we can "store" all
of our posts in a `posts.json` file.

```json
{
  "cross-dimensional-televisions": {
    "title": "Cross-Dimensional Televisions",
    "body": "<p>I find television to be excruciatingly boring. You see the same stuff over and over again. That's why I decided to build a television that has access to all channels across all dimensions. Such a television literally Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><h2>Big Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><h3>Sub Heading</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p>",
    "url": "cross-dimensional-televisions"
  },
  "concentrated-dark-matter": {
    "title": "Concentrated Dark Matter",
    "body": "<p>Concentrated Dark Matter was a fuel that I invented to travel faster than anyone else in the universe. The Zigerions wanted the secret to making this fuel badly, and constantly tried to trick my grandson and I Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><h2>Big Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><h3>Sub Heading</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p>",
    "url": "concentrated-dark-matter"
  },
  "mega-tree-seeds": {
    "title": "Mega Tree Seeds",
    "body": "<p>Dimension 35-C has the perfect conditions for growing Mega Trees. The seeds can be used to briefly make someone incredibly intelligent. Unfortunately in order to get past intergalactic customs, Morty had to hide Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><h2>Big Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><h3>Sub Heading</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.</p>",
    "url": "mega-tree-seeds"
  }
}
```

> These are Rick's posts. You can obviously use your own.

## Converting HTML to Handlebars

All of our content is currently static HTML files. We can take advantage of the
power of *templating* with Handlebars to change that.

First make a folder called views with a subfolder called layouts:

```bash
$ mkdir -p views/layouts
```

Then rename your `index.html` file and move it to `views/layouts/main.handlebars`:

```bash
$ mv index.html views/layouts/main.handlebars
```

Make another copy of it in `views` with the name `home.handlebars`.

```bash
$ cp views/layouts/main.handlebars views/home.handlebars
```

### Making a main.handlebars

Remove everything inside the `<body>` tag and replace it with `{{{ body }}}`.
Do the same for the `<title>`.

It should look like this:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <title>{{ title }}</title>

    <link rel='stylesheet' href='/vendor/bootstrap/dist/css/bootstrap.min.css'>
    <link rel='stylesheet' href='/vendor/font-awesome/css/font-awesome.min.css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:700,400' rel='stylesheet' type='text/css'>
    <link rel='stylesheet' href='/assets/css/style.css'>
  </head>
  <body>
    {{{ body }}}

    <script src='/vendor/jquery/dist/jquery.min.js'></script>
    <script src='/vendor/bootstrap/dist/js/bootstrap.min.js'></script>
    <script src='/assets/js/main.js'></script>
  </body>
</html>
```

### Making a home.handlebars

Now in `views/home.handlebars` remove the opposite (everything but the body).

It should look like this:

```html
<header class='main-header'>
  <div class='black'></div>

  <nav class='navbar navbar-default'>
    <div class='container'>
      <div class='navbar-header'>
        <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
          <span class='sr-only'>Toggle navigation</span>
          <span class='icon-bar'></span>
          <span class='icon-bar'></span>
          <span class='icon-bar'></span>
        </button>
        <a class='navbar-brand' href='#'>
          <i class='fa fa-flask'></i>
          Rick Sanchez
        </a>
      </div>

      <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        <ul class='nav navbar-nav navbar-right'>
          <li><a href='/'>Home</a></li>
          <li><a id='nav-about' href='#'>About</a></li>
          {{#if posts}}
            <li><a id='nav-writing' href='#'>Writing</a></li>
          {{/if}}
          <li><a id='nav-contact' href='#'>Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class='header-text'>
    <h1 class='header-title'>Hi, I'm Rick Sanchez.</h1>
    <h2 class='header-subtitle'>Scientist. Time Traveler. Alcoholic.</h2>
  </div>
</header>

<main>
  <section id='about-section'>
    <div class='container'>
      <h2 class='section-title'>About Me</h2>
      <div class='row about-wrapper'>
        <div class='col-xs-12 col-sm-3'>
          <img src='/assets/img/rick.png' alt='rick-headshot' class='img-circle headshot' />
        </div>
        <div class='col-xs-12 col-sm-9'>
          <p class='section-content'>
            Hey there, I'm Rick Sanchez of Earth dimension C-137. Scientist,
            inventor, engineer, weapons manufacturer, grandfather, part time
            alcoholic and anything else you are willing to pay for.
          </p>
          <p class='section-content'>
            I do most of my work in the garage.
          </p>
        </div>
      </div>
    </div>
  </section>

  {{#if posts}}
  <section id='writing-section'>
    <div class='container'>
      <h2 class='section-title'>My Writing</h2>
      <div class='section-content'>
        {{#each posts}}
          <div class='post-preview'>
            <h3 class='post-preview-title'>{{ title }}</h3>
            {{{ ellipsize body }}}
            <br />
            <a href='/{{ url }}'>Read more &raquo;</a>
          </div>
        {{/each}}
      </div>
    </div>
  </section>
  {{/if}}

  <section id='contact-section'>
    <div class='container'>
      <h2 class='section-title'>Contact Me</h2>
        <form>
          <div class='row'>
            <div class='col-xs-12 col-sm-6'>
              <input type='text' label='Name' class='form-control contact-input' name='first' placeholder='First Name *'>
            </div>
            <div class='col-xs-12 col-sm-6'>
              <input type='text' label='Name' class='form-control contact-input' name='last' placeholder='Last Name *'>
            </div>
          </div>
          <input type='text' class='form-control contact-input' name='subject' placeholder='Subject *'>
          <textarea class='form-control contact-input message' name='message' placeholder='Your Message *'></textarea>
          <input class='btn btn-default contact-submit' type='submit' value='Submit'>
        </form>
      </div>
    </div>
  </section>
</main>

<footer>
  Made with <i class='fa fa-heart'></i> at <a href='http://boilercamp.org/'>BoilerCamp 2015</a>.
</footer>
```

> Note that we also added some curly braces else where too! :D

### Making a post.handlebars

Go ahead and rename and move one of your blog posts to `views/post.handlebars`.

```bash
$ mv cross-dimensional-televisions.html views/post.handlebars
```

Remove everything but the `<body>`, but then also replace some of the body like
so:

```html
<nav class='blog-nav'>
  <a href='/'>
    <i class='fa fa-flask'></i>
    Rick Sanchez
  </a>
</nav>

<article class='blog-post'>
  <a href='/{{ post.url }}'><h1 class='blog-title'>{{ post.title }}</h1></a>

  <div class='blog-body'>
    {{{ post.body }}}
  </div>
</article>
```

## Adding a 404

With our static site we didn't handle what would happen if a user tried going to
a page that doesn't exist. With our new server we do, but we still need to add
the view, css, and img for it.

### Add the view

Create a file called `views/404.handlebars`:

```html
<div class='container wrapper-404'>
  <h1 class='title-404'>404: The timeline you requested does not exist.</h1>
  <div class='img-404'></div>
</div>
```

Add the necessary CSS to `assets/css/style.css`:

```css
.wrapper-404 {
  height: 100vh;
}

.title-404 {
  position: absolute;
}

.img-404 {
  width: 100%;
  height: 100%;

  background-image: url(/assets/img/404.png);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;
}
```

And finally, download a funny image for your 404 page, like so:

```bash
$ wget https://raw.githubusercontent.com/BoilerCamp/how-to-webdev/85bd3ebbe45c22ede9ecaedf8b43ce23be007902/assets/img/404.png
```

## Done!!

Wohoo!
