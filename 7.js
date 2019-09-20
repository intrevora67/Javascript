var readline = require('readline-sync')

let option = readline.question("Quieres agregar una frase? opciones validas: si o no ");
let counter = 0;
if(option == "si")
{
    do{
        let phrase = readline.question("Escriba una frase: ");
        counter ++;
        option = readline.question("Quieres agregar otra frase? ");
        }while(option=="si"); 
        console.log(" El numero de frases introducidas fueron: " + counter);
        console.log("Adios");
}else if(option == "no"){
    console.log("Adios");
}else
console.log("Opcion no valida se cerrara el programa por seguridad");



