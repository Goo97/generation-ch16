class persona {
    constructor (nombre, apellido){//están encapsulados por el consteructor
        this.nombre = nombre;
        this.apellido= apellido;
    }
    get nombre (){
        return this._nombre;//el guion lo hace público
    }
set _nombre(nombre){
    this._nombre = nombre;
}
}
let persona1 = new persona ('jose', 'perez');
console.log(persona1);

persona


class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }
}

/*let persona1 = new Persona('David','Castellanos');

console.log(persona1);

persona1.nombre = 'David Guzman'

console.log(persona1.nombre);

let persona2 = new Persona ('Arturo', 'Guzman');
console.log(persona2);
*/