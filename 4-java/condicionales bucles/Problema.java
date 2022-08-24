import java.util.Scanner;

public class Problema {
    public static void main(String[] args) {
        /*
            Problema 1
            La salida tiene que ser la siguiente:
            *
            **
            ***
            ****
            *****

            Problema 2
            *****
            ****
            ***
            **
            *

            Problema 3
            Pedirle al usuario la cantidad de estrellitas y la direccion
        */
        String[] problema1 = {"*", "**", "***", "****", "*****"};
        String[] problema2 = {"*****", "****", "***", "**", "*"};
        String[] problema3 = {" ","*", "**", "***", "****", "*****"};
        for (String elementos1 : problema1) {
            System.out.println(elementos1);
        }
        for (String elementos2 : problema2) {
            System.out.println(elementos2);
        }

            Scanner sc = new Scanner(System.in);

            System.out.println("Cuantas estrellas quieres?");
            int condicion= Integer.parseInt(sc.next());
        System.out.println(problema3[condicion]);
        }
    }
/*
* //Ejercicio 1
    String dibujo = "*";
    int nivel = 5;
    for (int i = 0; i <nivel ; i++) {

        System.out.println(dibujo);
        dibujo = dibujo+"*";

    }
    String dibujo2="";
    //Ejercicio 2
    while(nivel != 0){
        for (int i = 0; i < nivel ; i++) {
            dibujo2 = dibujo2 + "*";
        }
        System.out.println(dibujo2);
        dibujo2 = "";
        nivel--;

    }

    int salida =0;
    String dibujo3 = "";
    Scanner sc  = new Scanner(System.in);

    //Ejercicio 3

    System.out.println("Cuantas estrellas quiere que aparezcan?");
    int cantidad = sc.nextInt();

    System.out.println("Que orden quieres que sea opciones: Ascendente Descendente?");
    String direccion = sc.next();

    if(Objects.equals(direccion, "Ascendente")){
        dibujo3 = "*";
        for (int i = 0; i <cantidad ; i++) {
            System.out.println(dibujo3);
            dibujo3 = dibujo3+"*";
        }
    }else {
        int nivel2 = cantidad;
        while (nivel2 != 0) {
            for (int i = 0; i < nivel2; i++) {
                dibujo3 = dibujo3 + "*";
            }
            System.out.println(dibujo3);
            dibujo3 = "";
            nivel2--;

        }
    }
}*/
/*
* Scanner sc = new Scanner(System.in);
        System.out.println("Indique la cantidad de estrellas");
        int numEstrellas = sc.nextInt();
        System.out.println("Indique la direccion (Ascendente,Descendente)");
        String direccion = sc.next();
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            case "Descendente":
                for(int i=numEstrellas; i>=1 ; i--){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            default:
                System.out.println("Opcion no valida");
        }
*/