import { Produto } from './Produto.js';

 class Lista {

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    imprimirLista() {
        console.log("Lista de Produtos:");
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];


            if (produto instanceof Produto) {
                produto.imprimir();
            } else {
                console.log("Item inválido na lista.");
            }
        }
    }
}

export { Lista };
