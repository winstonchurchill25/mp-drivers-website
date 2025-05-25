document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const mobileBackdrop = document.getElementById("mobileBackdrop");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    mobileBackdrop.classList.toggle("show");
    document.body.classList.toggle("nav-open");
  });

  mobileBackdrop.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    mobileBackdrop.classList.remove("show");
    document.body.classList.remove("nav-open");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("show")) {
      mobileNav.classList.remove("show");
      mobileBackdrop.classList.remove("show");
      document.body.classList.remove("nav-open");
    }
  });
});
