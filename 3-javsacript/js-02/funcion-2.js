function mifuncion (a, b){
    return (a+b);
}
let resultado = mifuncion (5, 6);
console.log(resultado);

//Función expresión o anónima 
let suma = function (a,b){return(a+b)};
//Se piden los parámetros directamente en la variable
let resta = function(a,b){console.log(a-b);}
let resultadoresta = resta (10, 5);
let multiplicacion = function(a,b){console.log(a*b);}
let resmult = multiplicacion(10,10);

//self invoking
(function (a,b){
    console.log("El resultado es: " + (a+b));
})(7,7);

