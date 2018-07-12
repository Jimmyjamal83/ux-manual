define("global/slick-3-2-1", ["jquery", "slick"], function ($) {
    "use strict";

	$(".center.slider").slick({
		dots: true,
		infinite: true,
		swipeToSlide: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});