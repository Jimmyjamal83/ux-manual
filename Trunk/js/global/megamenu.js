define("global/megamenu", ["jquery", "core"], function ($) {
    "use strict";
    $(function () {

        if (Modernizr.mq('only screen and (min-width: 961px)') && ($('#menu').length)) {
            $(window).on('resize', stickyMenu);
            $(document).ready(stickyMenu);
        };

        function stickyMenu() {
            // Cache selectors outside callback for performance. 
            var $stickyEl = $('#menu'),
            elTop = $stickyEl.offset().top;
            $(window).scroll(function (e) {
                e.stopPropagation;
                $('#menu').toggleClass('fixed', $(window).scrollTop() > elTop);
                if ($('#menu.fixed').length > 0 && $('#menu-spacer').css('height', '0')) {
                    $('#menu-spacer').css('height', '4.6em');
                } else {
                    $('#menu-spacer').css('height', '0');
                };
            }); 
        }

        //Mega menu large
        // Set all first items in second level nav to active $('#mega-menu > li .dropdown-inner > ul > li:first-child').addClass('active');
        // $("#menu").on("click", "#mega-menu > li", function () {
        //     $(this).find('.dropdown-inner > ul > li:first-child').addClass('is-active');
        // }).on("click", "#mega-menu > li .dropdown-inner > ul > li", function (e) {
        //     e.stopPropagation();
        //     $(this).closest("ul").find("li").removeClass('is-active');
        // });
    });
}); 