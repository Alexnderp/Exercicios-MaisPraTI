const PROMPT = require('prompt-sync')();

const valores = [];
let soma = 0;

function mediaAritmetica() {
    let valor = Number(PROMPT("Digite um número (ou '0' para sair' para encerrar): "));

    while (valor != 0) {
        if (!isNaN(Number(valor))) {
            valores.push(valor);
        }
        valor = Number(PROMPT("Digite um número (ou '0' para sair' para encerrar): "));
    }


    if (valores.length > 0) {
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        const media = soma / valores.length;
        console.log(`A média aritmética dos números digitados é: ${media}`);
    } else {
        console.log("Nenhum número foi digitado.");
    }
}

mediaAritmetica();