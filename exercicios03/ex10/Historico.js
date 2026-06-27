class Historico {
    constructor() {
        this.historico = [];
        this.backupHistorico = [];
    }

    visitar(operacao) {
        this.historico.push(operacao);
        this.backupHistorico.push(operacao);
        console.log(`Visitando a operação: ${operacao}`);
    }

    voltar() {
        if (this.historico.length === 0) {
            console.log("Nenhuma operação para voltar.");
            return null;
        } else {
            const ultimaOperacao = this.historico.pop();
            this.backupHistorico.push(ultimaOperacao);
            console.log(`Voltando para a operação: ${ultimaOperacao}`);
            return ultimaOperacao;
        }
    }

    avancar() {
        if (this.historico.length === 0) {
            console.log("Nenhuma operação para avançar.");
            return null;
        } else {
            const proximaOperacao = this.historico.shift();
            this.backupHistorico.push(proximaOperacao);
            console.log(`Avançando para a operação: ${proximaOperacao}`);
            return proximaOperacao;
        }
    }

    paginaAtual() {
        if (this.historico.length === 0) {
            console.log("Nenhuma operação realizada.");
            return null;
        } else {
            return this.historico.at(-1);
        }
    }

    exibirHistorico() {
        if (this.backupHistorico.length === 0) {
            console.log("Nenhuma operação realizada.");
        } else {
            console.log("Histórico de operações:");
            this.backupHistorico.forEach((operacao, index) => {
                console.log(`${index + 1}. ${operacao}`);
            });
        }
    }
}

module.exports = Historico;