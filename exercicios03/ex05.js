const PROMPT = require("prompt-sync")();



const orcamentoMensal = {
    alimentacaoPlanejada: parseFloat(PROMPT("Digite o valor planejado para alimentação: ")),
    alimentacaoGasto: parseFloat(PROMPT("Digite o valor gasto com alimentação: ")),
    transportePlanejada: parseFloat(PROMPT("Digite o valor planejado para transporte: ")),
    transporteGasto: parseFloat(PROMPT("Digite o valor gasto com transporte: ")),
    lazerPlanejada: parseFloat(PROMPT("Digite o valor planejado para lazer: ")),
    lazerGasto: parseFloat(PROMPT("Digite o valor gasto com lazer: ")),
    saudePlanejada: parseFloat(PROMPT("Digite o valor planejado para saúde: ")),
    saudeGasto: parseFloat(PROMPT("Digite o valor gasto com saúde: ")),
    moradiaPlanejada: parseFloat(PROMPT("Digite o valor planejado para moradia: ")),
    moradiaGasto: parseFloat(PROMPT("Digite o valor gasto com moradia: ")),
};

let saldoGeral = 0;
for (let categoria in orcamentoMensal) {
    if (categoria.includes("Planejada")) {
        let categoriaGasto = categoria.replace("Planejada", "Gasto");
        let diferenca = orcamentoMensal[categoria] - orcamentoMensal[categoriaGasto];

        saldoGeral += diferenca;

        let nomeCategoria = categoria.replace("Planejada", "");

        if (diferenca > 0) {
            console.log(`Você economizou R$${diferenca.toFixed(2)} em ${nomeCategoria}.`);
        } else if (diferenca < 0) {
            console.log(`Você gastou R$${Math.abs(diferenca).toFixed(2)} a mais do que o planejado em ${nomeCategoria}.`);
        } else {
            console.log(`Você gastou exatamente o valor planejado em ${nomeCategoria}.`);
        }
    }
}
orcamentoMensal.saldoGeral = saldoGeral;

console.log(`Seu saldo geral do mês é: R$${orcamentoMensal.saldoGeral.toFixed(2)}.`);