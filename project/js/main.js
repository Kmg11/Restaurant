$(function () {
	// Navbar
	let clicked = false,
		navBtn = $(".nav-btn");
		navItems = $(".list-item");

	navBtn.on("click", function () {
		if (!clicked) {
			clicked = true;

			$(this).toggleClass("show");

			$(".nav-list").toggleClass("show");

			navItems.each(function () {
				$(this).toggleClass("show");
			});

			setTimeout(() => {
				clicked = false;
			}, 900);
		}
	});

	$(window).on("resize", function () {
		if (navItems.hasClass("show")) {
			navBtn.removeClass("show");

			$(".nav-list").removeClass("show");

			navItems.each(function () {
				$(this).removeClass("show");
			});
		}
	});

	// Navbar Scroll
	let navbar = $(".navbar");

	if ($("html, body").scrollTop() >= 100) {
		navbar.addClass("scroll");
	} else {
		navbar.removeClass("scroll");
	}

	$(window).on("scroll", function () {
		if ($("html, body").scrollTop() >= 100) {
			navbar.addClass("scroll");
		} else {
			navbar.removeClass("scroll");
		}
	});

	// Close Navbar When Click Anywhere Out Of The Nav List
	$(".nav-list, .nav-btn").on("click", function (e) {
		e.stopPropagation();
	});

	$(document).on("click", function (e) {
		if (navItems.hasClass("show")) {
			if (e.target !== $(".nav-list") && e.target !== navBtn) {
				navBtn.removeClass("show");

				$(".nav-list").removeClass("show");

				navItems.each(function () {
					$(this).removeClass("show");
				});
			}
		}
	});
});