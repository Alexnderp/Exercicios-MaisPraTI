const PROMPT = require('prompt-sync')();

function fibonacci() {
    let a = 0, b = 1, temp;
    console.log(`10 primeiros numeros da sequência de Fibonacci:`);
    for (let i = 1; i <= 10; i++) {
        console.log(a);
        temp = a;
        a = b;
        b = temp + b;
    }

    
}


fibonacci();