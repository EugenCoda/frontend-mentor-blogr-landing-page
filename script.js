let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});
