var readline = require('readline-sync')

console.log();
let number = readline.question("Dame un numero del 0 al infinito.");
for(let i=1; i<=number;i++){
    console.log(i);
}