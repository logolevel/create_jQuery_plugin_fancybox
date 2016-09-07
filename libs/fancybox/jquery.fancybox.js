(function($) {

	$.fn.fancybox = function(options) {
	
		var defaults = {
			overlayColor: 'black',
			font: 'Arial'
		};

		var settings = $.extend(defaults, options);

		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;

		function showModal(e) {
			var $href = $link.attr('href');

			var $modal = $('<div class="fancybox-modal"><img src="' + $href + '"></div>');
			var $overlay = $('<div class="fancybox-overlay"></div>');
			$overlay.css({
				'background-color': settings.overlayColor
			});
			e.preventDefault();

			$body.append($overlay);
			$body.append($modal);
			$overlay.on('click', function() {
				$modal.remove();
				$overlay.remove();
			});
		}


		$link.on('click', showModal);

		return this;
	}

})(jQuery);