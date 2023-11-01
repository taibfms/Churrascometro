let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular() {
    console.log("calculando...")
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    console.log(qtdTotalCarne);

    let qtdTotalFrango = frangoPP(duracao) * adultos + (frangoPP(duracao) / 2 * criancas);
    console.log(qtdTotalFrango)

    let qtdTotalCalabresa = calabresaPP(duracao) * adultos + (calabresaPP(duracao) / 2 * criancas);
    console.log(qtdTotalCalabresa)

    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    console.log(qtdTotalCerveja)

    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)
    console.log(qtdTotalBebidas)

    resultado.innerHTML = `<p>${qtdTotalCarne /1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalFrango / 1000} Kg de Frango</p>`
    resultado.innerHTML += `<p>${qtdTotalCalabresa / 1000} Kg de Calabresa</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/ 2000)} Garrafas de 2 litros</p>`
}


function carnePP(duracao) {
    let carne = 400
    if (duracao  >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function frangoPP(duracao) {
    let frango = 200
    if (duracao  >= 6) {
        return 450;
    } else {
        return 200;
    }
}


function calabresaPP(duracao) {
    let calabresa = 100
    if (duracao  >= 6) {
        return 350;
    } else {
        return 100;
    }
}

function cervejaPP(duracao) {
    let cerveja = 1200
    if (duracao  >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    let bebidas = 1000
    if (duracao  >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}