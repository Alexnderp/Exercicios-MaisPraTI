const PROMPT = require('prompt-sync')();
const altura = parseFloat(PROMPT('Digite a altura da pessoa (em metros): '));
const sexo = PROMPT('Digite o sexo da pessoa (masculino/feminino): ').toLowerCase();
function pesoIdeal(altura, sexo) {
    if (sexo === 'masculino') {
        return (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
        return (62.1 * altura) - 44.7;
    } else {
        return 'Sexo inválido';
    }
}

console.log(pesoIdeal(altura, sexo).toFixed(2));
