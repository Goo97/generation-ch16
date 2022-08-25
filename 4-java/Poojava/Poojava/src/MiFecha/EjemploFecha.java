package MiFecha;

import MiEjemplo.Persona;

public class EjemploFecha {
    public static void main(String[] args) {


        Fecha objF = new Fecha();
        objF.setDia(3);
        objF.setMes(2);
        objF.setAño(1);
        System.out.println(objF.formaF());
    }
}
