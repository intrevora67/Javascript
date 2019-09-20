
let counter= 0 ;
for(let i=0; i<=100; i++){
    if(i%2 ==0 && i%3 ==0){
        console.log(i + " Es multiplo de dos y tres");
        counter ++;
    }else if(i%2 ==0 || i%3 ==0)
    {
        if(i%2 ==0){
            console.log(i + " es multiplo de dos");
            counter ++;
        }else{
            console.log(i + " es multiplo de tres");
            counter++;
        }
    }
}
console.log("El total de multiplos de 2 y 3 es " + counter);
