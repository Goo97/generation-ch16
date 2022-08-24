import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {
        //listas arraylist
        //se ordenan según c´pomo los agreguemos
        //hay valores duplicados
        //Es una colección de objetos de un mismo tipo
        List<String> meses= new ArrayList<String>();
        System.out.println(meses);
        meses.add  ("enero");
        meses.add  ("febrero");
        meses.add  ("marzo");

        Integer num2 = 10; //Tendría que ser Integer
//los valores primitivos no pueden ser referenciados
        System.out.println(num2.getClass().getSimpleName());

    }
}
