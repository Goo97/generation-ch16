//tipo cadena
let cadena= 'Esto es una cadena';
let cadenaobjeto=new String('Todas las clsases llevan mayuscula al inicio. new permite definir de manera clásica a los objetos');
console.log(cadena);
console.log(cadenaobjeto);

//tipo número
let numero=13;
let num_obj=new Number (13.13);
console.log(numero);
console.log(num_obj);

let obj=['2','3','5','7'];
let lista=new Array('1','4','6','8','9');
console.log(obj);
console.log(lista);

//tipo predefinido
let tiempo = new Date();
console.log(tiempo);

let objliteral= {
    nombre:"Juan",
    edad:35,
}

let objconstructor =  new Object();  //es un metodo o funcion que puede o no estar declarado en una clase. En object están todas las clases: clase base.
objconstructor.nombre = 'dora'; //está redefiniendo el atributo 
console.log(objconstructor);
objconstructor.edad = 23;
console.log(objconstructor);

//La abstracción consiste en ocultar los detalles de implementación y resaltar las características esenciales de un objeto para los usuarios. Así es como la incorporación de la abstracción en un programa de JavaScript puede mejorar la legibilidad del código y evitar la duplicación. Al proporcionar sólo los detalles importantes a los usuarios, también mejora la seguridad de una aplicación.

