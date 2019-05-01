$(function () {
	"use strict"
	$(window).bind("resize", function () {
		const w = $(this).width();
		$("#app").removeClass("toggled", w == 768 || w == 1200);
	});
	$(".sidebar-toggle").click(function () {
		$("#app").toggleClass("toggled");
	});
	$("#sidebar-overlay").click(function () {
		$("#app").removeClass("toggled");
	});
	$("#app-sidebar>.nav-sidebar").niceScroll({
		horizrailenabled: false
	});
	new ResizeSensor(document.getElementById("app-sidebar"), function() {
		$("#app-sidebar>.nav-sidebar").getNiceScroll().resize();
	});
})