import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5;
        int o = 4;

        int multi = i * o;
        System.out.println("es " + multi);//se concatena el resultado
        System.out.println("es " + (i * o));//acá primero hace el párentesis y después concatena
        float div = (float) i / (float) o;//Se necesita cambiar  la naturaleza de los parámetros
        System.out.println(div);


        Scanner scanner = new Scanner(System.in);
        System.out.println("cuál es tu nombre y/o edad");
        String dato = scanner.next();
        int edad=Integer.parseInt(dato);
        System.out.println("tu nombre  o edad es " + dato);
    }
}