let slideIndex = 1; // Começa no primeiro slide

// Exibe o primeiro slide ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    
    // Corrige o índice para manter o loop
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostra o slide atual (primeiro ao carregar)
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Muda de slide automaticamente a cada 5 segundos
// setInterval(() => { changeSlide(1); }, 5000);

