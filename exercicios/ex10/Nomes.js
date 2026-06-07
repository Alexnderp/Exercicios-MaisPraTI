class Nomes {
    constructor() {
        this.nomes = [];
    }

    adicionarNome(nome) {
        this.nomes.push(nome);
    }

    listarNomes() {
        for (let i = this.nomes.length -1; i >= 0; i--) {
            console.log(this.nomes[i]);
        }
    }
}

export default Nomes;