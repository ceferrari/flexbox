$(function() {
  "use strict";

  // const CDP = require("chrome-remote-interface");
  // const file = require("fs");
  // const url = "https://www.google.com";
  // const format = "jpeg";
  // const viewportWidth = 800;
  // CDP(async function(client) {
  //   const { DOM, Emulation, Network, Page } = client;
  //   await Page.enable();
  //   await DOM.enable();
  //   await Network.enable();
  //   await Page.navigate({ url });
  //   Page.loadEventFired(async () => {
  //     const {
  //       root: { nodeId: documentNodeId }
  //     } = await DOM.getDocument();
  //     const { nodeId: bodyNodeId } = await DOM.querySelector({
  //       selector: "body",
  //       nodeId: documentNodeId
  //     });
  //     const {
  //       model: { height }
  //     } = await DOM.getBoxModel({ nodeId: bodyNodeId });
  //     const deviceMetrics = {
  //       width: viewportWidth,
  //       height: height,
  //       deviceScaleFactor: 1,
  //       mobile: false,
  //       fitWindow: false
  //     };
  //     await Emulation.setDeviceMetricsOverride(deviceMetrics);
  //     await Emulation.setVisibleSize({ width: viewportWidth, height: height });
  //     const screenshot = await Page.captureScreenshot({ format });
  //     const buffer = new Buffer(screenshot.data, "base64");
  //     file.writeFile("output.png", buffer, "base64", function(err) {
  //       if (err) {
  //         console.error(err);
  //       } else {
  //         console.log("Screenshot saved");
  //       }
  //       client.close();
  //     });
  //   });
  // }).on("error", err => {
  //   console.error("Cannot connect to browser:", err);
  // });

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

  $("#app-sidebar>.nav-sidebar").overlayScrollbars({
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
