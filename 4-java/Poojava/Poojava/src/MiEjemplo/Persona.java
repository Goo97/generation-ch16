package MiEjemplo;

public class Persona {
    private String nombre;
    int edad;
    int nss;
    public Persona (){
    }
    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }



    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public int getNss() {
        return nss;
    }



    void caminar() {
        System.out.println("Caminando");
    }
    void dormir() {
        System.out.println("Durmiendo");
    }
}
