What Are HTML and CSS?
======================

HTML and CSS are arguably the two most important parts of the web application
technology stack to understand. I'd argue this because all web apps will have
HTML and CSS. They are the two main languages that compose the frontend of all
websites and web apps on the Internet.

## What is HTML?

HTML stands for *HyperText Markup Language*. It is the most basic building block
of any webpage. **HTML makes up all the content of a webpage.**

HTML is **not** a programming language. It has no logic, but is rather a markup
language. It's impossible to do things like `1 + 1 = 2` in HTML, which is
possible in all programming languages.

### Hello World in HTML

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>
```

![hello-world](/docs/assets/img/hello-world.png)

### Breaking Hello World Down

The Hello World webpage from above is a great example to understand the syntax
of HTML.

#### Tags

Tags begin with a `<` and end with a `>`. Most, but not all, tags have a
corresponding *start* and *closing* tag. As you might expect tags are used to
give different pieces of content different functionality. Your webpage might
need a paragraph, in which you'd use a p tag (`<p>My short paragraph.</p>`). Or
it might need a header, in which you'd you an h1 tag (`<h1>My Header</h1>`).

#### Attributes

Attributes are tag modifiers. They have a `name` and a `value`. Attributes
follow the following syntax.

```html
<foo <name>='<value>'></foo>
```

> There is no tag called `foo` it's just an example. Virtually all HTML tags can
have attributes.

As you can see attributes only exist in the *start* tag, and not the *closing*
tag. The attribute `name` is followed by an `=` which is followed by the `value`
which is wrapped in either single or double quotes.

So, the `html` tag in our hello world example has an `attribute` called *lang*
with a value of *en*. This tells a browser that the following HTML content is
written in English.

#### Common Tags

- **html**: wraps all other tags in your webpage
- **head**: used to store metadata about your webpage like: title, linked
stylesheets, and javascript. You **don't** put page content in here
- **body**: this is where all of your content lives
- **p, h1, h2, h3, h4**: paragraph, heading, sub-heading, and so on
- **div**: a generic wrapper used to group items together

## What is CSS?

CSS stands for *Cascading Style Sheets*. **CSS is the language used to style the
content of a webpage.**

Like HTML, CSS is also **not** a programming language.

### Beautifying Hello World with CSS

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Hello World</title>
    <style>
      body {
        background-color: #F35F5F;
        text-align: center;
      }

      .hello-world {
        color: #F1EA65;
        font-size: 8em;
        font-family: 'Helvetica'
      }
    </style>
  </head>
  <body>
    <p class='hello-world'>Hello World</p>
  </body>
</html>
```

![hello-world](/docs/assets/img/pretty-hello-world.png)

### Breaking Beautified Hello World Down

The Hello World webpage from above now looks way better. Let's break down how we
did that.

#### Selectors

Selectors are used in CSS to select the parts of HTML you want to style. In the
hello world example, we select the `body` tag. We wrap the styling we want to
apply to the selected HTML with curly braces (`{` and `}`). In there, we can
modify the different style properties of the HTML element.

```css
foo {
  // your style properties go in here
}
```

#### Classes

But if you don't want to select all paragraphs or all headers, you can create a
class! We select the `p` tag adding a class attribute with value "hello-world".
We can select that `p` tag by appending a `.` before the class name like so:

```css
.hello-world {

}
```

#### Properties

Properties are the things you're changing about your HTML. Properties have the
following syntax.

```css
foo {
  <property name>: <property value>;
}
```

We first include the property name we want to change, followed by a colon, and
then the value we want to assign to that property name, followed by a semicolon.
There are tons of properties in CSS ranging from how the HTML element is
positioned, to what color and size the HTML element is. For a complete list,
click [here](http://www.w3schools.com/cssref/).

### Seperating HTML and CSS

It isn't super awesome to include all of our CSS directly in our HTML files. You
can seperate the two by doing something like this:

**index.html**

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Hello World</title>
    <link rel='stylesheet' href='style.css'>
  </head>
  <body>
    <p class='hello-world'>Hello World</p>
  </body>
</html>
```

**style.css**

```css
body {
  background-color: #F35F5F;
  text-align: center;
}

.hello-world {
  color: #F1EA65;
  font-size: 8em;
  font-family: 'Helvetica'
}
```
