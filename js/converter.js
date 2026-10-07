(function () {
  "use strict";

  var celsius = document.getElementById("celsius");
  var fahrenheit = document.getElementById("fahrenheit");
  var note = document.getElementById("converter-note");
  if (!celsius || !fahrenheit) return;

  var lock = false;

  function round(value) {
    return Math.round(value * 10) / 10;
  }

  function setNote(c) {
    if (!note || !isFinite(c)) return;
    var usual = round(c * 9 / 5 + 32);
    var text = c + "°C is " + usual + "°F by the usual conversion.";
    if (Math.abs(c - 150) < 0.05) {
      text += " Siser often print 305°F beside 150°C on EasyWeed sheets.";
    }
    if (Math.abs(c - 205) < 0.05) {
      text += " Sawgrass print 400°F beside 205°C on their sublimation chart.";
    }
    note.textContent = text;
  }

  function fromC() {
    if (lock) return;
    var c = parseFloat(celsius.value);
    if (!isFinite(c)) return;
    lock = true;
    fahrenheit.value = String(round(c * 9 / 5 + 32));
    lock = false;
    setNote(c);
    markChip(c);
  }

  function fromF() {
    if (lock) return;
    var f = parseFloat(fahrenheit.value);
    if (!isFinite(f)) return;
    lock = true;
    var c = round((f - 32) * 5 / 9);
    celsius.value = String(c);
    lock = false;
    setNote(c);
    markChip(c);
  }

  function markChip(c) {
    document.querySelectorAll("[data-c]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(Number(button.getAttribute("data-c")) === c));
    });
  }

  celsius.addEventListener("input", fromC);
  fahrenheit.addEventListener("input", fromF);
  document.querySelectorAll("[data-c]").forEach(function (button) {
    button.addEventListener("click", function () {
      celsius.value = button.getAttribute("data-c");
      fromC();
    });
  });
  fromC();
})();
