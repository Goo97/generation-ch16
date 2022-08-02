//Tipos de datos

//Tipos de variables 
//String
let cadena = "hola mundo" //local
var fds = "hols"; //global

//Boolean
let boolean = true;

//Number
let numero = 5; 
 
//Undefined
let warever;

//null
let vacio = null;

//Tempalte strings o literal strings
//Ejemplo: console.log(`Esta es una cadena ${variable+4}`);

//Arrays
let arr = [1, "A", null, undefined, [true, false]];
//Otra forma de escribirlo
let arr2 = new Array ("b", 2);

//Notación de corchetes 
console.log(arr [4][0]);

//objetos
const persona = {nombre: "Fernando",
            edad:24,
            hobbies: ["comer", "dormir"],
            auto: {marca: "VW",
                    moelo: "Pointer"},
            saludar: function (){
                        return "Hola"
                  }
            }
console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);