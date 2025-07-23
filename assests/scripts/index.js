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

//
function toggleEquipe() {
  const escondidos = document.querySelectorAll('.doctor.hide-mobile');
  const botao = document.querySelector('.show-more-button');
  const visivel = escondidos[0].style.display === 'flex';

  escondidos.forEach(doc => {
    doc.style.display = visivel ? 'none' : 'flex';
  });

  botao.textContent = visivel ? 'Mostrar todos' : 'Mostrar menos';
}

//
function toggleSobre() {
  const textos = document.querySelectorAll('#sobre .hide-mobile');
  const botao = document.querySelector('#sobre .show-more-button i');
  const visivel = textos[0].style.display === 'block' || textos[0].style.display === 'flex';

  textos.forEach(texto => {
    texto.style.display = visivel ? 'none' : 'block';
  });

  // Alterna a rotação da seta
  botao.classList.toggle('rotate', !visivel);
}
