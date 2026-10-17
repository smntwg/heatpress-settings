(function () {
  "use strict";

  // At desktop widths the primary nav must always be visible, so keep the
  // <details> menu open there; below 960px it is the tap-to-open Menu.
  var desktop = window.matchMedia("(min-width: 960px)");
  function sync() {
    var menu = document.getElementById("site-menu");
    if (menu) menu.open = desktop.matches;
  }
  sync();
  if (desktop.addEventListener) desktop.addEventListener("change", sync);
  else if (desktop.addListener) desktop.addListener(sync);

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || desktop.matches) return;
    var menu = document.getElementById("site-menu");
    if (menu && menu.open) menu.open = false;
  });
})();
