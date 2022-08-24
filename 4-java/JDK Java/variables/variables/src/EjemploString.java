public class EjemploString {
    public static void main(String[] args) {
        String nombre= "Fer";
        String curso= "curso en java";
        String resultado= new String("curso en java");

        //no van a ser iguales por el tipo de asignación/forma de declarar (literal, referencia)
        boolean esigual= curso==resultado;
        System.out.println(esigual);

        //con equals ya se califica el string en sí mismo. También existe equalsIgnoreCase
        esigual= curso.equals(resultado);
        System.out.println(esigual);
    }

}

