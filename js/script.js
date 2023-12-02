// script.js

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Chave Pix copiada: " + copyText.value);
}

// Adicione a função para esconder o input quando a página carregar
window.onload = function () {
    var input = document.getElementById("myInput");
    input.classList.add("hidden-input");
};
