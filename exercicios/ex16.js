const PROMPT = require('prompt-sync')();

let linhas = 6;
let colunas = 8;

let M = [];
const c = []


for (let i = 1; i <= linhas; i++) {
    M[i] = [];
    for (let j = 1; j < colunas; j++) {
        M[i][j] = Math.floor(Math.random() * 21) - 10;
    }
}

for (let i = 1; i <= linhas; i++) {
    let contador = 0;
    for (let j = 1; j <= colunas; j++) {
        if (M[i][j] < 0 && M[i][j] !== 0) {
            contador++;
        }

    }
    c[i] = contador;
}

for (let i = 1; i <= linhas; i++) {
    console.log(`C[${i}] = ${c[i]} Negativo`);
}

