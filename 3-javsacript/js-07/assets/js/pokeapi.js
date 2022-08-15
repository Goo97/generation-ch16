/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon");


const idPokemon = document.getElementById("id-pokemon");


const nombrePokemon = document.getElementById("nombre-pokemon");


const listahabilidades = document.getElementById("habilidades");

const listatipos = document.getElementById ("tipos");

const formulario = document.getElementById ("buscadorpokemon");

//Eventos
formulario.addEventListener("submit",(e)=>{
    e.preventDefault ()//perviene que el resto de codigo se corra
    const inpuntpokemon= document.getElementById("busquedapokemon");
    const nuevabusqueda = urlPokemon+inpuntpokemon.value;
    obtenerPokemon(nuevabusqueda);

})


/* Funciones */
async function obtenerPokemon(url) {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  const pokemon = {
    nombre: datos.forms[0].name,
    habilidad: datos.abilities,
    id: datos.id,
    tipos: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default,
  };

  imgPokemon.src = pokemon.imagen;
  idPokemon.textContent = `ID: ${pokemon.id}`;
  nombrePokemon.textContent = pokemon.nombre;
  /*listahabilidades.innerHTML += `<li class="list-group-item">Elemento agregado desde js</li>`*/

  let template = ``
  for (i=0; i< pokemon.habilidad.length; i++){
    const nombrehabilidad = pokemon.habilidad[i].ability.name
    template += `<li class="list-group-item">${nombrehabilidad}</li>`
  }

  listahabilidades.innerHTML = template;


let template2 = ``
pokemon.tipos.forEach ((tipo)=>{
    const nombretipo=tipo.type.name;
    template2 += `<li class="list-group-item">${nombretipo}</li>`
})
listatipos.innerHTML = template2;//para que lo imprima necesitamos esta parte del código
}
