function aleatorio_limite(limite) {
    return Math.floor(Math.random() * (limite + 1)) // 0..limite
}

function recarregar_pagina() {
    window.location.href = window.location.href; // supostamente recarrega o cache junto com a página
    console.log("Página recarregada");
}

function pepe_aleatorio() {
    var pepe = `assets/pepes/pepe_${aleatorio_limite(5)}.png`; // FIXME: melhorar isso
    console.log(pepe)
    document.getElementById('img_pepe').src = pepe
}