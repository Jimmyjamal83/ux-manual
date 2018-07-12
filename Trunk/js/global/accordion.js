define(["jquery"], function ($) {
    "use strict";
    $(function () {
        //  Nested Accordion functionality

        $(function () {

            // Set up variables
            var $el, $parentWrap = $("dl.nested-accordion dt").css({
                "cursor": "pointer" // make it seem clickable
            }),
                $allCells = $("dl.nested-accordion dd").css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    display: "none" // info cells are just kicked off the page with CSS (for accessibility)
                });


            // clicking on titles does stuff
            $("dl.nested-accordion").delegate("dt", "click", function () {

                // cache this, as always, is good form
                $el = $(this);

                $parentWrap = $el.parent().parent();


                // if this is already the active cell, don't do anything
                if (!$el.hasClass("current")) {

                    // close all info cells
                    $parentWrap.find("dd").slideUp();

                    // animate current title to larger size
                    $el.next().slideDown();

                    // make the current column the large size
                    $parentWrap.addClass("curCol");

                    // make sure the correct column is current
                    $(this).closest('dl').find('dt').removeClass("current");
                    $el.addClass("current");
                }

                else if ($el.hasClass("current")) {
                    // close all info cells

                    // close all info cells
                    $parentWrap.find("dd").slideUp();
                    $(this).removeClass("current");
                }
            });

            // Uncomment if the first accordion should be opened by default for better user experience
            //$("dl.accordion .starter").addClass("current").next().slideDown();

        });

        //  Accordion functionality

        $(function () {

            // Set up variables
            var $el, $parentWrap = $("dl.accordion dt").css({
                "cursor": "pointer" // make it seem clickable
            }),
                $allCells = $("dl.accordion dd").css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    display: "none" // info cells are just kicked off the page with CSS (for accessibility)
                });


            // clicking on titles does stuff
            $("dl.accordion").delegate("dt", "click", function () {

                // cache this, as always, is good form
                $el = $(this);

                $parentWrap = $el.parent().parent();


                // if this is already the active cell, don't do anything
                if (!$el.hasClass("current")) {

                    // close all info cells
                    $parentWrap.find("dd").slideUp();

                    // animate current title to larger size
                    $el.next().slideDown();

                    // make the current column the large size
                    $parentWrap.addClass("curCol");

                    // make sure the correct column is current
                    $(this).closest('dl').find('dt').removeClass("current");
                    $el.addClass("current");
                }

                else if ($el.hasClass("current")) {
                    // close all info cells

                    // close all info cells
                    $parentWrap.find("dd").slideUp();
                    $(this).removeClass("current");
                }
            });

            // Uncomment if the first accordion should be opened by default for better user experience
            //$("dl.accordion .starter").addClass("current").next().slideDown();

        });
    });

});
