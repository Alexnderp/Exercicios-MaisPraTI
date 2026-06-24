const funcionario = {
    nome: "João",
    cargo: "Desenvolvedor",
    salario: 5000,
    AnosDeExperiencia: 3
}

if (funcionario.AnosDeExperiencia <= 2) {
    funcionario.bonusAnual = funcionario.salario * 0.05;
} else if (funcionario.AnosDeExperiencia > 2 && funcionario.AnosDeExperiencia < 5) {
    funcionario.bonusAnual = funcionario.salario * 0.1;
} else {
    funcionario.bonusAnual = funcionario.salario * 0.15;
}

for (let dado in funcionario) {
    console.log(`${dado}: ${funcionario[dado]}`)
}

