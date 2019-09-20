
let sumPar = 0;
let sumOdd = 0;
for(let i =0; i<=100; i++)
{
if(i%2 ==0)
{
   sumPar +=i;
}else{
    sumOdd +=i;
}
}
console.log("La suma de todos los pares de 1 a 100 es " + sumPar);
console.log("La suma de todos los impares de 1 a 100 es " + sumOdd);