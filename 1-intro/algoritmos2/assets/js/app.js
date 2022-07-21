let arreglos = [1,2,3,4,5];
console.log (arreglos[2]);

//Sustituir 


//Propiedades de los arreglos 
console.log(arreglos.length);

//Metodos
const frutas = ["manzanas","Platanos"]

//.push. Agrega un valor aal final del arreglo 
frutas.push ("Naranjas");
console.log(frutas);

//.pop. Elimina el ultimmo elemento de un array
frutas.pop ();
console.log(frutas);
let elementoBorrado = frutas.pop ();

//podemos saber qué elemento fue borrado
console.log(elementoBorrado);
console.log(frutas);

//unshift. Agrega uno o más elementos al inicio del array
frutas.unshift ("Peras", "Cerezas")
console.log(frutas);

//shift elimina el primer elemento del array 

//Los arrays pueden tener diferentes tipos de valores, así como arrays dentto de los arrays
//A esto se llama arreglo multidimensional
//Para acceder al subconjunto se pone un segundo corchete 
let multi = [1, 2, 3, [1, 2, 3], [1,9,3]];
console.log(multi [3][1]);

//objetos
//nos permiten guardar pares de valores 

const obj = {
    nombre : "Fernando",
    edad : "24",
    color : "prieto",
    hobbies : [ "leer", "correr" ],
};