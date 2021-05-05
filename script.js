let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
