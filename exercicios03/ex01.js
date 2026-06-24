const produto = {
    nome: 'Caneta',
    preco: 1.99,
    categoria: 'Material Escolar',
    quantidadeEmEstoque: 100

}

for (let item in produto) {
    console.log(`${item}: ${produto[item]}`)
}

produto.desconto = 0.1
console.log(`Valor com desconto: ${(produto.preco * (1 - produto.desconto)).toFixed(2)}`);
