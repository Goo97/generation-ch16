import java.util.HashSet;
import java.util.Set;

public class Colecciobnes2 {
    public static void main(String[] args) {
        Set<String> miSet = new HashSet<>();

        miSet.add ("Juan");
        miSet.add ("Pedro");
        miSet.add ("Luis");
        miSet.add ("Luis");
        miSet.add ("Luis");
        miSet.add ("Luis");
        miSet.remove("Luis");

        System.out.println(miSet.contains("Luis"));
        System.out.println(miSet);

        for (String nombre : miSet){
            System.out.println(nombre);
        }
    }
}
