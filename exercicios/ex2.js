function classificaIdade(idade) {
    if (idade < 0) {
        return "Idade inválida";
    } else if (idade < 15) {
        return "Criança";
    } else if (idade >= 15 && idade < 18) {
        return "Adolescente";
    } else if (idade >= 18 && idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log(classificaIdade(-2));