$(function() {
  "use strict";

  $(window).bind("resize", function() {
    const w = $(this).width();
    $("#app").removeClass("toggled", w == 768 || w == 1200);
  });

  $(".back-to-top").click(function() {
    $("#app-content").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".sidebar-toggle").click(function() {
    $("#app").toggleClass("toggled");
  });

  $("#sidebar-overlay").click(function() {
    $("#app").removeClass("toggled");
  });

  $("#app-sidebar>.nav-sidebar").niceScroll({ horizrailenabled: false });

  new ResizeSensor(document.getElementById("app-sidebar"), function() {
    $("#app-sidebar>.nav-sidebar")
      .getNiceScroll()
      .resize();
  });

  $(".has-sub>.nav-link").click(function() {
    $(".has-sub.open")
      .not($(this).parent())
      .removeClass("open")
      .find(".nav-sub")
      .slideUp("slow");
    $(this)
      .parent()
      .toggleClass("open");
    $(this)
      .next(".nav-sub")
      .slideToggle("slow");
  });
});
