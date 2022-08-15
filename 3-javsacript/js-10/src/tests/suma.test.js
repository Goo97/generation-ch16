const suma= require('../js/suma');

test ('sumar 1+2 debe de ser 3', ()=>{
    expect (suma(1,2)) .toBe (4);//.not.toBe
})