$(function() {
  registerNavButtons();
  contactSuccess();
});

function contactSuccess() {
  if (window.location.search.substring(1) === 'success') {
    $('.contact-notification').show();
  }
}

function registerNavButtons() {
  var sections = ['about', 'writing', 'contact'];

  sections.forEach(function(section) {
    clickAndScroll('#nav-' + section, '.' + section + '-section');
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
