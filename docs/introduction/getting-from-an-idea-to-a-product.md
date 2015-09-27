Getting from an Idea to a Product
=================================

We all have ideas. It's been said many times: "[Ideas are easy. Implementation is hard.](http://startupquote.com/post/530338012)"
In order for us to implement the ideas we have understand the technologies
required to successfully execute our vision. This can be really hard, but with
the right help and with experience, it can be easier to figure out your
application's architecture.

## Tech Stack

First off, what is a *tech stack*?

> A tech (technology) stack is all of the technologies that make up our application.

In order for us to best understand what architecture will best suit our
application, we need to understand the underlying needs of our application. We
can do this by asking a few questions:

- What devices will the application run on?
- Will my application need a server?
- Will I need to store data somewhere?

Let me go ahead and answer these questions for our application.

> Remember, we're building a website/blog :)

### What devices will the application run on?

**Desktop and mobile.** I say both desktop and mobile, because I expect that our
website/blog will be accessed both on desktop computers as well as mobile phones.

When I say that it will be accessed on mobile phones, I don't mean that it will
be accessed by a native app like Google Maps or Snapchat, but rather will be
opened in a mobile browser like Google Chrome or Safari.

This means that one part of our application will need to be written in **HTML
and CSS**.

### Will my application need a server?

**Yes, we'll need a server.** We'll need a server because we want to *serve*
content to our users. With a mobile or desktop application, the user installs
the program to their operating system. In our case our users are accessing the
application through a browser, so we'll need a web server to serve our site to
our users' browser.

In our case, we're going to use **Express.js** for our web server running on top
of **Node.js**.

### Will I need to store data somewhere?

**Yes, we'll need to store data.** We're going to store all of our blog posts.
We're doing this because our posts are going to be referenced in multiple parts
of our application and when we make updates to our blog we want all of the parts
of our application to update automatically.

Specifically, we're going to be using a database called **MongoDB** to store all
of our blog posts.

## Frontend versus Backend

The architecture of a web application can be categorized into two groups:
frontend and backend.

### Frontend

Anything that the user *can* see and interact with. Some good examples of
frontend technologies include:

- HTML
- CSS
- JavaScript

### Backend

Anything that the user *can't* see and interact with. Some good exapmles of
backend technologies include:

- Ruby on Rails
- PHP
- Node.js
- Java
- Django
