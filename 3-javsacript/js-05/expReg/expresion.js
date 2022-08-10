let texto = "Holis 39";
let busc = /H/;//mayusculas son diferentes
let buscar = /lis/;
let bus = /[oy]/;//con los corchetes se busca cada uno de los elementos por separado. Trabaja como una disyunción  
let rango = /[1-5]/;//sirve para buscar ese rango de caracteres     
let corr = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;//para correo electrónico



console.log(rango.test(texto));
