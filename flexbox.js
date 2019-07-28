$(function() {
  "use strict";

  let w1 = 0;
  $(window).resize(function() {
    w1 = w1 || $(window).width();
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(function() {
      let w2 = $(window).width();
      let c1 = (w1 < 768 && w2 >= 768) || (w1 > 768 && w2 <= 768);
      let c2 = (w1 < 1200 && w2 >= 1200) || (w1 > 1200 && w2 <= 1200);
      if (c1 || c2) $("#app").removeClass("sidebar-toggled");
      w1 = 0;
    }, 300);
  });

  $("#app-sidebar-nav").overlayScrollbars({
    className: "os-theme-light",
    scrollbars: {
      autoHide: "move",
      visibility: "auto"
    }
  });

  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $(".sidebar-toggle").click(function() {
    $("#app").toggleClass("sidebar-toggled");
  });

  $("#app-overlay").click(function() {
    $("#app").removeClass("sidebar-toggled");
  });

  $(".nav-item>.nav-link").click(function() {
    $(".nav-item.has-sub.open")
      .not($(this).closest(".has-sub"))
      .removeClass("open")
      .children(".nav-sub")
      .slideUp();
    if (
      $(this)
        .parent()
        .hasClass("has-sub")
    ) {
      $(this)
        .parent()
        .toggleClass("open")
        .children(".nav-sub")
        .slideToggle();
    } else {
      $(".nav-item>.nav-link.active").removeClass("active");
      $(this)
        .addClass("active")
        .closest(".has-sub")
        .children(".nav-link")
        .addClass("active");
      if ($(window).width() < 768) {
        $("#app").removeClass("sidebar-toggled");
      }
    }
  });
});
