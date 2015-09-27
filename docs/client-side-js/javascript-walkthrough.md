JavaScript Walkthrough
======================

Now you have an awesome static website using HTML and CSS. Let's add some
client-side JavaScript to make our website a little more dynamic.

If you didn't finish the last part, that's totally okay!

We can get get a known-working set of files by running the following command:

**Be Aware: This will remove *all* of your changes.**
```bash
$ git checkout -f completed-html-css
```

After you do this, you also need to run `bower install` to get the dependencies loaded.

## Getting Started

The first thing we need to do in create a file to put all of our JavaScript in.

```bash
$ mkdir assets/js && touch assets/js/main.js
```

Now let's reference that file from our `index.html` file.

```js
<script src='/assets/js/main.js'></script>
```

Your JavaScript will rely on jquery, so make sure you do this **after** the other two script tags. The bottom of your html body should look something like this:

```js
<script src='/bower_components/jquery/dist/jquery.min.js'></script>
<script src='/bower_components/bootstrap/dist/js/bootstrap.min.js'></script>
<script src='/assets/js/main.js'></script>
```

## Use IDs for JavaScript and Classes for CSS

It's now considered an anti-pattern to use ID attributes on HTML tags to apply
styles via CSS. You should only use class attributes to apply CSS to HTML
elements.

IDs are very useful for pull out DOM elements with JavaScript.

Let's change the classes on our navbar links to IDs.

```html
<li><a id='nav-about' href='#'>About</a></li>
<li><a id='nav-writing' href='#'>Writing</a></li>
<li><a id='nav-contact' href='#'>Contact</a></li>
```

## Adding Document Ready

We only want our JavaScript to execute after the DOM has finished loading. Add
the following code to `assets/js/main.js`.

```js
$(function() {
  // any code in here will be executed AFTER the DOM loads.
});
```

## Adding Pretty Scrolling

Currently when a user clicks a link we just jump to the different sections of
our website. It would be a lot cooler if we had a nice scrolling animation.

Add the following code to `assets/js/main.js` to do so:

```js
function registerNavButtons() {
  var sections = ['about', 'writing', 'contact'];

  sections.forEach(function(section) {
    clickAndScroll('#nav-' + section, '#' + section + '-section');
  });
}

function clickAndScroll(link, section) {
  var delay = 700;

  $(link).click(function() {
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, delay);

    return false;
  });
}
```

Make sure to call this from your ready event listener.

```js
$(function() {
  registerNavButtons();
});
```

## Getting in Contact

Currently our contact form doesn't do anything. Let's fix that. Add the
following code to `assets/js/main.js`:

```js
function handleContactSubmission() {
  $('form').submit(function(e) {
    e.preventDefault();
    var first = $('input[name=first]').val();
    var last = $('input[name=last]').val();
    var subject = $('input[name=subject]').val();
    var message = $('textarea[name=message]').val();

    var url = 'mailto:youremail@gmail.com?&subject=' + first + ' ' + last + ': ' + subject + '&body=' + message;

    var win = window.open(url, '_blank');
    win.focus();
  });
}
```

Make sure to call this from your ready event listener.

```js
$(function() {
  registerNavButtons();
  handleContactSubmission();
});
```

## Done!

Yeah, you did it.
