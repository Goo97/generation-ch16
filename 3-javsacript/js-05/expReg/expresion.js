let texto = "Holis";
let busc = /H/;//mayusculas son diferentes
let buscar = /lis/;
let bus = /[oy]/;//con los corchetes se busca cada uno de los elementos por separado. Trabaja como una disyunción                   
console.log(bus.test(texto));
