const images = [
    "Inicio/inicio1.png",
    "Inicio/inicio2.png",
    "Inicio/inicio3.png"
];
const texts = [
    "Em um Mundo Pós Guerra, Você vive em um grando Reino, dividido por varias Nações que a muito tempo estavam em conflito mas estabeleceram a paz, Seu pai é um dos membros do conselho dos 3 Grandes Magos de Inscript, e o Rei de Poggersland.",
    "Cada Mago do conselho e responsavel pela administração de sua nação, tendo sua sede localizada em Cifrasland.",
    "Você, o nobre herdeiro do Rei Senka e um dedicado estudioso em busca de conhecimento, é chamado por seu pai para atender a um importante pedido."
];

let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const textElement = document.getElementById("carousel-text");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

// Atualiza a imagem e o texto do carrossel
function updateCarousel() {
    imageElement.src = images[currentIndex];
    textElement.textContent = texts[currentIndex];

    // Mostra/oculta botões com base no slide atual
    prevButton.style.display = currentIndex === 0 ? "none" : "inline-block";
    nextButton.textContent = currentIndex === images.length - 1 ? "Continuar" : "Próximo";
}

// Adiciona eventos aos botões
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    } else {
        
        window.location.href = "Aviso2.html";
        // Adicione aqui a ação de continuar, como redirecionar para outra página.
    }
});

// Inicializa o carrossel
updateCarousel();
