/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/
const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

//elementos del dom
const imagengato = document.getElementById("imggatito");

const botongato =document.getElementById("botongatos");
botongato.addEventListener("click",()=>{
    obtenergatoaleatorio(urlAleatorios)
})

async function obtenergatoaleatorio (url){
    const respueta = await fetch(url) ;
    const datos = await respueta.json();
    
    imagengato.src=datos[0].url
}