HTML / CSS Walkthrough
======================

Okay, now that you have a good introduction to HTML & CSS let's actually write
some code for our website/blog!

## Getting Started

Before we get too carried away make sure you've correctly setup your [environment](../introduction/environment.md)
on Koding.com. This means you should already have a `how-to-webdev` folder in
your Koding terminal. If not, run the following command:

```bash
$ git clone https://github.com/BoilerCamp/how-to-webdev.git
```

Now go ahead and `cd` into `how-to-webdev` with the following command:

```bash
$ cd how-to-webdev
```
Awesome, now you have a copy of the project in its final state. We'd rather
start from the beginning, so run:

```bash
$ git checkout getting-started
```

This should reset your `how-to-webdev` directory so that there's only an
`index.html` file.

## Cleaning up

This HTML file has some stuff in it that we don't really want. Let's go ahead
and replace it with the stuff that we do.

Go ahead and change the content in between the `<title>` tags, so that you can
have an awesome title for your website. Then delete everything in between the
`<body>` tags.

## Install Bootstrap and Font-Awesome with Bower

We can pull a lot of the HTML/CSS functionality that we need for our site from
Bootstrap. Having an awesome collection of icons is pretty nice too, let's go
ahead and create a `bower.json` file and install Bootstrap and Font-Awesome
with `bower`.

```bash
$ bower init
$ bower install bootstrap font-awesome --save
```

Let's include the necessary CSS files that we just downloaded to our
`bower_components` folder. Add the following HTML in between your `<head>` tags.

```html
<link rel='stylesheet' href='/bower_components/bootstrap/dist/css/bootstrap.min.css'>
<link rel='stylesheet' href='/bower_components/font-awesome/css/font-awesome.min.css'>
<link href='https://fonts.googleapis.com/css?family=Montserrat:700,400' rel='stylesheet' type='text/css'>
<link rel='stylesheet' href='/assets/css/style.css'>
```

We also decided to include an awesome font for our website as well as referenced
a future `style.css` file where we'll write all of our custom CSS.

We can go ahead and create that `style.css` file and its necessary folders with:

```bash
$ mkdir -p assets/css/ && touch assets/css/style.css
```

## Adding a header

Let's make a beautiful full page header for our homepage. First create a
directory called `img` inside of `assets` and download a beautiful image to
there for your homepage.

