class BancoDeDados {
    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    exibirTodosFuncionarios() {
        this.funcionarios.forEach(func => func.exibirInformacoes());
    }
}

exports.BancoDeDados = BancoDeDados;