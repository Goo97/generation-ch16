package MiEjemplo;

public class Persona {
    String nombre = "Fernando";
    int edad = 24;
    int nss = 123;

    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    void caminar() {
        System.out.println("Caminando");
    }


    void dormir() {
        System.out.println("Durmiendo");
    }







}
