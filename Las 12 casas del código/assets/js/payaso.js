const pesoPayasos = 112
const pesoMuñecas = 75
let ventaPayasos = prompt("Ingresa el número de payasos")
let ventaMuñecas = prompt("Ingresa el número de muñecas")
let pesoPack = ((pesoMuñecas * ventaMuñecas) + (pesoPayasos * ventaPayasos))

numeroPacks= (pesoPack / 1000)

if (numeroPacks < 1){
    alert("Se enviara 1 paquete");
}else if (numeroPacks > 1){
   alert("Se enviaran "+ numeroPacks + " paquetes");
