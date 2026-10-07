(function () {
  "use strict";

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var menu = document.getElementById("site-menu");
    if (menu && menu.open) menu.open = false;
  });
})();
