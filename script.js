(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var sidebar = document.getElementById("sidebar");
  var navLinks = document.querySelectorAll(".navlink");

  // Mobile nav toggle
  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      var isOpen = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        sidebar.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-spy: highlight active nav link based on visible section
  var sections = Array.prototype.map.call(navLinks, function (link) {
    var id = link.getAttribute("data-section");
    return { link: link, el: document.getElementById(id) };
  }).filter(function (s) { return s.el; });

  function setActive() {
    var scrollPos = window.scrollY + 140;
    var current = sections[0];

    sections.forEach(function (s) {
      if (s.el.offsetTop <= scrollPos) {
        current = s;
      }
    });

    sections.forEach(function (s) {
      s.link.classList.toggle("active", s === current);
    });
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        setActive();
        ticking = false;
      });
      ticking = true;
    }
  });

  setActive();
})();
