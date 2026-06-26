/* Standalone drifting-sakura-petal background (used by about.html). */
(function () {
  "use strict";
  var wrap = document.getElementById("petals");
  if (!wrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var colors = ["#ff9ec4", "#ffc2dd", "#d9b8ff", "#a9deff"];
  for (var i = 0; i < 18; i++) {
    var p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = (9 + Math.random() * 10) + "s";
    p.style.animationDelay = (-Math.random() * 12) + "s";
    p.style.transform = "scale(" + (0.6 + Math.random() * 0.9) + ")";
    p.style.opacity = 0.35 + Math.random() * 0.35;
    wrap.appendChild(p);
  }
})();
