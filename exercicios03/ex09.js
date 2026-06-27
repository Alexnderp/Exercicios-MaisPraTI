const PROMPT = require("prompt-sync")();
const contatos = [
    {
        nome: "João",
        telefone: "123456789",
        email: "joao@email.com"
    },
    {
        nome: "Maria",
        telefone: "987654321",
        email: "maria@email.com"
    },
    {
        nome: "Pedro",
        telefone: "456789123",
        email: "pedro@email.com"
    },
    {
        nome: "Ana",
        telefone: "789123456",
        email: "ana@email.com"
    },
    {
        nome: "Lucas",
        telefone: "321654987",
        email: "lucas@email.com"
    }
];

contatos.forEach(contato => {
    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
});

const nomeBusca = PROMPT("Digite o nome do contato que deseja buscar: ");
const contatoEncontrado = [];

for (let contato of contatos) {
    if (contato.nome.toLowerCase().includes(nomeBusca)) {
        contatoEncontrado.push(contato);
    }
}


if (contatoEncontrado.length > 0) {
    contatoEncontrado.forEach(contato => {
        console.log(`Contato encontrado: Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
} else {
    console.log("Contato não encontrado.");
}