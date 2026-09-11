(function () {
  var desktopQuery = window.matchMedia("(min-width: 64em)");

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  var submenuItems = Array.prototype.slice.call(document.querySelectorAll(".has-submenu"));
  var backToTop = document.querySelector(".back-to-top");

  function closeAllSubmenus() {
    submenuItems.forEach(function (item) {
      item.removeAttribute("data-open");
      var toggle = item.querySelector(".submenu-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function closeNav() {
    if (!nav || !navToggle) {
      return;
    }
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (!isOpen) {
        closeAllSubmenus();
      }
    });
  }

  submenuItems.forEach(function (item) {
    var toggle = item.querySelector(".submenu-toggle");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      var shouldOpen = !isOpen;

      closeAllSubmenus();

      if (shouldOpen) {
        item.setAttribute("data-open", "true");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
      return;
    }

    var openItem = document.querySelector('.has-submenu[data-open="true"]');
    if (openItem) {
      closeAllSubmenus();
      var toggle = openItem.querySelector(".submenu-toggle");
      if (toggle) {
        toggle.focus();
      }
      return;
    }

    if (nav && nav.classList.contains("is-open")) {
      closeNav();
      if (navToggle) {
        navToggle.focus();
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".has-submenu")) {
      closeAllSubmenus();
    }

    if (!nav || !navToggle) {
      return;
    }

    if (!desktopQuery.matches && !event.target.closest(".site-header")) {
      closeNav();
    }
  });

  function handleBreakpointChange() {
    closeAllSubmenus();
    closeNav();
  }

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", handleBreakpointChange);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(handleBreakpointChange);
  }

  if (backToTop) {
    var updateBackToTop = function () {
      backToTop.hidden = window.scrollY < 600;
    };

    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();

    backToTop.addEventListener("click", function () {
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }
})();
