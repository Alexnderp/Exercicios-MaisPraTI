class BancoDeDados {
    constructor() {
        this.habitantes = [];
    }

    adicionarHabitante(habitante) {
        this.habitantes.push(habitante);
    }

    mediaSalarial() {
        if (this.habitantes.length === 0) {
            return 0;
        }
        const totalSalarios = this.habitantes.reduce((total, habitante) => total + habitante.salario, 0);
        return totalSalarios / this.habitantes.length;
    }

    mediaFilhos() {
        if (this.habitantes.length === 0) {
            return 0;
        }
        const totalFilhos = this.habitantes.reduce((total, habitante) => total + habitante.qntFilhos, 0);
        return totalFilhos / this.habitantes.length;
    }

    maiorSalario() {
        if (this.habitantes.length === 0) {
            return 0;
        }
        return Math.max(...this.habitantes.map(habitante => habitante.salario));
    }

    percentualSalarioAte350() {
        if (this.habitantes.length === 0) {
            return 0;
        }
        const countSalariosAte350 = this.habitantes.filter(habitante => habitante.salario <= 350).length;
        return (countSalariosAte350 / this.habitantes.length) * 100;
    }
}

exports.BancoDeDados = BancoDeDados;