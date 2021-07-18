var h1 = document.getElementById('hd_1');

h1.addEventListener('mouseover', _mouseOver);
h1.addEventListener('mouseout', _mouseOut);

// funções nativas
function _mouseOver() {
    h1.innerHTML = "Teste";
}

function _mouseOut() {
    h1.innerHTML = "Bem vindo ao troca pepe!"
}

// ajudantes, talvez não deveriam estar client side... 
function aleatorio_limite(limite) {
    return Math.floor(Math.random() * (limite + 1)); // 0..limite
}

// chamadas diretamente
function recarregar_pagina() {
    window.location.href = window.location.href; // supostamente recarrega o cache junto com a página
    console.log("Página recarregada");
}

function pepe_aleatorio() {

    var pepe = `assets/pepes/pepe_${aleatorio_limite(8)}.png`; // FIXME: melhorar isso
    var img_pepe = document.getElementById('img_pepe');
    console.log(pepe);
    img_pepe.src = pepe;
}