const aprovados = [];
const reprovados = [];
let mediaAprovados = 0;
let mediaReprovados = 0;
const notas = [{
    nome: 'João',
    nota1: 3,
    nota2: 7,
    nota3: 4

},
{
    nome: 'Maria',
    nota1: 9,
    nota2: 8,
    nota3: 10
},
{
    nome: 'Pedro',
    nota1: 6,
    nota2: 7,
    nota3: 8
},
{
    nome: 'Ana',
    nota1: 10,
    nota2: 3,
    nota3: 4
},
{
    nome: 'Lucas',
    nota1: 7,
    nota2: 8,
    nota3: 9
},
{
    nome: 'Juliana',
    nota1: 8,
    nota2: 9,
    nota3: 8
}
];


for (let aluno of notas) {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

    if (media >= 7) {
        aprovados.push(aluno);
        console.log(`Aluno: ${aluno.nome}, Média: ${media.toFixed(2)} - Aprovado`);
    } else {
        reprovados.push(aluno);
        console.log(`Aluno: ${aluno.nome}, Média: ${media.toFixed(2)} - Reprovado`);
    }
}

for (let aluno of aprovados) {
    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    mediaAprovados += media;
}
mediaAprovados /= aprovados.length;

for (let aluno of reprovados) {
    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    mediaReprovados += media;
}
mediaReprovados /= reprovados.length;

console.log(`Média dos aprovados: ${aprovados.length > 0 ? mediaAprovados.toFixed(2) : 0}`);
console.log(`Média dos reprovados: ${reprovados.length > 0 ? mediaReprovados.toFixed(2) : 0}`);
