//sort ordena los elementos de un arreglo
const arr = ["s","j","o","f","w"]
console.log(arr);
arr.sort(); //((a,b) => a-b); (b-a)--es para mayor a menor--esto sirve para ordenar los números por su valor completo y no sólo su primer número
console.log(arr);


//Funcion flecha https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//El hoisting solo funciona mientras la funcion no esté declarada en una vraiable

//forEach ()  un ciclo que recorre en automatico todo nuestro arreglo. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



const arrnum = [1,4,6,8,9];
/*
for (let i = 0; i< arrnum.length; i++){
    arrnum[i]=arrnum[i]*2;
}
console.log(arrnum);*/

arrnum.forEach((elemento, index, arre) => 
    console.log(elemento= elemento* 2));

