/* =========================================================================
   AI in Anime — Timeline behavior
   Renders an alternating, clickable timeline from window.TIMELINE_EVENTS,
   with category filtering, scroll-reveal, and an accessible detail dialog.
   ========================================================================= */
(function () {
  "use strict";

  var CATEGORY_COLORS = {
    production: "var(--c-production)",
    tooling: "var(--c-tooling)",
    controversy: "var(--c-controversy)",
    legal: "var(--c-legal)",
    policy: "var(--c-policy)"
  };
  var CATEGORY_LABELS = {
    production: "Production",
    tooling: "Tools & Tech",
    controversy: "Controversy",
    legal: "Legal",
    policy: "Policy"
  };

  var events = (window.TIMELINE_EVENTS || []).slice();
  // Ensure chronological order.
  events.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

  var listEl = document.getElementById("timeline-list");
  var emptyEl = document.getElementById("empty-state");
  var modal = document.getElementById("modal");
  var lastFocused = null;

  /* ---------- hero meta ---------- */
  (function heroMeta() {
    var countEl = document.getElementById("event-count");
    var spanEl = document.getElementById("year-span");
    if (countEl) countEl.textContent = events.length;
    if (spanEl && events.length) {
      spanEl.textContent = events[0].year + " – " + events[events.length - 1].year;
    }
  })();

  /* ---------- render cards ---------- */
  function render(filter) {
    listEl.innerHTML = "";
    var shown = 0;
    events.forEach(function (ev, i) {
      if (filter && filter !== "all" && ev.category !== filter) return;
      shown++;
      var side = i % 2 === 0 ? "left" : "right";
      var color = CATEGORY_COLORS[ev.category] || "var(--grape)";

      var li = document.createElement("li");
      li.className = "t-item " + side;
      li.style.setProperty("--cat-color", color);

      var card = document.createElement("article");
      card.className = "t-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", ev.title + " — open details");
      card.innerHTML =
        '<div class="t-date">' + esc(ev.dateLabel) + "</div>" +
        "<h3>" + esc(ev.title) + "</h3>" +
        '<p class="t-studio">' + esc(ev.studio) + "</p>" +
        '<p class="t-summary">' + esc(ev.summary) + "</p>" +
        '<div class="t-foot">' +
          '<span class="t-tag">' + esc(CATEGORY_LABELS[ev.category] || ev.category) + "</span>" +
          '<span class="t-more">Read more</span>' +
        "</div>";

      function open() { openModal(ev); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });

      var node = document.createElement("span");
      node.className = "node";
      node.style.borderColor = color;

      li.appendChild(card);
      li.appendChild(node);
      listEl.appendChild(li);
    });

    emptyEl.hidden = shown > 0;
    observeReveal();
  }

  /* ---------- scroll reveal ---------- */
  var observer = null;
  function observeReveal() {
    var items = listEl.querySelectorAll(".t-item");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- filters ---------- */
  var filterBar = document.getElementById("filters");
  filterBar.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    filterBar.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
    btn.classList.add("is-active");
    render(btn.getAttribute("data-filter"));
  });

  /* ---------- modal ---------- */
  function openModal(ev) {
    lastFocused = document.activeElement;
    var color = CATEGORY_COLORS[ev.category] || "var(--grape)";
    modal.querySelector(".modal-card").style.setProperty("--cat-color", color);
    document.getElementById("modal-cat").textContent = CATEGORY_LABELS[ev.category] || ev.category;
    document.getElementById("modal-date").textContent = ev.dateLabel;
    document.getElementById("modal-title").textContent = ev.title;
    document.getElementById("modal-studio").textContent = ev.studio;
    document.getElementById("modal-body").textContent = ev.body;

    var srcList = document.getElementById("modal-sources-list");
    srcList.innerHTML = "";
    (ev.sources || []).forEach(function (s) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.label;
      li.appendChild(a);
      srcList.appendChild(li);
    });

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- petals ---------- */
  (function petals() {
    var wrap = document.getElementById("petals");
    if (!wrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colors = ["#ff9ec4", "#ffc2dd", "#d9b8ff", "#a9deff"];
    var N = 18;
    for (var i = 0; i < N; i++) {
      var p = document.createElement("span");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (9 + Math.random() * 10) + "s";
      p.style.animationDelay = (-Math.random() * 12) + "s";
      var s = 0.6 + Math.random() * 0.9;
      p.style.transform = "scale(" + s + ")";
      p.style.opacity = 0.35 + Math.random() * 0.35;
      wrap.appendChild(p);
    }
  })();

  /* ---------- util ---------- */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- init ---------- */
  if (!events.length) {
    emptyEl.hidden = false;
    emptyEl.textContent = "Could not load timeline data.";
  } else {
    render("all");
  }
})();
