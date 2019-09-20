var readline = require('readline-sync')
let counter = 0;
let number = readline.question(" Dame un  numero limite ");
for(let i=1; i<=number; i++){
if (i%3 == 0){
    counter ++;
}
}
console.log("El total de multiplos de 3 que hay entre 0 y "+ number + " es " + counter);