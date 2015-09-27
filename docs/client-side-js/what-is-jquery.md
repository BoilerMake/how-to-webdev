What is jQuery?
===============

Now that you know a little JavaScript, you may be wondering: "How will this programming
language actually interact with my website?". No need to fear, because jQuery is
here.

### The DOM

DOM stands for *Document Object Model*, and is a way of breaking down the different
parts of HTML on your website. When we want things to change on the website after
it's been loaded, we update the DOM. But how do we do this?

### jQuery Magic

By using jQuery, we can manipulate the DOM. jQuery is built on top of JavaScript
and can be thought of as a library similar to java.utils.* or stdio.h. Let's take
the hello world code from before, but make it disappear using some jQuery!

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <p class='hello-world'>Hello World</p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript">
      $('.hello-world').fadeOut(1000);
    </script>
  </body>
</html>
```

### Breaking Down the jQuery Magic

The biggest change we've added are these `script` tags. These tell the HTML that
we're going to be using the JavaScript logic written in between the script tags.
In the first pair of script tags, we import jQuery from the Google developer Libraries.
By adding this line, we have the powerful jQuery library at our fingertips. The
next pair of tags is where we write our code. The jQuery selector syntax is as follows:

```javascript
$(<selector>).event(function() {
  // Your logic goes here
});
```

Inside the selector part, we include the part of the DOM we want to manipulate.
These will generally be the same selectors as the ones we'd use if we were writing
CSS for that element, but wrapped in single or double quotes. In our example, we
set the class for our `p` tag to be `hello-world`. We are then able to select it
in our jQuery using `'.hello-world'`. We then specify that we want it the text to
fade out, and pass the parameter 1000 to represent that the fade out should take
1000ms. `fadeOut` is just one of the many functions built into jQuery. jQuery functions
can be broken down into two distinct groups: effects and events.

#### jQuery Effects

In our hello-world example, we used an effect called `fadeOut`. These execute a
function prebuilt into jQuery to execute the functions name given some parameters.
A full list of jQuery effects can be found [here](http://api.jquery.com/category/effects/).

#### jQuery Events

In jQuery, there are also events. Events detect user interaction, such as when a
user clicks on an element, or presses a key on the keyboard. A full list of jQuery
events can be found [here](http://api.jquery.com/category/events/).

### Wrap up

There are tons of built in functions in the jQuery library to explore. The documentation
for those functions can be found [here](http://jquery.com/) if you want to implement
more jQuery on your own. Codecademy also has a great course on jQuery which can
be found [here](https://www.codecademy.com/en/tracks/jquery).
