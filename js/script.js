document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as imagens da galeria
    const imagensGaleria = document.querySelectorAll('.conteudo-secundario-imagem');
    // Seleciona todos os itens da seção de parceiros
    const imagensParceiros = document.querySelectorAll('.conteudo-parceiros-imagem');

    // Adiciona o evento de clique para as imagens da galeria
    imagensGaleria.forEach(imagem => {
        imagem.addEventListener('click', () => {
            imagem.classList.toggle('ampliada');
            imagem.classList.toggle('ativa');
        });
    });

    // Adiciona o evento de clique para as imagens dos parceiros
    imagensParceiros.forEach(imagem => {
        imagem.addEventListener('click', () => {
            imagem.classList.toggle('ampliada');
            imagem.classList.toggle('ativa');
        });
    });
});
