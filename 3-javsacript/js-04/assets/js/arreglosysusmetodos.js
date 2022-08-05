//Los objetos son arreglos con propiedades y métodos (acciones que pueden realizar)
let arreglo=[1,2,3,4,5];
console.log(arreglo[1]);

//Ageregar o modificar
arreglo[4]=10
console.log(arreglo);

//Metodos de arreglo

const arr=[0];

//push empuja un valor al final
arr.push(2);
console.log(arr);

//unshift desplaza a todos los elementos y se incerta al inicio
arr.unshift(7);
console.log(arr);

//pop quita elementos del final y regresa el dato
arr.pop();
console.log(arr);

//shift quita elemento al inicio del arreglo

//splice quita o inserta un elemento de cualquier posicion(posicion,número de elementos que quieres quitar, elemento que quieres insertar, por si quieres poner más)
arr.splice(1,0, "hoklis");
console.log(arr);


//Métodos que no modifican el arreglo original, hacen una copia
//slice corta parte de un arreglo para hacer algo con esa copia (desde donde quieres cortar [o copiar más bien], cuantos elementos cortarás)
//Tienes que hacer una variable si quieres visualizar la copia
let vv = arr.slice(1,2);
console.log(vv);

