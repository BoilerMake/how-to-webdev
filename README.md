# [How to Webdev](http://boilercamp.github.io/how-to-webdev)

A mostly complete introduction into web development.

It can be difficult to figure out where to start when you want to get into web
development. How to Webdev is a series of accelerated workshops and projects
that build on one another with the goal of teaching web development. This course
will cover [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML),
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript),
[Node.js](https://nodejs.org/en/), and [MongoDB](https://www.mongodb.com/).

How to Webdev was first debuted September 2015 at [BoilerCamp](http://boilercamp.org/)
at Purdue University.

Written and developed by [Kirby Kohlmorgen](http://kirby.xyz/) & [Roy Fu](http://royfu.me/).

## The Goal

By the end of this tutorial you should have a sound understanding of how to
build an application for the web. Specifically, in this exercise you'll be
building a personal website and blog.

You'll start by building a static website with vanilla HTML and CSS. We'll
quickly introduce the power of frameworks by hooking you up with some [Bootstrap](http://getbootstrap.com/).
We'll add a little client-side JavaScript, which will give us a chance to
introduce [jQuery](https://jquery.com/). Once we have a pretty static site set
up we'll the introduce the idea of a backend with Node.js running a webserver
with [Express](http://expressjs.com/). This provides us with a nice segway into
server-side rendering and templating [Handlebars](http://handlebarsjs.com/). And
finally we'll introduce the idea of a database utilizing MongoDB.

You can see an example of the finished web app [here](http://ricksanchez.herokuapp.com/).

## Getting it Running

The current state of this [repo](https://github.com/BoilerCamp/how-to-webdev) is
the final product after completing all of the walkthroughs. If you want to get
this server up and running so you can check it out, you need to do a few things.

### 1. Install Dependancies

You'll first need to install all of the server-side dependancies with `npm`,
and the client-side depedancies with `bower`:

```bash
$ npm install
$ npm run prepare
```

### 2. Setup MongoDB

You'll also need a MongoDB instance running somewhere.

First we need to install MongoDB. On Mac you use [Homebrew](http://brew.sh/) to
install MongoDB.

```bash
$ brew install mongodb
```

You'll then need to make a directory for MongoDB to write the database to.

```bash
$ sudo mkdir -p /data/db
$ sudo chown `whoami` /data/db
```

Finally, you'll need to get MongoDB running.

```bash
$ mongod
```

### 3. Connecting to MongoDB

We need our server to be able to connect to MongoDB. We specify the address and
port to our MongoDB instance with a `.env` file. Go ahead and copy the
`env.sample` file.

```bash
$ cp env.sample .env
```

> If you're running MongoDB locally on a standard address and port, then you
don't need to do anything else!

We want to put some fake data in our MongoDB instance, so we'll have some nice
blog posts to look at.

```bash
$ npm run seed
```

### 4. Starting the Server

Lastly, we just need to start our server!

```bash
$ npm start
```

Then go to [http://localhost:8080/](http://localhost:8080/) to checkout the
final project!!

## Thanks

Many thanks are due to the entire BoilerCamp Team:

- [Adam Loeb](https://github.com/aloeb)
- [Ben Alderfer](https://github.com/balderfer)
- [Fisher Adelakin](https://github.com/fadelakin)
- [Kedar Vaidya](https://github.com/kedarv)
- [Kurt Kroeger](https://github.com/kwkroeger)
- [Shriyash Jalukar](https://github.com/infinitebattery7)
- [Roy Fu](https://github.com/Roystbeef)
- [Usmann Khan](https://github.com/UsmannK)

## License

MIT
