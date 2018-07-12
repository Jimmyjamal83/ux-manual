define("global/responsive-tables-wrapper", ["jquery"], function ($) {
    "use strict";
    $(function () {
        $("table").each(function() {
            $(this).addClass("responsive").wrap('<div class="table-wrapper component"></div>').before('<div class="mobile-slide-indicator"></div>');
        });
    });
});
