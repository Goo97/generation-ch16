//crear un elemento
const imagen= document.createElement("img");
console.log(imagen);

//modificar los atributos del html
imagen.src='https://placeimg.com/640/480/any'

//lo insertamos en un elemento padre
document.body.insertAdjacentElement("afterend",imagen);

//forma correcta de insertar un elemento: se crea un div con la posición que quieres que tenga, seleccionar elemento padre
const padreimg = document.getElementById ("padre");
//crear elemento
const img5= document.createElement("img");
//modificamos los atributos del elemento
img5.src = "https://placeimg.com/200/200/animals"
//insertar elemento
padreimg.appendChild(img5);

//Utilizar foreach para pintar datos
const frutas =["toronja", "naranja","melón","manzana"];
const listafrutas= document.getElementById('frutas');
/* forma 1
frutas.forEach ((element) => {
    const li = document.createElement('li');
    li.textContent = element
    listafrutas.appendChild(li);
})*/

//forma 2
frutas.forEach((el)=>{ //el=element 
    listafrutas.innerHTML=`<li>${el}</li>`//se interpola la variable. Si no, se vería como string
})