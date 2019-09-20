var readline = require('readline-sync')

let number = readline.question("Digite un numero ");
if(number%2 ==0)
{
    console.log(number + " es par");
}else{
    console.log(number + " es impar");
}