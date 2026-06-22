const PROMPT = require('prompt-sync')();

function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}

const numero = Number(PROMPT("Digite um número para calcular o fatorial: "));
const resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);
