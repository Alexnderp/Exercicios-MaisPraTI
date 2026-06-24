const PROMPT = require('prompt-sync')();

const inventario = {
    espada: 10,
    escudo: 5,
    pocao: 20,
    armadura: 15,
    vasilhame: 8,
    ervaDeCura: 12
};

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}
let itemEscolhido = PROMPT("Digite o nome do item que deseja utilizar ou 0 para sair: ");
while (itemEscolhido != 0) {

    switch (inventario.hasOwnProperty(itemEscolhido)) {
        case true:
            inventario[itemEscolhido] -= 1;
            console.log(`Quantidade de ${itemEscolhido}: ${inventario[itemEscolhido]}`);
            break;
        default:
            console.log(`O item "${itemEscolhido}" não está no inventário.`);
            break;
    }

    if (inventario[itemEscolhido] < 0) {
        console.log(`O item "${itemEscolhido}" está esgotado!`);
    }
    itemEscolhido = PROMPT("Digite o nome do item que deseja utilizar: ");


}
