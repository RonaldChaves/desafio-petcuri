// Comportamento do NAVBAR

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav a");

// Abre/fecha ao clicar no botão
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link
links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});