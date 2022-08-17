public class EjemploVariables {
    public static void main(String[] args){
        String nombre ="es tipo string";
        char espacio =' ';//Es tipo primitivo, los caracteres necesitan ''. puedes referenciar mapa de caracteres/UNICODE
        System.out.println(nombre + espacio);
    }
}
//las variables pueden tener un rango máximo y mínimo
//Integer[Float,Double,Boolean]Depende del tipo de dtao que se da  .BYTES.SIZE.MAX_VALUE.MIN_VALUE NOS SIRVEN PARA VER LAS ESPECIFICIDADES DE LA VARIABLE
//El Double tiene un rango mayor que el de tipo flotante en Java.
//Es porque double toma 8 bytes, mientras que float solo usa 4 bytes.
//El tipo de datos Double es más lento que el tipo de datos flotante.
//El tipo de dato Double tiene mayor precisión que el tipo de dato flotante.
//El Double puede tener una precisión de unos 15 dígitos, mientras que el flotante puede tener una precisión de solo seis o siete dígitos.

//long: es el tipo entero de mayor tamaño, 8 bytes (64 bits), con un rango de valores desde -263 a 263-1.