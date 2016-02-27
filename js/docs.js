$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.docs-floating-nav-bar'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top - 100,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function onScroll() {
    if(navOffsetTop > $window.scrollTop() && !$nav.hasClass('docs-floating-nav-bar--docked')) {
      $nav.addClass('docs-floating-nav-bar--docked')
    }
    if(navOffsetTop < $window.scrollTop() && $nav.hasClass('docs-floating-nav-bar--docked')) {
      $nav.removeClass('docs-floating-nav-bar--docked')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});