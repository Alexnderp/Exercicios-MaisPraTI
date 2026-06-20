const relatorioVendas = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "Bruno", valor: 250 },
  { vendedor: "Ana", valor: 150 },
  { vendedor: "Carlos", valor: 300 },
  { vendedor: "Bruno", valor: 50 }
];

function calcularTotalVendas(relatorio) {
    return relatorio.reduce((contador, venda) => {
    const { vendedor, valor } = venda;
    
    contador[vendedor] = (contador[vendedor] || 0) + valor;
    
    return contador;
  }, {}); 
}

const totalVendasPorVendedor = calcularTotalVendas(relatorioVendas);
console.log(totalVendasPorVendedor);