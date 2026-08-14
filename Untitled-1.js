// LÓGICA DE MOVIMIENTO AUTOMÁTICO
const photoTrack = document.getElementById('photoCarouselTrack');
const photoCards = Array.from(photoTrack.children);
let currentPhotoIndex = 0;

function slideNextPhoto() {
  currentPhotoIndex++;
  if (currentPhotoIndex >= photoCards.length) {
    currentPhotoIndex = 0; // Regresa al inicio
  }
  photoTrack.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
}

// Inicia la rotación automática cada 3500ms (3.5 segundos)
let autoSlideInterval = setInterval(slideNextPhoto, 3500);

// Pausa el carrusel al pasar el ratón por encima
const carouselContainer = document.getElementById('carouselContainer');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carouselContainer.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(slideNextPhoto, 3500);
});