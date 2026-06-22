const PROMPT = require("prompt-sync")();

function ehTriangulo(a, b, c) {
    const ehTriangulo = (a + b > c) && (a + c > b) && (b + c > a) ? true : false;
    if(ehTriangulo) {
        if (a === b && b === c) {
            console.log("O triângulo é equilátero.");
        } else if (a === b || a === c || b === c) {
            console.log("O triângulo é isósceles.");
        } else {
            console.log("O triângulo é escaleno.");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo.");
    }
}

const ladoA = parseFloat(PROMPT("Digite o comprimento do lado A: "));
const ladoB = parseFloat(PROMPT("Digite o comprimento do lado B: "));
const ladoC = parseFloat(PROMPT("Digite o comprimento do lado C: "));

ehTriangulo(ladoA, ladoB, ladoC);