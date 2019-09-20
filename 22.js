var readline = require('readline-sync');

let phrase;
let spacebar = "";

phrase = readline.question("Dame una frase a repetir \n");

for(let i=0; i<5; i++)
{
    spacebar += "   ";
    console.log(spacebar + phrase);
}