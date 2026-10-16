(function () {
  "use strict";
  var forms = document.querySelectorAll("form.signup-form");
  Array.prototype.forEach.call(forms, function (form) {
    var status = form.querySelector(".signup-status");
    var button = form.querySelector("button");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = form.elements.email.value.trim();
      if (!email) { status.textContent = "Please enter your email address."; return; }
      button.disabled = true;
      status.textContent = "Sending…";
      fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email, website: form.elements.website.value, page: location.pathname })
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (body) {
          if (res.ok && body.ok) {
            form.reset();
            status.textContent = "Done. Check your inbox (and spam) for the cheat sheet link.";
          } else {
            status.textContent = body.error || "Sorry, something went wrong. Please try again later.";
          }
        });
      }).catch(function () {
        status.textContent = "Sorry, something went wrong. Please try again later.";
      }).then(function () { button.disabled = false; });
    });
  });
})();
