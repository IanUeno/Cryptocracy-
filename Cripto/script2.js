const images = [
    "Inicio/dialogo iniciall.png",
    "Inicio/viagem .png",
    "Inicio/dialogo inicial2.png",
    "Inicio/cenario inicial.png"
];
const texts = [
    "Ele solicita que você assuma seu lugar no Conselho dos Três Grandes Magos, pois está profundamente envolvido na gestão de questões críticas que afligem sua região",
    "Ao aceitar o pedido de seu pai, você inicia sua jornada rumo a Cifrasland, determinado a não apenas cumprir a missão designada, mas também a expandir seus conhecimentos sobre criptografia, desvendando técnicas avançadas que poderão moldar o futuro de sua nação.",
    "Salan: Enfim chegamos em cifrasland hehehe, eu so posso lhe guiar ate aqui, o resto é por sua conta. O destino de nossa nação está agora em suas mãos.",
    "Bem-vindo a Cifrasland! Apos a sua chegada, voce encontra a grande entrada para o conselho e se prepara para os desafios que estão por vir."
];
const buttonLabels = [
    "Continuar",
    "Seguir jornada",
    "Certo, obrigado Salan!",
    "Entrar no Conselho"
];

let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const textElement = document.getElementById("carousel-text");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

// Atualiza a imagem, texto e rótulo do botão "Próximo"
function updateCarousel() {
    imageElement.src = images[currentIndex];
    textElement.textContent = texts[currentIndex];
    nextButton.textContent = buttonLabels[currentIndex];

    // Mostra/oculta o botão "Anterior"
    prevButton.style.display = currentIndex === 0 ? "none" : "inline-block";
}

// Adiciona eventos aos botões


nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    } else {
        
        window.location.href = "Tutorial.html";
        // Adicione aqui a ação de continuar, como redirecionar para outra página.
    }
});

// Inicializa o carrossel
updateCarousel();
