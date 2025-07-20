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

// Indicador de rolagem
window.onscroll = function () {
    const indicator = document.getElementById("scrollIndicator");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    indicator.style.width = scrolled + "%";
}