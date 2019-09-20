var readline = require('readline-sync');
let arrayNumbers = new Array(readline.question("Digite un numero para la posicion " ),readline.question("Digite un numero para la posicion 2" ),readline.question("Digite un numero para la posicion 3 " ),readline.question("Digite un numero para la posicion 4 " ),readline.question("Digite un numero para la posicion 5" ));
let higher = 0 ;
let minor =0;

for(let i =0;i<5;i++){
    if(arrayNumbers[i] > arrayNumbers[i+1])
    {
        higher = arrayNumbers[i];
    }else{
        higher = arrayNumbers[i+1];
    }
}

for(let i =0;i<5;i++){
    if(arrayNumbers[i] < arrayNumbers[i+1])
    {
        minor = arrayNumbers[i];
    }else{
        minor = arrayNumbers[i+1];
    }
}
console.log( higher +" es el numero mayor de los cinco numeros ingresados");
console.log(minor + " es el numero menor de los cinco numeros ingresados")