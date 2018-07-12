define(["jquery"], function ($) {
    "use strict";
    $(function () {
        $(document).ready(testimonialOrbit);
        $(window).resize(testimonialOrbit);
    });
    // Orbit testimonial functionality
    function testimonialOrbit() {
        $('div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 240000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 240000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 190000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 115000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });

        $('main div.large-6 div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 140000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 140000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 200000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 115000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });

        $('aside.secondary div.large-6 div.orbit-testimonials div.orbit-container, aside.tertiary div.large-6 div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 200000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 200000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 200000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 115000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });

        $('aside.secondary div.large-4 div.orbit-testimonials div.orbit-container, aside.tertiary div.large-4 div.orbit-testimonials div.orbit-container').each(function (index) {
            var area = 150000;
            var width = $(this).width();

            if (Modernizr.mq('only screen and (min-width: 961px)') == true) {
                // large-up screens
                area = 150000;
            };

            if (Modernizr.mq('only screen and (min-width: 641px) and (max-width: 960px)') == true) {
                // medium only screens
                area = 200000;
            };

            if (Modernizr.mq('only screen and (max-width: 640px)') == true) {
                // small only screens
                area = 115000;
            };
            var height = area / width;
            var heightValue = height + 'px';
            $(this).height(heightValue);
        });
    };
});