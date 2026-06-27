class Atendimento {
    constructor() {
        this.pacientes = [];
    }

    chegarPaciente(paciente) {
        this.pacientes.push(paciente);
        console.log(`Paciente ${paciente} chegou e foi adicionado à fila.\nTotal de pacientes na fila: ${this.pacientes.length}`);
    }

    chamarProximoPaciente() {
        if (this.pacientes.length === 0) {
            console.log("Não há pacientes na fila.");
            return null;
        } else {
            const proximoPaciente = this.pacientes.shift();
            console.log(`Chamando o próximo paciente: ${proximoPaciente}`);
            return proximoPaciente;
        }
    }


    exibirFila() {
        if (this.pacientes.length === 0) {
            console.log("A fila de pacientes está vazia.");
        } else {
            console.log("Fila de pacientes:");
            this.pacientes.forEach((paciente, index) => {
                console.log(`${index + 1}. ${paciente}`);
            });
            console.log(`Total de pacientes na fila: ${this.pacientes.length}`);
        }
    }
}

module.exports = Atendimento;
