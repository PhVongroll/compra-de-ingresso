function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if (quantidade <= 0) {
        alert("Quantidade inválida");
        return;
    }

    if (tipo == "pista") {
        quantidade
        comprarPista(quantidade);
    } else if (tipo == "inferior") {
        comprarCadeiraInferior(quantidade);
    } else if (tipo == "superior") {
        comprarCadeiraSuperior(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    if (quantidade > quantidadePista) {
        alert("Quantidade indisponível");
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById("qtd-pista").textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
    }

}

function comprarCadeiraInferior(quantidade) {
    let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (quantidade > quantidadeCadeiraInferior) {
        alert("Quantidade indisponível");
    } else {
        quantidadeCadeiraInferior = quantidadeCadeiraInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = quantidadeCadeiraInferior;
        alert("Compra realizada com sucesso!");
    }

}

function comprarCadeiraSuperior(quantidade) {
    let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (quantidade > quantidadeCadeiraSuperior) {
        alert("Quantidade indisponível");
    } else {
        quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = quantidadeCadeiraSuperior;
        alert("Compra realizada com sucesso!");
    }

}