package MetPrincipal;

import MenuP.MenuOp;
import MiEjemplo.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        menuOp.menu();
        System.out.println("Elija una opción ");
        int op = sc.nextInt();
        do{
            op = sc.nextInt();
        //int op = 1;//Solo puede ser modificada en el ambito del menu. por eso la dejamos en dafault

        switch (op) {
            case 1:
                Saludo s = new Saludo();
                s.saludar();
                break;
            case 2:
                Persona p = new Persona();
                p.setNombre("Diego");
                p.setEdad(27);
                p.setNss(737289);
                System.out.println(p.getNombre());
                break;
            case 3:
                Fecha objF = new Fecha();
                objF.setDia(3);
                objF.setMes(2);
                objF.setAño(1);
                System.out.println(objF.formaF());
                break;
            default:
        }

        }while (op<4);
    }
}
