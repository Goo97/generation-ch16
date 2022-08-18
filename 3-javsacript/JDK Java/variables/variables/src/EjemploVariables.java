/*public class EjemploVariables {
    public static void main(String[] args){
        String nombre ="es tipo string";
        char espacio =' ';//Es tipo primitivo, los caracteres necesitan ''. puedes referenciar mapa de caracteres/UNICODE
        System.out.println(nombre + espacio);
    }
}*/
//las variables pueden tener un rango máximo y mínimo
//Integer[Float,Double,Boolean]Depende del tipo de datao que se da  .BYTES.SIZE.MAX_VALUE.MIN_VALUE NOS SIRVEN PARA VER LAS ESPECIFICIDADES DE LA VARIABLE
//El Double tiene un rango mayor que el de tipo flotante en Java.
//Es porque double toma 8 bytes, mientras que float solo usa 4 bytes.
//El tipo de datos Double es más lento que el tipo de datos flotante.
//El tipo de dato Double tiene mayor precisión que el tipo de dato flotante.
//El Double puede tener una precisión de unos 15 dígitos, mientras que el flotante puede tener una precisión de solo seis o siete dígitos.

//long: es el tipo entero de mayor tamaño, 8 bytes (64 bits), con un rango de valores desde -263 a 263-1.


public class EjemploVariables {
    public static void main(String[] args) {

        //Declaración de variables String y caracter:
        String nombre = "Hugo";
        String saludo = "Hola esto es un ejemplo de variables";
        char espacio = '\u0040';
        char caracter ='a';

        System.out.println("espacio =" + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("Char corresponde en bits: " +Character.SIZE);
        System.out.println("Char valor maximo: " +Character.MAX_VALUE);
        System.out.println("Char valor minimo: " +Character.MIN_VALUE);

        //Declaración de variables numericas:
        int numeroEntero = 2;

        System.out.println("numeroEntero =" + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " +Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        //Declaración de variables float

        float numeroFloat =1;
        System.out.println("numeroFloat =" + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.1415361516;
        System.out.println("Numero Double = " + numeroDouble);

        boolean valorBoolean = (2 + 3 == 5 );
        System.out.println("Boolean = " + valorBoolean);

        long valorLong = 8980;
        System.out.println("Long =" + valorLong);
        System.out.println("Long corresponde en byte: " + Long.BYTES);
        System.out.println("Long corresponde en bits: " + Long.SIZE);
        System.out.println("Long valor maximo: " + Long.MAX_VALUE);
        System.out.println("Long valor minimo: " + Long.MIN_VALUE);

        short valorShort = 1;
        System.out.println("Short =" + valorShort);
        System.out.println("Short corresponde en byte: " + Short.BYTES);
        System.out.println("Short corresponde en bits: " + Short.SIZE);
        System.out.println("Short valor maximo: " + Short.MAX_VALUE);
        System.out.println("Short valor minimo: " + Short.MIN_VALUE);
    }

}

