document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#imagens .conteudo-secundario-imagem");
    const overlay = document.createElement("div");
    const overlayImage = document.createElement("img");
    let currentIndex = 0;
    let interval;

    // Configuração do contêiner de sobreposição
    overlay.classList.add("overlay");
    overlay.appendChild(overlayImage);
    document.body.appendChild(overlay);

    // Função para mostrar a imagem no overlay
    function showOverlayImage(src) {
        overlayImage.src = src;
        overlay.style.display = "flex";
    }

    // Função para ocultar o overlay
    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
    });

    // Função para o carrossel automático
    function startCarousel() {
        interval = setInterval(function () {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 3000); // 3 segundos por imagem
    }

    // Inicializar carrossel
    startCarousel();

    // Clique em uma imagem para abrir o overlay
    images.forEach(image => {
        image.addEventListener("click", function () {
            showOverlayImage(image.src);
        });
    });
});
