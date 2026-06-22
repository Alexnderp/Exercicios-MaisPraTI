const { default: Nomes } = require('./Nomes');

const PROMPT = require('prompt-sync')();
let contador = 0;
const nomes = new Nomes();

while (contador <= 7) {
    let nome = PROMPT('Digite um nome: ');
    nomes.adicionarNome(nome);
    contador++;
    if (contador === 7) {
        nomes.listarNomes();
        break;
    }
}