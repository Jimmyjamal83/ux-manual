define("global/accordionSmallOnly", ["jquery"], function ($) {
    "use strict";

	var thisAccordion = function() {
		// var currentBreakpoint = checkBreakpoint();
	
		// if (breakpoint==currentBreakpoint) {
			// return;
		// }
		/* As the breakpoint is different, change the base value */
		// breakpoint = currentBreakpoint;

		if (Modernizr.mq('only screen and (max-width: 640px)')) {
			$('.has-accordion-small-only').find('.accordion-toggle').off();
			$('.has-accordion-small-only .accordion-content').hide();
			$('.has-accordion-small-only').find('.accordion-toggle').click(function(){
				
				$('.accordion-content').slideUp('fast');
				if ($(this).children('.accordion-icon').hasClass('active')) {
					$(this).children('.accordion-icon').removeClass('active');
				}
				else
				{
					$('.accordion-icon').removeClass('active');
					$(this).next().slideDown('fast');
					$(this).children('.accordion-icon').addClass('active');
				}

			});	
		}
		else if (Modernizr.mq('only screen and (min-width: 641px)'))
		{
			/* Undo the accordion */
			$('.has-accordion-small-only').find('.accordion-toggle').off();
			$('.has-accordion-small-only .accordion-content').show();
			$('.accordion-icon').removeClass('active');	
		};
    };	

    $(window).resize(thisAccordion);
    
    thisAccordion();
});