var readline = require('readline-sync')

let character = readline.question("Dame una letra S o N");
if(character == "S" || character=="N"){
    console.log("Se acepto correctamente");
}else{
console.log("No se acepto correctamente");
}
