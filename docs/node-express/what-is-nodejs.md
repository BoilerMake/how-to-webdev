What Is Node.JS?
===============

NodeJS is a server side Javascript platform. Essentially, it's Javascript except
bundled with other libraries in order to create backend services. Javascript is
a [client-side language](https://github.com/BoilerCamp/how-to-webdev/blob/master/docs/client-side-js/What-is-JavaScript.md),
meaning the changes made to any Javascript code directly affects a user's
interaction with a website.

But what if you wanted to communicate with a server? You could use a lot of
other backend languages (PHP, Ruby, Python, ect). Node.JS is just one of many
backend languages, and it's essentially like a framework for using Javascript on
the server-side.

## Hello World in Node.JS

Let's say we have a file named hello.js, with the following code.

```js
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200);
    response.end('Hello World\n');
}).listen(8080);
```

If you run `node hello.js` in the terminal, you will see the text "Hello World"
displayed on port 8080.

Now let's break this down.

```js
var http = require('http');
```

This line loads the http module and creates an http server for the code to load
on.

If you look in the documentation for Node.JS, [you can see why you can make this command](https://nodejs.org/api/http.html#http_http).


```js
http.createServer(function (request, response) {
    response.writeHead(200);
    response.end('Hello World\n');
}).listen(8080);
```

This calls the "create server" function in the http module. The next two lines
configure this HTTP server to respond with the text Hello World to all requests.

Finally, `listen(8080);` calls the function "listen" on our server and tells
what port we want to listen on.
