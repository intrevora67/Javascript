var readline = require('readline-sync');
let higher =0;
let minor =0; 
let counter =0;
let sumPar = 0;
minor = readline.question("Dame el limite inferior \n");
higher = readline.question("Dame el limite superior \n");

for(i = minor; i<=higher; i++){
if(i%2== 0){
    console.log(i);
counter ++;
sumPar += i;
}
}
console.log("La suma de numeros multiplo de 2 es " + sumPar);
console.log( counter  + " es el total de numeros multiplos de 2");
