import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {
        /*
        * wrappers
        * int - Integer
        * char - Character
        * float - Float
        * double - Double*/
        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>(Arrays.asList("Tacos"));
        comidas.add (0, "Pozole");
        comidas.add ("Elote");
        comidas.add ("Ceviche");
        comidas.add ("Tostadas");
        System.out.println(comidas);

        System.out.println("HashSet");
        Set<String> ciudades = new HashSet<String>();
        ciudades.add ("Cdmx"); //Los acomoda según su manera y no mete valores que ya estaban

        System.out.println("HashMap");
        //Nos permiten guardar pares de valores
        //llave : valor HashMap<K, V>

        Map<Integer, String>alumnos =new HashMap<Integer, String>();
        alumnos.put (1, "Pedro");
        alumnos.put (2, "Miguel");
        alumnos.put (3, "Mario");
        alumnos.put (4, "Azul");
        System.out.println(alumnos.values());
        System.out.println(alumnos.size());
        System.out.println(alumnos.keySet());
        System.out.println(alumnos.get(2));//mandamos llave y regresa valor


        for (int i = 0; i<alumnos.size(); i++){//para recorrer los valores del hash map
            Object llaves = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));
        }
    }
}
