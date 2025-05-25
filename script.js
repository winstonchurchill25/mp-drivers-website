document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      mobileNav.classList.toggle("show");
      document.body.classList.toggle("nav-open");
    });

    // /* Close mobile nav when a link is clicked */
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("show");
        document.body.classList.remove("nav-open");
      });
    });

    /* Close on Escape key */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("show")) {
        mobileNav.classList.remove("show");
        document.body.classList.remove("nav-open");
      }
    });
  }
});
