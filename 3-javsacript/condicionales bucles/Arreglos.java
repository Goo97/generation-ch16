public class Arreglos {
    public static void main(String[] args) {
    int[] numerosAleatorios = {1,2,3,4,5,6};
    //los arreglos tienen un tamaño definido
        char[] caracteres = new char[4];//especifica el tamaño
        caracteres[0]= 'h';
        caracteres[1]= 'o';
        caracteres[2]= 'l';
        caracteres[3]= 'a';
//para los arreglos normales, si quieres imprimirlos, tienes que especificar qué parte del arreglo quieres imprimir o te manda dirección en memoria


        for (int elemento :numerosAleatorios
             ) {
            System.out.println(elemento);
        }
    }
}
