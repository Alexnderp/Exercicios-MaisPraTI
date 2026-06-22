const PROMPT = require("prompt-sync")();

const peso = parseFloat(PROMPT("Digite seu peso em kg: "));
const altura = parseFloat(PROMPT("Digite sua altura em metros: "));

function calcularImc(peso, altura) {
    let classificacao = "";
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }
    console.log(`\nSeu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
}

calcularImc(peso, altura);

