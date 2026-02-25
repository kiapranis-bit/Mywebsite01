const slides = document.querySelectorAll('.hero-bg-slider span');
let currentSlide = 0;

slides[currentSlide].classList.add('active');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000); // change every 5 seconds

/* hamburger set up*/
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
