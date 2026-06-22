const PROMPT = require('prompt-sync')();
const nomes = [];
const idades = [];

for (let i = 0; i < 9; i++) {
    const nome = PROMPT('Digite o nome da pessoa: ');
    const idade = parseInt(PROMPT('Digite a idade da pessoa: '));
    nomes[i] = nome;
    idades[i] = idade;
}
function verificarMenor() {

    for (let i = 0; i < idades.length - 1; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}\nIdade: ${idades[i]}`);
        }
    }
}


verificarMenor();