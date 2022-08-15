const palindromo = (palabra)=>{
    let palabrainvertida= palabra.split('').reverse().join('');
    return palabra === palabrainvertida ? 'Es un palindromo' : 'No es un palindromo';

}
//actua como: (condicion)? if : else
//console.log((palindromo ('anita lava la tina')));
module.exports= palindromo;