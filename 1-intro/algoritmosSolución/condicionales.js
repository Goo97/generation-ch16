//Control de flujo

let nombre = prompt  ("Escribe tu nombre");
let edad = parseInt  (prompt ("Escribe tu edad"))

if (nombre === "Fernando" || "Luis" && edad===24){
console.log ("Admin perron");
} else if (nombre === "Yahir" && edad===23) {
    console.log("Profe perron")
} else {
console.log ("Eres alguien mas")
}

/*Si la condición se cumple (es decir, 
si su valor es true) se ejecutan todas las 
instrucciones que se encuentran 
dentro de {...}.
*/