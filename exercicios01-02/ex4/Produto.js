 class Produto {

    static id = 0;

    constructor(nome, preco) {
        this.id = Produto.id++;
        this.nome = nome;
        this.preco = preco ? Number(preco) : 0;

    }

    imprimir() {
        console.log(`\nProduto - ${this.id}\nNome: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\n`);
    }
}

export { Produto };