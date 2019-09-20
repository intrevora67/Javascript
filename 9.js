var readline = require('readline-sync')

let number = readline.question("Digite un numero ");

if(number > 0){
    console.log(number + " es positivo");
}else{
    console.log(number + " es negativo");
}