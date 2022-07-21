//calculadora de porcentajes 
/*
function calcularPorcentaje (numero, porcentaje) {
    let resultado= numero * porcentaje;
    console.log (resultado);

    return resultado;

}

let resultadoFuncion= calcularPorcentaje (100, .4)
*/

let numero = (parseInt (prompt ("Pon un número que sea divisible entre 7 y 8")));

if (numero%7 === 000 && numero%8 === 0){
    console.log ("Lo es");
} else {
    console.log ("No lo es. Entre 7 es:" + numero/7 + " y entre 8 es:" + numero/8)
}
