var readline = require('readline-sync');

let character;
let phrase = '';
let counter =0;
character = readline.question("Que letra quieres buscar? \n");
phrase = readline.question("Introduce una palabra \n");

for(let i=0; i<=phrase.length; i++)
{
    if(character == phrase[i]){
        counter++;
    }
}

console.log("La letra " + character + " aparece " + counter + " en la palabra " + phrase);