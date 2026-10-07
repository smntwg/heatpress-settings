(function () {
  "use strict";

  var form = document.getElementById("cost-form");
  var output = document.getElementById("cost-result");
  if (!form || !output) return;

  function money(pounds) {
    var sign = pounds < 0 ? "-" : "";
    return sign + "£" + Math.abs(pounds).toFixed(2);
  }

  function pence(pounds) {
    return (pounds * 100).toFixed(2) + "p";
  }

  function read(id) {
    var value = parseFloat(document.getElementById(id).value);
    return isFinite(value) ? value : NaN;
  }

  function render() {
    var blank = read("blank");
    var transfer = read("transfer");
    var watts = read("watts");
    var seconds = read("seconds");
    var warmup = read("warmup");
    var batch = read("batch");
    var unit = read("unit");
    var minutes = read("minutes");
    var rate = read("rate");
    var sell = read("sell");

    var values = [blank, transfer, watts, seconds, warmup, batch, unit, minutes, rate];
    if (values.some(function (value) { return !isFinite(value) || value < 0; }) || batch < 1) {
      output.textContent = "Enter zero or a positive number in every field. The batch needs at least one shirt.";
      return;
    }
    if (isFinite(sell) && sell < 0) {
      output.textContent = "Selling price cannot be negative. Leave it empty if you are not pricing a sale.";
      return;
    }

    var pressHours = seconds / 3600;
    var warmupHoursEach = (warmup / 60) / batch;
    var kwh = (watts / 1000) * (pressHours + warmupHoursEach);
    var electricity = kwh * (unit / 100);
    var labour = (minutes / 60) * rate;
    var each = blank + transfer + electricity + labour;

    output.replaceChildren();
    var grid = document.createElement("div");
    grid.className = "totals";
    [
      ["Blank", money(blank)],
      ["Vinyl or transfer", money(transfer)],
      ["Electricity", electricity < 0.01 ? pence(electricity) : money(electricity)],
      ["Your time", money(labour)],
      ["Cost per shirt", money(each)]
    ].forEach(function (pair) {
      var cell = document.createElement("div");
      cell.className = "total";
      var label = document.createElement("span");
      label.textContent = pair[0];
      var strong = document.createElement("strong");
      strong.textContent = pair[1];
      cell.append(label, strong);
      grid.appendChild(cell);
    });

    if (isFinite(sell)) {
      var profit = sell - each;
      var cell = document.createElement("div");
      cell.className = "total";
      var label = document.createElement("span");
      label.textContent = profit >= 0 ? "Left after costs" : "Short of costs";
      var strong = document.createElement("strong");
      strong.textContent = money(profit);
      cell.append(label, strong);
      grid.appendChild(cell);
    }
    output.appendChild(grid);

    var note = document.createElement("p");
    note.className = "hint";
    note.textContent = "Electricity is " + pence(electricity) + " per shirt (" +
      kwh.toFixed(4) + " kWh). Warm-up is shared across " + batch +
      " shirt" + (batch === 1 ? "" : "s") + ". The press time itself is usually the small part. Blanks and your time are not. VAT is not added.";
    output.appendChild(note);
  }

  form.addEventListener("input", render);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    render();
  });
  render();
})();