> You can get super beautiful pics from [unsplash.com](https://unsplash.com/).
These pics are very high-res, so make sure to scale them down to like 1500px in
width so they don't hurt our page load time.

Then add the following HTML to `index.html` and CSS to `assets/css/style.css`.

```html
<header class='main-header'>
  <div class='black'></div>

  <div class='header-text'>
    <h1 class='header-title'>Hi, I'm <INSERT YOUR NAME HERE>.</h1>
    <h2 class='header-subtitle'><INSERT YOUR HILARIOUS TAGLINE HERE></h2>
  </div>
</header>
```

```css
.main-header {
  height: 100vh;

  background-image: url(/assets/img/<INSERT YOUR IMG NAME HERE>);
  background-position: center center;
  background-size: cover;
}

.black {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
}

.header-text {
  position: relative;
  top: 40%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);

  color: white;
  text-align: center;
}

.header-title {
  margin-top: 0;

  font-size: 5em;
}

.header-subtitle {
  font-size: 3.4em;
}

@media (max-width: 480px) {
  .header-title {
    font-size: 2em;
  }

  .header-subtitle {
    font-size: 1em;
  }
}
```

## Adding a Navigation Bar

Let's add a super cool navbar at the top of our homepage so people can navigate
our site!

Add the following HTML inside the `<header>` tag above your `header-text` `div`.
And of course add the following CSS to your `assets/css/style.css` file.

```html
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
        <i class='fa <INSERT AN AWESOME ICON THAT DESCRIBES YOU HERE>'></i>
        <INSERT YOUR NAME HERE>
      </a>
    </div>

    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul class='nav navbar-nav navbar-right'>
        <li><a href='/'>Home</a></li>
        <li><a id='nav-about' href='#about-section'>About</a></li>
          <li><a id='nav-writing' href='#writing-section'>Writing</a></li>
        <li><a id='nav-contact' href='#contact-section'>Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

```css
.navbar {
  margin-bottom: 0;
  border: none;

  background-color: transparent;
}

.navbar a {
  color: white !important;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: white;
}
```

Make sure to find the class name of your awesome Font-Awesome icon from [here](https://fortawesome.github.io/Font-Awesome/icons/)!

## Adding a Footer

What does every website need? A footer with a bunch of whitespace and a heart
icon!!!

Add the following HTML below your `<header`. Add the following CSS to your
`assets/css/style.css` file.

```html
<footer>
  Made with <i class='fa fa-heart'></i> at <a href='http://boilercamp.org/'>BoilerCamp 2015</a>.
</footer>

<script src='/bower_components/jquery/dist/jquery.min.js'></script>
<script src='/bower_components/bootstrap/dist/js/bootstrap.min.js'></script>
```

> We forgot to add our JavaScript dependancies for Bootstrap, so let's add those
now!

```css
footer {
  padding: 2em;

  text-align: center;
  font-size: 1.2em;
}

footer .fa-heart {
  color: #f77380;
}
```

## Adding an About Section

Let's let the world how awesome we are.

Add the following HTML in between your `header` and your `footer`. Add the
following CSS to your `assets/css/style.css` file.

You're going to need a picture of your head. Find one and put it inside
`assets/img`.

```html
<main>
  <section id='about-section'>
    <div class='container'>
      <h2 class='section-title'>About Me</h2>
      <div class='row about-wrapper'>
        <div class='col-xs-12 col-sm-3'>
          <img src='/assets/img/<INSERT YOUR HEADSHOT FILE NAME HERE>' alt='<DESCRIBE YOUR HEAD HERE>' class='img-circle headshot' />
        </div>
        <div class='col-xs-12 col-sm-9'>
          <p class='section-content'>
            <INSERT A WHITTY ABOUT STATEMENT THAT WILL GET YOU AN INTERNSHIP HERE>
          </p>
          <p class='section-content'>
            <INSERT A SHORT WHITTY STATEMENT THAT WILL GET YOU AN INTERNSHIP HERE>
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
```

```css
.container {
  max-width: 60em;
}

section {
  padding: 100px 0;

  color: #fff;
}

.section-title {
  margin-top: 0;
  padding-bottom: 50px;

  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}

.section-content {
  font-size: 1.4em;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
}

#about-section {
  min-height: 400px;
  background-color: #339DCA;
}

.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headshot {
  width: 100%;
  border: 5px solid #fff;
}

@media (max-width: 480px) {
  .about-wrapper {
    display: block;
  }

  .about-wrapper div:first-child {
    text-align: center;
  }

  .headshot {
    width: 50%;
    margin-bottom: 25px;
  }
}
```

## Adding a Writing Section

You've got things to tell the world. Let's add a writing section to preview all
of your awesome blog posts!

Add the following HTML after your about section. Add the following CSS to your
`assets/css/style.css` file.

```html
<section id='writing-section'>
  <div class='container'>
    <h2 class='section-title'>My Writing</h2>
    <div class='section-content'>
      <div class='post-preview'>
        <h3 class='post-preview-title'><INSERT POST TITLE #1 HERE></h3>
        <p>
          <INSERT A PREVIEW TO YOUR FIRST POST HERE>
        </p>
        <a href='/<INSERT THE LINK TO YOUR FIRST POST HERE>'>Read more &raquo;</a>
      </div>
      <div class='post-preview'>
        <h3 class='post-preview-title'><INSERT POST TITLE #2 HERE></h3>
        <p>
          <INSERT A PREVIEW TO YOUR SECOND POST HERE>
        </p>
        <a href='/<INSERT THE LINK TO YOUR SECOND POST HERE>'>Read more &raquo;</a>
      </div>
      <div class='post-preview'>
        <h3 class='post-preview-title'><INSERT POST TITLE #3 HERE></h3>
        <p>
          <INSERT A PREVIEW TO YOUR THIRD POST HERE>
        </p>
        <a href='/<INSERT THE LINK TO YOUR THIRD POST HERE>'>Read more &raquo;</a>
      </div>
    </div>
  </div>
