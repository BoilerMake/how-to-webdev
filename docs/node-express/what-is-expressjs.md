What Is Express.JS?
===============

[Express.JS](http://expressjs.com/) is a framework for building web applications
using Node.JS. It handles server set up so you can focus on the logic of your
app.

To install it, simply run:

```bash
$ npm install -g express
```

Now, in order to use Express.JS for our Node app, you have to add following line
of code.

```js
var express = require('express');
```

## Routes

[Routing](http://expressjs.com/starter/basic-routing.html) is how an application
responds to a certain request made.

```js
app.get(some url, do something);
```

Each route can have one or more handler functions, which are executed when the
route is matched.

```js
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```
This is the equivalent of "Hello World" but using Express.

Let's say you want to serve an HTML file using Express.js. You would type:

```js
app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});
```

Express supports a variety of templating engines. Plus, according to the
[Express documentation](http://expressjs.com/guide/using-template-engines.html),
any templating engine that follows certain syntax is supported. [Handlebars](https://handlebarsjs.com)
is a great example of a templating engine that we will use in this workshop.

Handlebars lets you put server logic into your HTML code. We use two curly
braces to wrap around our handlebars code in HTML. These can be used to execute
loops, conditionals, and layouts.

Let's go through a handlebars example:

```html
<h1>All my cats</h1>
{{#each cats}}
  <p>{Cat}</p>
{{/each}}
```

Here, we have a collection of cats. We then render out each cat in our HTML as
paragraphs. More about handlebars can be found [here](http://handlebarsjs.com/).
