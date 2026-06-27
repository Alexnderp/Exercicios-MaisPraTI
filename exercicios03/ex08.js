const produtos = [
    {
        nome: "Notebook",
        preco: 2500,
        quantidade: 5
    },
    {
        nome: "Smartphone",
        preco: 1500,
        quantidade: 10 
    },
    {
        nome: "Tablet",
        preco: 800,
        quantidade: 7
    },
    {
        nome: "Monitor",
        preco: 1200,
        quantidade: 3
    },
    {
        nome: "Teclado",
        preco: 200,
        quantidade: 15
    }
];

let totalEstoque = 0;
let totalValorEstoque = 0;
produtos.forEach(produto => {
    totalEstoque += produto.quantidade;
    totalValorEstoque += produto.preco * produto.quantidade;
    console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
});
console.log(`Total de itens em estoque: ${totalEstoque}`);
console.log(`Valor total do estoque: R$${totalValorEstoque.toFixed(2)}`);