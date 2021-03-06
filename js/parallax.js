var parallax = (function(){
	'use strict';

	// creating all variables that live inside this module
	var $container = $('.parallax'),
		$divs = $container.find('div.parallax-background'),
		len = $divs.length,
		liHeight = $divs.first().closest('li').height(),
		diffHeight = $divs.first().height() - liHeight,
		bodyScroll = document.body,
		top,
		i,
		$div,
		offset,
		scroll;

	// return function

		return function() {
			top = bodyScroll.scrollTop;

			for (i = 0; i < len; i++) {
				$div = $divs.eq(i);

				offset = $div.offset().top;

				scroll = ((( top - offset ) / liHeight) * diffHeight);

				$div.css('webkitTransform', "translate3d(0px, " + scroll + "px," + scroll*(-20000) + "px)");

			}

		};


})();

$(function(){
	$(window).on('scroll', parallax);
});