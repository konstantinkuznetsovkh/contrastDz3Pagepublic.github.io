// $(function() {
// 	$('.modal').each(function() {
// 		$(this).wrap('<div class="overlay"></div>');
// 	}),
// 		$('.open-modal').on('click', function(o) {
// 			o.preventDefault(), o.stopImmediatePropagation;
// 			var a = $(this),
// 				e = $(a).data('modal');
// 			$(e).parents('.overlay').addClass('open'),
// 				setTimeout(function() {
// 					$(e).addClass('open');
// 				}, 350),
// 				$(document).on('click', function(o) {
// 					var a = $(o.target);
// 					$(a).hasClass('overlay') &&
// 						($(a).find('.modal').each(function() {
// 							$(this).removeClass('open');
// 						}),
// 						setTimeout(function() {
// 							$(a).removeClass('open');
// 						}, 350));
// 				});
// 		}),
// 		$('.close-modal').on('click', function(o) {
// 			o.preventDefault(), o.stopImmediatePropagation;
// 			var a = $(this),
// 				e = $(a).data('modal');
// 			$(e).removeClass('open'),
// 				setTimeout(function() {
// 					$(e).parents('.overlay').removeClass('open');
// 				}, 350);
// 		});
// });
$(function() {
	$('.modal').each(function() {
		$(this).wrap('<div class="overlay"></div>');
	});

	$('.open-modal').on('click', function(e) {
		e.preventDefault();
		e.stopImmediatePropagation;

		var $this = $(this),
			modal = $($this).data('modal');

		$(modal).parents('.overlay').addClass('open');
		setTimeout(function() {
			$(modal).addClass('open');
		}, 350);

		$(document).on('click', function(e) {
			var target = $(e.target);

			if ($(target).hasClass('overlay')) {
				$(target).find('.modal').each(function() {
					$(this).removeClass('open');
				});
				setTimeout(function() {
					$(target).removeClass('open');
				}, 350);
			}
		});
	});

	$('.close-modal').on('click', function(e) {
		e.preventDefault();
		e.stopImmediatePropagation;

		var $this = $(this),
			modal = $($this).data('modal');

		$(modal).removeClass('open');
		setTimeout(function() {
			$(modal).parents('.overlay').removeClass('open');
		}, 350);
	});
});
