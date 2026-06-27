class Gerenciador {
    constructor() {
        this.cabeca = null;
    }


    adicionarTarefa(tarefa) {
        const novoNo = { valor: tarefa, proximo: null };

        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        console.log(`+ Tarefa adicionada: "${tarefa}"`);
    }


    removerTarefa(tarefa) {
        if (this.cabeca === null) {
            console.log("A lista está vazia.");
            return;
        }


        if (this.cabeca.valor === tarefa) {
            this.cabeca = this.cabeca.proximo;
            console.log(`- Tarefa removida: "${tarefa}"`);
            return;
        }

        let atual = this.cabeca;
        let anterior = null;


        while (atual !== null && atual.valor !== tarefa) {
            anterior = atual;
            atual = atual.proximo;
        }


        if (atual !== null) {
            anterior.proximo = atual.proximo;
            console.log(`- Tarefa removida: "${tarefa}"`);
        } else {
            console.log(`x Tarefa "${tarefa}" não foi encontrada.`);
        }
    }


    exibirTarefas() {
        if (this.cabeca === null) {
            console.log("Lista de tarefas vazia.");
            return;
        }

        let atual = this.cabeca;
        let resultado = [];

        while (atual !== null) {
            resultado.push(atual.valor);
            atual = atual.proximo;
        }
        for (let i = 0; i < resultado.length; i++) {
            console.log(`${i + 1}. ${resultado[i]}`);
        }
    }
}

module.exports = Gerenciador;