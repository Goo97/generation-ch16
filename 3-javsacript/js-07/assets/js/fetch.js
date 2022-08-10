const url = "https://dog.ceo/api/breeds/image/random"


//respuesta de la petición
fetch(url)
.then((respuesta)=>{
    console.log(respuesta);
})

//obtener la info de la petición. Forma1
fetch(url)
.then((respuesta)=> respuesta.json())
.then((datos)=>{
    console.log(datos);
}).catch((error)=>{
    console.log(error);
});

//forma2
async function obtenerperritoaleatorio (){
    try{
    const resp = await fetch (url);
    const datos = await resp.json ();

    console.log(datos);
}catch(error){
    console.log(error);
}
}
obtenerperritoaleatorio();
