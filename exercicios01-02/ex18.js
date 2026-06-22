const dados = [{
    nome:"João",
    idade:30,
    cidade:"São Paulo",
    contatos:[21999999999, "joao@email.com"],
    grupos:["Amigos", "Família"]
},];

function criarPessoa(nome, idade, cidade, contatos, grupos) {
    dados[dados.length - 1].nome = nome? nome : "";
    dados[dados.length - 1].idade = idade? idade : "";
    dados[dados.length - 1].cidade = cidade? cidade : "";
    dados[dados.length - 1].contatos = contatos? contatos : [];
    dados[dados.length - 1].grupos = grupos? grupos : [];

       
            return (`Nome: ${dados[dados.length - 1].nome}
                Idade: ${dados[dados.length - 1].idade}
                Cidade: ${dados[dados.length - 1].cidade}
                Contatos: ${dados[dados.length - 1].contatos}
                Grupos: ${dados[dados.length - 1].grupos}
            }`);
    
}

console.log(criarPessoa(null, null, null, [21988888888, "maria@email.com"], ["Trabalho", "Estudos"]));





