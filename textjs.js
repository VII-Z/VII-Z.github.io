/*menu responsivo*/

document.getElementById('menu-toggle').addEventListener('click', function() {
    const cabecalho = document.querySelector('.cabecalho');
    cabecalho.classList.toggle('responsive');
});

/*carrossel*/

let slideIndex = 0;

function moveCarousel(n) {
const slidesWrapper = document.querySelector('.carousel-wrapper');
const slides = slidesWrapper.children;
const totalSlides = slides.length;
const visibleSlides = 3; // Quantidade de slides visíveis ao mesmo tempo
const slideWidth = 100 / visibleSlides;

slideIndex += n;

// Ajustar slideIndex para que ele rode dentro dos limites
if (slideIndex >= totalSlides) {
slideIndex = 0;
} else if (slideIndex < 0) {
slideIndex = totalSlides - 1;
}

const offset = -slideIndex * slideWidth;
slidesWrapper.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
slidesWrapper.style.transform = `translateX(${offset}%)`;
}

// Funções para os botões
document.querySelector('.prev-button').addEventListener('click', function() {
moveCarousel(-1);
});

document.querySelector('.next-button').addEventListener('click', function() {
moveCarousel(1);
});
