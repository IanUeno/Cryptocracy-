const images = [
    "Cap1/dialogo.png",
    "Cap1/dialogo 3.png",
    "Cap1/dialogo 3.png",
    "Cap1/dialogo 3.png",
    "Cap1/dialogo 3.png",
];
const texts = [
    "Alex Word: Vamo nessa Principe Alant, meu novo aluno!",
    "Pythago: A onde pensa que vai Alex, temos reunião Mistral para falar da Nova Emenda 121 do meu Povo, e Preciso do seu comparecimento...",
    "Pythago: Hum... quem é esse? outro Servo Idiota do Senka?    Alex Word: Pythago, esse é o Principe Alant, filho de Senka! ",
    "Pythago: Perdão, é que seu pai tem me trazendo mensageiros horriveis, um mais mula que outro!    Alex Word: Estou ensinado Cifra de César, ele se saiu bem!",
    "Pythago: ..., Principe Alant, venha em meus aposentos ao final do seu passeio, precisa aprendar sobre a Cifra de Polybius. ",
];
const buttonLabels = [
    "Vamos Sr Alex!",
    "...",
    "?",
    "Prazer em conhece-lo Sr Pythago",
    "Certo, Sr Pythago",


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
    
        window.location.href = "Final.html";
    }
});

// Inicializa o carrossel
updateCarousel();
