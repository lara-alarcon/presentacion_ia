// INDICE ACTUAL Y LISTA DE SLIDES
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// CAMBIA VISIBILIDAD DE DIAPOSITIVAS
function showSlide(index) {
  // RESETEA ESTADO DE TODAS LAS SLIDES
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  
  // ACTIVA DIAPOSITIVA SELECCIONADA
  slides[index].classList.add("active");
}

// AVANZAR DIAPOSITIVA
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// RETROCEDER DIAPOSITIVA
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// CONTROL POR TECLAS DE FLECHA
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

// MOSTRAR PRIMERA DIAPOSITIVA AL CARGAR
window.onload = () => showSlide(0);
