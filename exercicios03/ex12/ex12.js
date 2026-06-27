const Gerenciador = require("./Gerenciador");

const lista = new Gerenciador();

lista.adicionarTarefa("Estudar JavaScript");
lista.adicionarTarefa("Fazer compras");
lista.adicionarTarefa("Lavar a louça");
lista.adicionarTarefa("Ir à academia");

lista.exibirTarefas();

lista.removerTarefa("Lavar a louça");

lista.exibirTarefas();