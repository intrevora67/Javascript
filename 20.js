var readline = require('readline-sync');

let number =0;

number = readline.question("Dame un numero para sacarle el factorial\n");

function factorial(number)
{
    let result =1;
for(let i=1;i<=number;i++){
result = result *i; 
}
console.log("El factorial de "+ number + " es " + result);
}
factorial(number);