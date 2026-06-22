const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

function contarStrings(array) {
  const contagem = {};
  for (const item of array) {
    if (contagem[item]) {
      contagem[item]++;
    } else {
      contagem[item] = 1;
    }
  }
  return contagem;
}

const resultado = contarStrings(frutas);
console.log(resultado);