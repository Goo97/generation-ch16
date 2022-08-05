//1
let filaBanco = ["Sofia", "David", "Juan"];
console.log(filaBanco);

filaBanco.push ("Sara", "Agustin");
console.log(filaBanco);

filaBanco.shift();
console.log(filaBanco);

filaBanco.splice(1,0, "Renata");
console.log(filaBanco);

filaBanco.push ("Elena")
console.log(filaBanco);


//2

let imprimir ="*";
for(let i=0; i<5; i++){
     console.log(imprimir);
    imprimir = imprimir+" *"
}

//3
//Ciclo 1
/* let xValue = 5;
while(xValue >= 0){
    console.log(xValue);
    xValue=xValue-0.5;
} */

//ciclo dos
/* let numero = 0;
while (numero<100){
    numero+=1
    if( numero%2 != 0){ //Si el resto de dividir numero entre 2 es distinto de 0
        console.log(numero);}
}*/

//ciclo 3
/*
let n = 5;
for(let i=1; i<=n; i++){
    console.log(`[${i}]`);  
} 
 */
//ciclo 4
/* let top = 5;
let suma = 0;
for(let i=1; i<=top; i++){ 
    suma = suma + i;
}
console.log(suma); */