$(function () {
	const scroll_out = function () {
		$("html,body").on("mousewheel", function () {
			return false;
		});
	};
	const scroll_on = function () {
		$("html,body").off("mousewheel", function () {
			
		});
	};
	$(".baton").click(function () {
		$(".popup-container").fadeIn(800, scroll_out);
	});
	$(".popup-container").click(function (event) {
		if (event.target == this) $(this).fadeOut(800, scroll_on);
	});
});
