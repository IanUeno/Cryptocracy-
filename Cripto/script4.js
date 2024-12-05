const images = [
    "Cap1/dialogo.png",
    "Cap1/cenario0.png"
];
const texts = [
    "Parabens Pequeno Principe, e sobre seu Povo, não é nada apenas estou um pouco estressado. Irei relaxar no meu quarto.",
    "O salão novamente fica vazio, você sente um aperto no coração... por que o Sr Alex falou daquela forma sobre seu povo?"
];
const buttonLabels = [
    "Tudo Bem Sr Alex, Já encontro o Sr!",
    "Entrar no Quarto de Alex Word",

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
        window.location.href = "Alex1.html";
    }
});

// Inicializa o carrossel
updateCarousel();
