const headerHamburger = document.querySelector(".header-hamburguer");
const nav = document.querySelector(".nav");

headerHamburger.addEventListener("click", () => nav.classList.toggle("active"));
