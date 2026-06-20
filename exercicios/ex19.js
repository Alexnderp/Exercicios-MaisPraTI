const obj1 = { marca: "Ford", modelo: "Mustang", ano: 2020 };
const obj2 = { modelo: "Shelby", ano: 2024, cor: "Azul" };


function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const resultado = combinarObjetos(obj1, obj2);
console.log(resultado);