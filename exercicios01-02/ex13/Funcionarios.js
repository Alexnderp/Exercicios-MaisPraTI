class Funcionarios {
    constructor(matricula, nome, salario) {
        this.matricula = matricula;
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalarioLiquido() {
        const desconto = this.salario * 0.12;
        return this.salario - desconto;
    }

    exibirInformacoes() {
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário Bruto: R$ ${this.salario.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${ (this.salario * 0.12).toFixed(2) }`);
        console.log(`Salário Líquido: R$ ${this.calcularSalarioLiquido().toFixed(2)}`);
    }
}

exports.Funcionarios = Funcionarios;