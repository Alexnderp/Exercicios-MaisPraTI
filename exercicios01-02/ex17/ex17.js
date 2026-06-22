const { default: Pessoa } = require("./Pessoa");

const pessoa = new Pessoa("João", 30);
console.log(pessoa.idade);
Pessoa.email = "joao@email.com";
console.log(Pessoa.email);
