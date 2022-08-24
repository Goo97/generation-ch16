import java.util.Objects;
import java.util.Scanner; //si ponemos * en vez de la clase importa todas las clases de tipo útil

public class Bucles {
    public static void main(String[] args) {
        //controlado
        for (int i=5; i<10; i++){
            System.out.println(i);
        }

        //no controlado. Corre mientras sea true
        //la condición se debe de modificar desde dentro

        String condicion = "";
        Scanner sc = new Scanner(System.in);

//para calificar los valores en sí se usa objects.equals
        while (! Objects.equals (condicion, "Hola")) {
            System.out.println("Salúdame");
            condicion = sc.next();
        }

//do while ejecuta aunque sea una vez, pero es igual a while
        do{
            System.out.println("Saludame");
            condicion= sc.next();
        }while (! Objects.equals(condicion, "Hola"));
    }
}
