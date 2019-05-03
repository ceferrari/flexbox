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

  $("#app-overlay").click(function() {
    $("#app").removeClass("toggled");
  });

  $("#app-sidebar>.nav-sidebar").niceScroll({ horizrailenabled: false });

  new ResizeSensor(document.getElementById("app-sidebar"), function() {
    $("#app-sidebar>.nav-sidebar")
      .getNiceScroll()
      .resize();
  });

  $(".nav-item>.nav-link").click(function() {
    $(".nav-item.has-sub.open")
      .not($(this).closest(".has-sub"))
      .removeClass("open")
      .children(".nav-sub")
      .slideUp("slow");
    if (
      $(this)
        .parent()
        .hasClass("has-sub")
    ) {
      $(this)
        .parent()
        .toggleClass("open")
        .children(".nav-sub")
        .slideToggle("slow");
    } else {
      $(".nav-item>.nav-link.active").removeClass("active");
      $(this)
        .addClass("active")
        .closest(".has-sub")
        .children(".nav-link")
        .addClass("active");
      setTimeout(function() {
        $("#app").removeClass("toggled");
      }, 750);
    }
  });
});
