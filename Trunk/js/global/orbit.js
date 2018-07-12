define(["jquery"], function ($) {
    "use strict";
    $(function () {
        $(document).ready(testimonialOrbit);
        $(window).resize(testimonialOrbit);
    });
    // Orbit testimonial functionality
    function testimonialOrbit() {
        $('div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 200000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 180000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 160000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 100000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });

        $('main div.large-6 div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 170000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 160000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 160000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 100000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });

        $('aside.secondary div.large-6 div.orbit-testimonials div.orbit-container, aside.tertiary div.large-6 div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 160000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 175000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 160000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 100000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });

        $('aside.secondary div.large-4 div.orbit-testimonials div.orbit-container, aside.tertiary div.large-4 div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 200000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 160000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 160000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 100000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });
    };
});