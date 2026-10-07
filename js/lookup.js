(function () {
  "use strict";

  var form = document.getElementById("lookup-form");
  var result = document.getElementById("lookup-result");
  if (!form || !result || !window.HP_SETTINGS) return;

  var data = window.HP_SETTINGS;
  var methodEl = document.getElementById("method");
  var vinylEl = document.getElementById("vinyl");
  var vinylWrap = document.getElementById("vinyl-field");
  var materialEl = document.getElementById("material");

  function option(value, label) {
    var el = document.createElement("option");
    el.value = value;
    el.textContent = label;
    return el;
  }

  function fillMethods() {
    methodEl.replaceChildren();
    data.methods.forEach(function (method) {
      methodEl.appendChild(option(method.id, method.label));
    });
  }

  function fillVinyl() {
    vinylEl.replaceChildren();
    data.vinylTypes.forEach(function (vinyl) {
      vinylEl.appendChild(option(vinyl.id, vinyl.label));
    });
  }

  function materialsFor(methodId) {
    return data.materials.filter(function (material) {
      return material.methods.indexOf(methodId) !== -1;
    });
  }

  function fillMaterials(methodId, preferred) {
    var materials = materialsFor(methodId);
    materialEl.replaceChildren();
    materials.forEach(function (material) {
      materialEl.appendChild(option(material.id, material.label));
    });
    if (preferred && materials.some(function (material) { return material.id === preferred; })) {
      materialEl.value = preferred;
    }
  }

  function findRecord(methodId, vinylId, materialId) {
    return data.records.find(function (record) {
      if (record.method !== methodId || record.material !== materialId) return false;
      if (methodId === "htv") return record.vinyl === vinylId;
      return true;
    });
  }

  function params() {
    return new URLSearchParams(window.location.search);
  }

  function syncUrl() {
    var next = new URLSearchParams();
    next.set("method", methodEl.value);
    if (methodEl.value === "htv") next.set("vinyl", vinylEl.value);
    next.set("material", materialEl.value);
    var path = window.location.pathname + "?" + next.toString();
    window.history.replaceState(null, "", path);
  }

  function cardCountClass(count) {
    if (count >= 3) return "cards three";
    if (count === 2) return "cards two";
    return "cards";
  }

  function renderExample(example) {
    var card = document.createElement("article");
    card.className = "card";
    var title = document.createElement("h3");
    title.textContent = example.name;
    card.appendChild(title);

    var stats = document.createElement("dl");
    stats.className = "stats";
    [
      ["Temperature", null],
      ["Time", example.time],
      ["Pressure", example.pressure],
      ["Peel", example.peel]
    ].forEach(function (pair) {
      var dt = document.createElement("dt");
      dt.textContent = pair[0];
      var dd = document.createElement("dd");
      if (pair[0] === "Temperature") {
        dd.append(example.tempC + "°C");
        var f = document.createElement("span");
        f.className = "temp-f";
        f.textContent = "(" + example.tempF + "°F)";
        dd.appendChild(f);
      } else {
        dd.textContent = pair[1];
      }
      stats.append(dt, dd);
    });
    card.appendChild(stats);

    if (example.tempNote) {
      var note = document.createElement("p");
      note.className = "temp-note";
      note.textContent = example.tempNote;
      card.appendChild(note);
    }
    if (example.detail) {
      var detail = document.createElement("p");
      detail.className = "detail";
      detail.textContent = example.detail;
      card.appendChild(detail);
    }
    if (example.sourceUrl) {
      var line = document.createElement("p");
      line.className = "source-line";
      var link = document.createElement("a");
      link.href = example.sourceUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = example.sourceLabel || "Source";
      line.append(link);
      var extra = document.createElement("span");
      extra.className = "visually-hidden";
      extra.textContent = " (opens in a new tab)";
      line.append(extra);
      card.appendChild(line);
    }
    return card;
  }

  function render() {
    var methodId = methodEl.value;
    var vinylId = vinylEl.value;
    var materialId = materialEl.value;
    vinylWrap.hidden = methodId !== "htv";
    vinylEl.disabled = methodId !== "htv";

    var record = findRecord(methodId, vinylId, materialId);
    result.replaceChildren();
    if (!record) {
      var missing = document.createElement("p");
      missing.textContent = "That combination is not in the chart yet. Check the instructions that came with the vinyl, film or blank.";
      result.appendChild(missing);
      return;
    }

    var summary = document.createElement("p");
    summary.className = "result-summary";
    summary.textContent = record.summary;
    result.appendChild(summary);

    if (record.caution) {
      var caution = document.createElement("div");
      caution.className = record.unsuitable ? "unsuitable" : "caution";
      var cautionText = document.createElement("p");
      cautionText.textContent = record.caution;
      caution.appendChild(cautionText);
      result.appendChild(caution);
    }

    if (record.examples && record.examples.length) {
      var cards = document.createElement("div");
      cards.className = cardCountClass(record.examples.length);
      record.examples.forEach(function (example) {
        cards.appendChild(renderExample(example));
      });
      result.appendChild(cards);
    }

    if (record.guide || (record.links && record.links.length)) {
      var list = document.createElement("ul");
      list.className = "more-links";
      if (record.guide) {
        var guideItem = document.createElement("li");
        var guideLink = document.createElement("a");
        guideLink.href = record.guide;
        guideLink.textContent = "Read the full guide";
        guideItem.appendChild(guideLink);
        list.appendChild(guideItem);
      }
      (record.links || []).forEach(function (item) {
        if (item.href === record.guide) return;
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        list.appendChild(li);
      });
      result.appendChild(list);
    }

    var reviewed = document.createElement("p");
    reviewed.className = "hint";
    reviewed.textContent = "Manufacturer charts checked " + data.reviewed + ". These are starting points. Test on a scrap. A press dial is often not the real platen temperature.";
    result.appendChild(reviewed);
  }

  fillMethods();
  fillVinyl();

  var initial = params();
  var methodId = initial.get("method");
  if (methodId && data.methods.some(function (method) { return method.id === methodId; })) {
    methodEl.value = methodId;
  } else {
    methodEl.value = "htv";
  }
  fillMaterials(methodEl.value, initial.get("material") || "cotton");
  var vinylId = initial.get("vinyl");
  if (vinylId && data.vinylTypes.some(function (vinyl) { return vinyl.id === vinylId; })) {
    vinylEl.value = vinylId;
  } else {
    vinylEl.value = "standard";
  }

  methodEl.addEventListener("change", function () {
    fillMaterials(methodEl.value, materialEl.value);
    render();
    syncUrl();
  });
  vinylEl.addEventListener("change", function () {
    render();
    syncUrl();
  });
  materialEl.addEventListener("change", function () {
    render();
    syncUrl();
  });

  render();
})();
