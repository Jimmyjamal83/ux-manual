define("global/burgernav", ["jquery", "core"], function ($) {
    "use strict";
    $(function () {
        // Allow burger nav for default menu with JS enabled to reveal footer top level nav links
        $("#menu").on("click", "nav li.menu-icon a", function() {
            $('#menu-level-one').addClass('show').css('display', 'block !important');

        });
    });
});