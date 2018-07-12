
define("global/circle-progress", ["jquery", "circleprogress"], function ($) {
	"use strict";
	$(function () {
// $(document).ready(function ($) {
		function animateElements() {

			$('.progressbar').each(function () {
					var progress = $('<div class="circle-progress-display"></div>');
				//alert(progress)
				var colour = $(this).find('.circle').attr('data-colour') || '#CCC';
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var percentage = parseInt(percent, 10) / parseInt(100, 10);
				var colour = (percentage == 1? '#A6AF73': '#E6955B');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				
				progress.insertBefore($(this).find('.circle-inside'));
				//alert(1)
				  // $(this).find('.circle-inside').hide();
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percentage,
						thickness: 4,
						fill: {
							color: colour
						},
						// emptyFill: 'rgba(0, 0, 0, .8)',
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('.circle-progress-display').text(parseInt(stepValue * 100) + '%');
					}).on('circle-animation-end', function (event, progress, stepValue) {
								$(this).find('.circle-inside').delay(200).show(0);
								$(this).find('.circle-progress-display').delay(700);
						// if($(this).find('.circle-inside').text() + "" == ""){
						// 		$(this).find('.circle-inside').text(percent+'%');
						// }
					}).stop();
				}
			});
		}

		// Show animated elements
		animateElements();
		$(window).scroll(animateElements);
// });
	});
   
});
