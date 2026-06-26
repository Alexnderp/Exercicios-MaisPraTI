const musicas = [
  { id: 1, nome: 'Thunderstruck', banda: 'AC/DC', duracao: 292 },
  { id: 2, nome: 'Back in Black', banda: 'AC/DC', duracao: 255 },
  { id: 3, nome: 'Highway to Hell', banda: 'AC/DC', duracao: 208 },
  { id: 4, nome: 'Enter Sandman', banda: 'Metallica', duracao: 331 },
  { id: 5, nome: 'Nothing Else Matters', banda: 'Metallica', duracao: 388 },
];

for (let musica of musicas) {
  console.log(`Música: ${musica.nome}, Banda: ${musica.banda}, Duração: ${Math.floor(musica.duracao / 60)}:${(musica.duracao % 60)}`);
}
const totalDuracao = musicas.reduce((total, musica) => {
    return total + musica.duracao;
}, 0);
console.log(`Duração total das músicas: ${Math.floor(totalDuracao / 60)}:${(totalDuracao % 60)}`);