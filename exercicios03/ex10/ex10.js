const Historico = require("./Historico");

const navegador = new Historico();

navegador.visitar("Página Inicial");
navegador.visitar("Página de Sobre");
navegador.visitar("Página de Contatos");
navegador.visitar("Página de Serviços");


navegador.voltar();
navegador.voltar();
navegador.avancar();
navegador.avancar();
navegador.visitar("Página de Produtos");

navegador.paginaAtual();
navegador.exibirHistorico();
