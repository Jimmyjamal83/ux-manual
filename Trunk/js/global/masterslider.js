define("global/masterslider", ["jquery", "jqueryeasing", "masterslider"], function ($) {
    "use strict";
	var sliderDefaults = {
		width: 820,
		height: 400,
		space: 10,
		autoplay: true,
		loop: true,
		overpause: true,
		view:'flow',
		layout:'partialview',
		instantStartLayers: true,
		// grabCursor: false,			//  Non-touch variation
		// swipe: false,				//  Non-touch variation
	    controls : {
	        arrows : {autohide: false, inset: true},
	        circletimer : {color:"#FFFFFF" , stroke:9}
	    }
	};



	//  Main homepage slider
	var partialSlider = $('#body-corporate div.ms-partialview-template');
	partialSlider.masterslider(sliderDefaults);





	// // Main homepage slider for non-touch devices
	// var partialslider = $('html.no-touch #body-corporate div.ms-partialview-template');
	// var noTouchSliderOptions = $.extend(
	// 	{},
	// 	sliderDefaults, 
	// 	{});
	// partialslider.masterslider(noTouchSliderOptions);

	// //  Main homepage slider for touch enabled devices
	// var partialsliderTouch = $('html.touch #body-corporate div.ms-partialview-template');

	// var touchSliderOptions = $.extend(
	// 	{},
	// 	sliderDefaults,
	// 	{ swipe: true, grabCursor: true });

//	var sliderWidth = parseInt(partialslider.data('width'));
	// partialsliderTouch.masterslider(noTouchSliderOptions);

	var orbiter = $('#body-corporate div.master-slider.orbiter');
	var orbiterOptions = $.extend(
		{},
		sliderDefaults,
		{ 
			width:1000,
			height:10,
			autoHeight: true
		});
	orbiter.masterslider(orbiterOptions);

});