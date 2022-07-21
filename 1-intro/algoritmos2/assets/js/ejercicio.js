const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

//Escribe un comando para remover a "Juan del arreglo"

//Escribe un comando para agregar a "Luis" al inicio del arreglo

//Escribe el comando para agregar tu nombre al final del arreglo

//Escribe el comando para mostrar la posición de "Maria"

//Escribe el comando para mostrar la posición de tu nombre


personas.splice (1, 1);
console.log(personas);
// o podemos hacer: personas [1]= "Beto" 

personas.splice(2,1)
console.log(personas);

personas.unshift ("Luis")
console.log(personas);

personas.push ("Fernando")
console.log(personas);

console.log(personas.indexOf ("Maria"));
console.log(personas.indexOf ("Fernando"));