
define("design-manual/swatchhex", ["jquery", "swatchhex"], function ($) {
    "use strict";	

	// Copy Swatch Hex Value to Clipboard
	var swatch = document.querySelectorAll('.swatch');
	var clipboard = new Clipboard(swatch);

	clipboard.on('success', function(e) {
	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);
		  swal({
		    timer: 900,
		    showConfirmButton: false,
		    title: 'Copied',
		    background: e.text,
		    padding: 0 
		    
		})
	});
});
