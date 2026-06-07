const PROMPT = require('prompt-sync')();

const { Funcionarios } = require('./Funcionarios');
const { BancoDeDados } = require('./BancoDeDados');

const banco = new BancoDeDados();

function menu() {
    let opcao;
    console.log(`Bem vindo ao SysRH\nEscolha a opção desejada:
        1 - Cadastrar Funcionário
        2 - Exibir Informações dos Funcionários
        3 - Sair`);
    opcao = parseInt(PROMPT('Digite a opção: '));

    while (opcao !== 3) {
        switch (opcao) {
            case 1:
                const matricula = PROMPT('Digite a matrícula do funcionário: ');
                const nome = PROMPT('Digite o nome do funcionário: ');
                const salario = parseFloat(PROMPT('Digite o salário do funcionário: '));
                const funcionario = new Funcionarios(matricula, nome, salario);
                banco.adicionarFuncionario(funcionario);
                console.log('Funcionário cadastrado com sucesso!');
                break;
            case 2:
                if (banco.funcionarios.length > 0) {
                    banco.exibirTodosFuncionarios();
                } else {
                    console.log('Nenhum funcionário cadastrado. Por favor, cadastre um funcionário primeiro.');
                }
                break;
            default:
                console.log('Opção inválida. Por favor, escolha uma opção válida.');
        }
        console.log(`\nEscolha a opção desejada:
        1 - Cadastrar Funcionário
        2 - Exibir Informações do Funcionário
        3 - Sair`);
        opcao = parseInt(PROMPT('Digite a opção: '));
    }
    console.log('Saindo do sistema. Até mais!');
}



menu();
