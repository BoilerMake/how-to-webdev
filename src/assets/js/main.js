/*
 * This is a shorthand for $(document).ready(function() {...}). Anything that we
 * put inside of the two curly braces will get executed when the page has
 * finished loading. We do this because it takes time for the page (more
 * specifically the DOM) to load, and our functions that we call inside it
 * (registerNavButtons and handleContactSubmission) interact with the DOM.
 */
$(function() {
  registerNavButtons();
  handleContactSubmission();
});

/* 
 * Here we declare a function that will call clickAndScroll for each of our 
 * three main sections on the homepage. We pass into clickAndScroll the id of
 * the link at the top of the page, and the id of the cooresponding section.
 */
function registerNavButtons() {
  var sections = ['about', 'writing', 'contact'];

  sections.forEach(function(section) {
    clickAndScroll('#nav-' + section, '#' + section + '-section');
  });
}

/*
 * clickAndScroll is a function that lets us have a nice scrolling animating
 * when a user clicks one of the three links at the top of our homepage. It
 * accomplishes this by registering a click listener on a link and then when
 * that link is clicked it scrolls the entire page down to the correct section.
 */
function clickAndScroll(link, section) {
  var delay = 700;

  $(link).click(function() {
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, delay);

    return false;
  });
}

/*
 * handleContactSubmission lets us open the user's default mail client with a
 * new email to ourselves with the information entered into the form. First we
 * register a submit listener on the contact form, then we prevent the default
 * action from occurring (refreshing the page). From there we can pull out the
 * information in the form. With this information we can create a url that will
 * redirect the user (in a new tab) to their mail client with the form info.
 */
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
