const images = [
    "Cap1/dialogo2.png",
    "Cap1/cenario.png"
];
const texts = [
    "Sinta-se a vontade, aqui é nossa sala de descanso do conselho, não fizemos uma para o seu pai, pois ele não para por aqui..",
    "Peraí! Mal chegou e já quer sentar no banquinho, calma jovem... aquilo lá não era nada, O Desafio de verdade começa agora!"
];
const buttonLabels = [
    "Nossa que da hora! Logo terei minha sala também.",
    "Então vamos Sr Alex!",

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
        window.location.href = "Alex2.html";
    }
});

// Inicializa o carrossel
updateCarousel();
