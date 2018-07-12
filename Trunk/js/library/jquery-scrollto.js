$(function() {
  // alert($('a[href*=#]:not([href=#])').not('ul.tabs a').length);
  // alert($('a[href*=#]:not([href=#])').length);
  // alert($('a[href*=#]:not([href=#]):not(.tab-nav)').length);
  $($('main a[href*=#]:not([href=#]):not(.tab-nav)')).click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-65
        }, 1000);
//        $(target).addClass('scroll-highlight').delay(600).removeClass('scroll-highlight');
        $(target).css('text-shadow', '0 0 10px yellow');
        setTimeout(function(){
          $(target).css('text-shadow','none');}, 2000);
        return false;
      }
    }
  });
});