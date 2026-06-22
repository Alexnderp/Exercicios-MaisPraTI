let n = 7;
let M = [];

for (let i = 0; i < n; i++) {
    M[i] = [];
    for (let j = 0; j < n; j++) {
        if (i === j) {
            M[i][j] = 1;
        } else {
            M[i][j] = null;
        }
    }
}


for (let i = 0; i < n; i++) {
    let linha = '';
    for (let j = 0; j < n; j++) {
        linha += M[i][j] + ' ';
    }
    console.log(linha);
}
