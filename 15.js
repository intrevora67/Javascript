var readline = require('readline-sync');

let higher =0;
let minor =0; 
let counter =0;
let counterPar =0;
let  sumOdd =0;
let i =0;
higher = readline.question("Dame el limite superior \n");
minor = readline.question("Dame el limite inferior \n");

for(i = minor; i<=higher; i++){
    console.log(i);
    counter ++;
    if(i%2 ==0){
        counterPar ++;
        
    }else{ // por alguna razon sumOdd se comporta como cadena si lo pongo en el else, pero si lo dejo al principio del if si se comporta como numero 
         (sumOdd += i);
    }
}
console.log("La suma de impares es " + sumOdd);
console.log("Hay " + counter + " numeros en total");
console.log("Hay " + counterPar + " numeros par en total");
