
function sumPar(){
    let sumPar =0;
    for(let i=0; i<=1000; i++)
    {
        if(i%2==0)
        {
            sumPar += i;
        }
    }
    console.log("La suma de los pares entre 0 y 1000 es " + sumPar);
}

function sumOdd(){
    let sumOdd =0;
    for(let i=0; i<=1000; i++)
    {
        if(i%2!=0)
        {
            sumOdd += i;
        }
    }
    console.log("La suma de los impares entre 0 y 1000 es " + sumOdd);
}

sumOdd();
sumPar();

