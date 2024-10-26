function sobreporImagem() {
    // Seleciona a seção de imagens
    const secaoImagens = document.getElementById("imagens");

    // Cria um novo elemento <img> para a imagem a ser sobreposta
    const imagemSobreposta = document.createElement("img");
    imagemSobreposta.src = "img/sua-imagem.png"; // Substitua pelo caminho da sua imagem
    imagemSobreposta.alt = "Imagem sobreposta";
    imagemSobreposta.classList.add("overlay-image");

    // Adiciona a imagem como filha do elemento da seção
    secaoImagens.appendChild(imagemSobreposta);
}

// Chama a função sobreporImagem ao carregar a página
window.onload = sobreporImagem;
