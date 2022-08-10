//Variable que simula los fdatos pedidos
const saludo= "hola mundo";
const datos = [
    {
        nombre: "Fer",
        apellido: "Rochin",
    },
    {
        nombre: "Fer",
        apellido: "Rochin",
    },
    {
        nombre: "Fer",
        apellido: "Rochin",
    }
];
function obtenerdatos(){

return new Promise ((resolve, reject)=>{//dentro de una promise (resolve, rejectet)
        setTimeout (()=>{
        resolve (datos)
        }, 2000)
    })
};
//forma 1
obtenerdatos ().then((datos)=>{
    console.log(datos);
});

//Forma2. Funciones asincronas. await async
async function funcionasincrona() {
    const datos = await obtenerdatos ();
    console.log(datos);
}
//se puede usar la estructura try{}catch{} para poner errores que va después de la async funtion
funcionasincrona();