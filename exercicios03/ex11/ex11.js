const Atendimento = require("./Atendimento");

const atendimento = new Atendimento();

atendimento.chegarPaciente("João");
atendimento.exibirFila();
atendimento.chegarPaciente("Maria");
atendimento.exibirFila();
atendimento.chegarPaciente("Pedro");
atendimento.exibirFila();
atendimento.chegarPaciente("Ana");
atendimento.exibirFila();
atendimento.chegarPaciente("Carlos");
atendimento.exibirFila();

atendimento.chamarProximoPaciente();
atendimento.exibirFila();
atendimento.chamarProximoPaciente();
atendimento.exibirFila();
atendimento.chamarProximoPaciente();
atendimento.exibirFila();