</section>
```

```css
#writing-section {
  min-height: 400px;

  background-color: #5D576B;
}

.post-preview {
  margin: 50px 0;
}

.post-preview-title {
  font-family: 'Montserrat', sans-serif;
}

.post-preview:first-child {
  margin-top: 0;
}

.post-preview:last-child {
  margin-bottom: 0;
}

.section-content a {
  color: #fff;
}

.section-content a:hover {
  text-decoration: underline;
}
```

## Adding a Contact Section

You've officially convinced people you're awesome. Help them get in contact with
you!

Add the following HTML after your writing section. Add the following CSS to your
`assets/css/style.css` file.

```html
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
</section>
```

```css
#contact-section {
  background-color: #FE938C;
}

.contact-input {
  padding: 25px;
  margin: 25px 0;
}

.contact-input:first-child {
  margin-top: 0;
  margin-bottom: 0;
}

.contact-submit {
  padding: 15px;
  width: 200px;
}

.contact-notification {
  display: none;
  margin-bottom: 0;
}

@media (max-width: 480px) {
  .contact-input {
    margin: 25px 0;
  }

  .contact-input:first-child {
    margin-top: 25px;
  }

  .contact-submit {
    margin-left: 0;
    width: 100%;
  }
}

.button-wrapper {
  text-align: center;
}
```

## Adding a Blog Post

You've teased your admirers with a preview of your writing. Lets add a page for
your full post(s).

Create a file called `post.html` based on your `index.html` file. Go ahead and
delete everything inside your `<body>` tag (expect for your `<script>` tags).

```bash
$ cp index.html post.html
```

Add the following HTML to your `post.html`'s body. Add the following CSS to your
`assets/css/style.css` file.

```html
<nav class='blog-nav'>
  <a href='/'>
    <i class='fa <INSERT AN AWESOME ICON THAT DESCRIBES YOU HERE>'></i>
    <INSERT YOUR NAME HERE>
  </a>
</nav>

<article class='blog-post'>
  <a href='/<INSERT THE LINK TO YOUR FIRST POST HERE>'><h1 class='blog-title'><INSERT POST TITLE #1 HERE></h1></a>

  <div class='blog-body'>
    <INSERT ANY HTML THAT YOU WANT HERE>
  </div>
</article>
```

```css
.blog-nav {
  padding-top: 25px;
  padding-left: 25px;
}

.blog-nav a {
  font-size: 1.7em;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #339DCA;
}

.blog-post {
  padding: 50px 0;
  width: 90%;
  max-width: 40em;
  margin: 0 auto;
}

.blog-post a {
  color: inherit;
  text-decoration: none;
}

.blog-title {
  margin-bottom: 30px;

  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
  cursor: pointer;
  -webkit-transition: color 200ms ease;
  -moz-transition: color 200ms ease;
  -ms-transition: color 200ms ease;
  -o-transition: color 200ms ease;
  transition: color 200ms ease;
}

.blog-title:hover {
  color: #339DCA;
}

.blog-body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  line-height: 2em;
  color: #777;
}

.blog-body p {
  margin-bottom: 20px;
}
```

Now go ahead and rename `post.html` to the correct filename that use gave URLs
to. Then you can copy that file and make modifications for your other blog posts
if you have them.

Here`s how Rick did it:

```bash
$ mv post.html cross-dimensional-televisions.html
$ cp cross-dimensional-televisions.html concentrated-dark-matter.html
$ cp cross-dimensional-televisions.html mega-tree-seeds.html
```

## Done!

You've finished building a static verison of your blog with HTML and CSS. 

If you get stuck you can always take a peek [here](https://github.com/BoilerCamp/how-to-webdev/tree/3d2162be8942c3aa6b232434288444e3097e71b5)!
