//for (control, condición, modificador)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//for anidados. Cuando la condicion se cumple corre el for anidado hasta su conclusión antes de regresar al primero
for(let i=0; i<5; i++){
    console.log("principal" + i);
    for(j=0; j<i; j++){
        console.log("interno" +j);
    }
}



let sj = 0
while (sj==1) {
    break
}

//Iterar son las veces en las que se ejecuta un ciclo. Do while corre al menos una vez
let numero=0
do {console.log(numero);
    numero++
} while (numero<5);