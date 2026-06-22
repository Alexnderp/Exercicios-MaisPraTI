const { Lista } = require('./Lista');
const { Produto } = require('./Produto');


const PROMPT = require('prompt-sync')();
const produtos = new Lista();

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
                produtos.adicionarProduto(new Produto(nome, preco));
                console.log("Produto cadastrado com sucesso!");
                listaMenu();
                opcao = PROMPT("Escolha uma opção: ");
                break;
            case "2":
                console.log("Produtos cadastrados:");
                produtos.imprimirLista();
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
