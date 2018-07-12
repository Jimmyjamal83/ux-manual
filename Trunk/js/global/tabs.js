define(["jquery"], function ($) {
    "use strict";
    $(function () {
        // START TABS (IF NOT USING FOUNDATION)

        var tabuliser = function(tabBlock){
            // By default, assume we're going to wrap and we need this to calculate the un-flexed widths of the tabs
            $(tabBlock).addClass('flex-wrap');

            // Get the width of the containing element
            var tabBlockWidth = (tabBlock).width();
            // console.log(tabBlockWidth);

            // Get the width of all the children while they're not flex-wrapped
            var tabContentWidth = 0;
            $(tabBlock).children().each(function() {
                tabContentWidth += $(this).width();
            });
            // console.log(tabContentWidth);

            // If the width of the children is less than 145% of the container, remove the flex-wrap and they'll flex to two text lines
            if ((tabBlockWidth * 1.045) > tabContentWidth) {
                $(tabBlock).removeClass('flex-wrap');
            }
        };

        $('ul.tabs').each(function () {

            // Run the tab resize function on screen resize and page load
            var $tabs = $(this);
            $(window).on("resize", function() {
                tabuliser($tabs);
            }).resize();

            // For each set of tabs, we want to keep track of
            // which tab is active and it's associated content
            var $active, $content, $links = $(this).find('a');

            // If the location.hash matches one of the links, use that as the active tab.
            // If no match is found, use the first link as the initial active tab.
            $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
            $active.addClass('active').siblings('span').addClass('arrow');

            $content = $($active[0].hash);

            // // tab animation
            // var $animationIn = $("<div class="'tabs-content'"><div class="'content'"></div></div>");
            // $animationIn.fadeIn(750);

            //deep linking for tabs
            // if(window.location.hash){
            //     $('ul.tabs li a').each(function(){
            //         var hash = '#' + $(this).attr('href').split('#')[1];
            //         if(hash == window.location.hash){
            //             $(this).click();
            //         }
            //     });
            // }

            // Hide the remaining content
            $links.not($active).each(function () {
                $(this.hash).hide();
            });

            // Bind the click event handler
            $(this).on('click', 'a', function (e) {
                // Make the old tab inactive.
                $active.removeClass('active').siblings('span').removeClass('arrow');
                $content.hide();

                // Update the variables with the new link and content
                $active = $(this);
                $content = $(this.hash);

                // Make the tab active.
                $active.addClass('active').siblings('span').addClass('arrow');
                $content.show();

                // Prevent the anchor's default click action
                e.preventDefault();
            });

        });
        // END TABS
    });
});