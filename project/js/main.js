$(function () {
	// Nav Btn
	let clicked = false,
		navItems = $(".list-item");

	$(".nav-btn").on("click", function () {
		if (!clicked) {
			clicked = true;

			navItems.each(function () {
				$(this).toggleClass("show")
			});

			setTimeout(() => {
				clicked = false;
			}, 900);
		}
	});

	$(window).on("resize", function () {
		if (navItems.hasClass("show")) {
			navItems.each(function () {
				$(this).removeClass("show");
			});
		}
	});
});