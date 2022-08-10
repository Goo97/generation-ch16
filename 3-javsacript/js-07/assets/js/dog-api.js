
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

//elementos del dom
const imagenperrito = document.getElementById("imgperrito");

const botonperro =document.getElementById("botonperritos");
botonperro.addEventListener("click",()=>{
    obtenerperroaleatorio(urlAleatorios)
})

async function obtenerperroaleatorio (url){
    const respueta = await fetch(url) ;
    const datos = await respueta.json();
    console.log(datos);
    console.log(datos.message);//la url tal cual, por eso la invocamos. No podemos invocar desde la url original porque es le url de la api, no de la imagen.
    console.log(datos.status);

    imagenperrito.src=datos.message
}
//obtenerperroaleatorio(urlAleatorios);
