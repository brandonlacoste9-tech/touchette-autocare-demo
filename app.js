// Touchette Autocare demo — EN-only site. Mobile menu toggle only.
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
  mainNav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => mainNav.classList.remove("open"))
  );
}
