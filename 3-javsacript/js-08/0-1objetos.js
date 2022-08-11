let persona={
    nombre:'juan',
    apellido: 'perez',
    edad:10,
    nombrecompleto: function() {
        return this.nombre + ' ' + this.apellido
    }   //también defienes sus métodos
}
console.log(persona.nombrecompleto());

persona.tel='5554269247'
console.log(persona);//se puede sobreescribir


let persona2= new Object ();
persona2.nombre='pedro';
console.log(persona2);


//for in
for (varPropiedad in persona) {
    console.log (persona [varPropiedad]);//hace el recorrido la variable por la sintaxis for in. se puede poner lo que sea en propiedad
}

let personastring= JSON.stringify(persona);
console.log(personastring);//transforma al objeto en json. Es más legible y es string


//get y set permiten acceder a valores o propiedades, sin revelar la forma de implementación de las clases.

let persona3={
    nombre:'juan',
    apellido: 'perez',
    edad:10,
    idioma: 'es',
    get leng (){
        return this.idioma.toUpperCase();//ya se puede llamar desde fuera la función sin mostrar lo demás
    },
    set lang (lang){//no entendí por qué hay parametro
        this.idioma = lang.toLowerCase();//lo cambia para siempre pero se accesó de otra manera antes

    }
}
console.log(persona3.leng);
persona3.lang = 'ES';
console.log(persona3.idioma);