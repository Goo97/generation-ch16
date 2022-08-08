//son los tres elementos de llamado más utilizados
console.log(document.getElementById("parrafo1").textContent);

//query selector
const parrafo2= document.querySelector (".parrafo");
console.log(parrafo2.textContent);//para hacer referencia a la clase aun así se necesitan las comillas
parrafo2.textContent += "\n Modificar desde javascript"

const parrafos=document.querySelectorAll("p");
console.log(parrafos [2]); 

//modificar atributos html
const enlace = document.getElementById ("enlace");
console.log(enlace);
enlace.href = "https://www.youtube.com"

//reemplazar contenido
const parr4 = document.getElementById("parrafo4");
console.log(parr4.nodeName);//qué tipo de nodo estamos utilizando
console.log(document.body.innerHTML);//muestra el html que hay en el interior del elemento
console.log(parr4.outerHTML);//muestra el contenido del html y el elemento que lo contiene

parr4.innerHTML += '<a href="https://www.google.com">Enlace</a>';//+= mantiene el contenido y agrega lo indicado. Outer reemplazaría todo mientras inner sólo afecta el contenido


parr4.innerHTML= '<div class= "elemento">Este es un div</div>'

//js permite modificar css utilizando style


console.log(parr4.classList.contains("elemento"));//Aunque en el resultado sí está, analiza a la original

parr4.classList.add ('elemento');
console.log(parr4.classList.contains("elemento"));//Ahora sí ya cambia

const cambiarcolor= ()=>{
    parr4.classList.toggle("elemento");
}
cambiarcolor ();//si está prendido lo apaga y al revés. No se ve porque el element está directo en js; línea 26

