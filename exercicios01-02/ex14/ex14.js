const PROMPT = require('prompt-sync')();
const { BancoDeDados } = require('./BancoDeDados');
const { Habitantes } = require('./Habitantes');
const banco = new BancoDeDados();


function menu() {
    let opcao;

    console.log(`Escolha uma opção:\n
        1 - Cadastrar habitante
        2 - Ver média salarial
        3 - Ver média de filhos
        4 - Ver maior salário
        5 - Ver percentual de salários até R$350
        0 - Sair
        `);
    opcao = parseInt(PROMPT('Digite a opção: '));

    while (opcao !== 0) {
        switch (opcao) {
            case 1:
                const salario = parseFloat(PROMPT('Digite o salário do habitante: '));
                const filhos = parseInt(PROMPT('Digite o número de filhos do habitante: '));
                const habitante = new Habitantes(salario, filhos);
                banco.adicionarHabitante(habitante);
                console.log('Habitante cadastrado com sucesso!');
                break;
            case 2:
                console.log(`Média salarial: R$ ${banco.mediaSalarial().toFixed(2)}`);
                break;
            case 3:
                console.log(`Média de filhos: ${banco.mediaFilhos().toFixed(2)}`);
                break;
            case 4:
                console.log(`Maior salário: R$ ${banco.maiorSalario().toFixed(2)}`);
                break;
            case 5:
                console.log(`Percentual de salários até R$350: ${banco.percentualSalarioAte350().toFixed(2)}%`);
                break;
            default:
                console.log('Opção inválida. Por favor, escolha uma opção válida.');
        }
        console.log(`\nEscolha uma opção:\n
        1 - Cadastrar habitante
        2 - Ver média salarial
        3 - Ver média de filhos
        4 - Ver maior salário
        5 - Ver percentual de salários até R$350
        0 - Sair
        `);
        opcao = parseInt(PROMPT('Digite a opção: '));
    }
    console.log('Saindo do sistema. Até mais!');
}

menu();
    
