const images = [
    "Cap1/cenario0.png",
    "Cap1/misterio.png",
    "Cap1/dialogo.png",
    "Cap1/tutorial1.png"
];
const texts = [
    "Você entra no Salão do Conselho, mas não encontra ninguém!",
    "Até que aparece uma figura misteriosa. VOZ MISTERIOSA: Então você é o tal Príncipe Alant, filho de Senka!",
    "Rapaz, você não parece nada com seu pai! Olha só, te vi quando era pequenininho. Prazer, sou Alex Word, um dos Grandes Magos, blá blá blá isso tudo você já sabe. Chega de cordialidades, vamos começar seu treinamento!",
    "Enfim, seu coroa, o Rei, pediu para eu te ensinar a arte da criptografia que utilizamos aqui já que irá ficar futuramente em seu lugar. Sou experiente na Cifra de César! Quero ver se você consegue acompanhar pois só explico uma vez!"
];
const buttonLabels = [
    "Então aqui é a sede dos Conselheiros?",
    "Isso, fui enviado pelo meu pai!",
    "Prazer, Sr. Alex!",
    "Vamos começar então!"
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
        
        window.location.href = "Tutorial2.html";
        // Adicione aqui a ação de continuar, como redirecionar para outra página.
    }
});

// Inicializa o carrossel
updateCarousel();
