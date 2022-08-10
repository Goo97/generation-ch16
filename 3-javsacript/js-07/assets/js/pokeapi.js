const urlaconsumir = "https://pokeapi.co/api/v2/pokemon/pikachu"

//elementos del dom



//funciones
async function obtenerpokemon(url) {
    const respuesta = await fetch (url);
    const datos = await respuesta.json ();
    console.log(datos);
    console.log(datos.forms[0].name);
    const pokemon = {
        nombre:datos.forms[0].name,
        habilidades:datos.abilities,
        número:datos.id,
        tipo:datos.types,
        imágen:datos.sprites.other["official-artwork"].front_default,
    }
}