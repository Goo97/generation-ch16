const palindromo = require ('../js/palindromo.js');

describe ('Prueba ', ()=>{
    test ('debe regreasar "Es un palindromo" si ingresamos ojo',()=>{
        let mensaje ='Es un palindromo';
        let palabra= 'ojo';

        expect (palindromo(palabra)).toBe(mensaje);
    } )
});