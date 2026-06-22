const personagem1 = {
    nome: "Arthur (Guerreiro)",
    vida: 120,
    ataque: 45,
    defesa: 35
};

const personagem2 = {
    nome: "Luna (Maga)",
    vida: 85,
    ataque: 65,
    defesa: 20
};

let poderTotal1 = 0;
let poderTotal2 = 0;

console.log("--- ATRIBUTOS DOS PERSONAGENS LADO A LADO ---");

for (let propriedade in personagem1) {
    console.log(`${propriedade.toUpperCase()}: [P1] ${personagem1[propriedade]}  vs  [P2] ${personagem2[propriedade]}`);
    
    if (propriedade !== "nome") {
        poderTotal1 += personagem1[propriedade];
        poderTotal2 += personagem2[propriedade];
    }
}

console.log("--------------------------------------------");

console.log(`Poder Total de ${personagem1.nome}: ${poderTotal1}`);
console.log(`Poder Total de ${personagem2.nome}: ${poderTotal2}`);

console.log("--------------------------------------------");

if (poderTotal1 > poderTotal2) {
    console.log(`🏆 ${personagem1.nome} tem o maior poder total!`);
} else if (poderTotal2 > poderTotal1) {
    console.log(`🏆 ${personagem2.nome} tem o maior poder total!`);
} else {
    console.log("⚖️ Empate! Ambos os personagens têm o mesmo poder total.");
}