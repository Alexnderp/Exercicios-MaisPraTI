

const PROMPT = require('prompt-sync')();
const produtos = [];

function listaMenu() {
    console.log("1 - Cadastrar um novo produto");
    console.log("2 - Listar os produtos cadastrados");
    console.log("3 - Sair");

}

listaMenu();
let opcao = PROMPT("Escolha uma opção: ");

function menu() {


    while (opcao !== "3") {
        switch (opcao) {
            case "1":
                const nome = PROMPT("Digite o nome do produto: ");
                const preco = parseFloat(PROMPT("Digite o preço do produto: "));
                produtos.push({ nome, preco });
                console.log("Produto cadastrado com sucesso!");
                listaMenu();
                opcao = PROMPT("Escolha uma opção: ");
                break;
            case "2":
                console.log("Produtos cadastrados:");
                for (const produto of produtos) {
                    console.log(`\nNome: ${produto.nome}\nPreço: R$${produto.preco.toFixed(2)}\n`);
                }
                listaMenu();
                opcao = PROMPT("Escolha uma opção: ");
                break;
            case "3":
                console.log("Programa encerrado.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                listaMenu();
                opcao = PROMPT("Escolha uma opção: ");
                break;
        }
    }
}

menu();
