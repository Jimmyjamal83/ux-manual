define("global/landing", ["jquery"], function ($) {
    "use strict";
    $(function () {

		/* Landing template expansion panels */
		var closed_height = "20.2001em";
		var open_height = "22em";   
		
		if($('#info-block-panel').length){
			// Define the heights depending on page type and screen size
			if($('#info-block-panel').hasClass('landing-page')) { 
				// Default sizes
				closed_height = "20.2001em";
				open_height = "22em";  	
				if (Modernizr.mq('only screen and (max-width: 40em)')) {
					closed_height = "18.6em";
					open_height = "19.2001em";
				} 		
			}
			else if($('#info-block-panel').hasClass('definition-page')) { 	
				// Default sizes
				closed_height = "4.5em";
				open_height = "5.6em";
				if (Modernizr.mq('only screen and (max-width: 40em)')) {
					closed_height = "4em";
					open_height = "4.18em";
				}
			};
			
			// Store the 'revert' text for later
			var revert_text = $('#info-block-panel a.expand:first').html();
			$('#info-block-panel').attr('value',revert_text);
		};


		 function info_panel_up(obj, panel_height) {
			// Close any currently open panel
			$('div.info-holder').stop(true, true).slideUp(500).removeClass('visible').empty();
			// Reset currently active block
			$('article.info-block-item.active').animate({ height: panel_height }, 300, function (obj) { $(this).removeClass('active').find('a.unshow').removeClass('unshow').addClass('show').html(revert_text) });
			// Reset any currently active block button
			$(obj).removeClass('unshow').addClass('show').html(revert_text);
			
			// Clear any non-active elements
			$('#info-block-panel article.info-block-item').removeClass('inactive');
		};
		
		 function info_panel_down(obj, panel_height) {
			// Populate holder with clicked item's contents
			var details = $(obj).parent().siblings('div.info-detail').html();
			// Update clicked button to active
			$(obj).removeClass('show').addClass('unshow').text('Collapse X');
			$('article.info-block-item').addClass('inactive');
			$(obj).closest('article.info-block-item').removeClass('inactive').addClass('active');
			// Select holder for screen size
			if (matchMedia('only screen and (max-width: 40em)').matches) {
				var target_info_holder = 'div.info-holder:first';
			}

			if (matchMedia('only screen and (min-width: 40.063em) and (max-width: 60em)').matches) {
				var target_info_holder = 'div.info-holder.medium:first';
			}

			if (matchMedia('only screen and (min-width: 60.063em) and (max-width: 80em)').matches) {
				var target_info_holder = 'div.info-holder.large:first';
			}

			if (matchMedia('only screen and (min-width: 80.063em)').matches) {
				var target_info_holder = 'div.info-holder.xlarge:first';
			}
			
			// Reveal holder
			$(obj).parent().parent().stop(true, true).animate({ height: panel_height }, 300, function () { }).addClass('active').removeClass('inactive').parent().nextAll(target_info_holder).html(details).slideDown(1000);
		};

		// If the viewport is resized, close any open panels and reset
		$(window).resize(function() {
			if ($('#info-block-panel a.unshow').length) {
				info_panel_up(this, closed_height);
			};
			$('article.info-block-item').removeAttr('style');
		});


		$('#info-block-panel a.expand').click(function (event) {
			event.preventDefault();
			// If the button is to open a panel
			if ($(this).hasClass('show')) {
				// Populate holder with clicked item's contents
				if ($('#info-block-panel a.unshow').length) {
					// Switch open element
					info_panel_up(this, closed_height);
					info_panel_down(this, open_height);
				}
				else {
					// Start open element
					info_panel_down(this, open_height);
				};
			}
			// If the button is to close a panel
			else if ($(this).hasClass('unshow')) {
				// Close open element
				info_panel_up(this, closed_height);
			};
		});

	});		
});
