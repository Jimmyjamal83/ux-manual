define(["jquery"], function ($) {
    "use strict";
    $(function () {
        $(document).ready(testimonialOrbit);
        $(window).resize(testimonialOrbit);
    });
    // Orbit testimonial functionality
    function testimonialOrbit() {
        $('div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 75000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 75000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 75000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 50000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });
    };
});