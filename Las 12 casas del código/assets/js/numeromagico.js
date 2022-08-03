
let numero = prompt ("Adivina el número entre 0 y 10")
let nmagico = Math.floor(Math.random() * 10);

while (numero == nmagico){
    alert("Ese es");
} 
if (numero < nmagico){
    prompt("Es menor");
} else if (numero > nmagico){
    prompt("Es mayor");
}