package MiSaludo;

public class Ejemplosaludo {
    public static void main(String[] args) {
        Saludo objsaludo;//declarar objeto
        objsaludo = new Saludo();//crear objeto
        objsaludo.saludar(); //llamar el método. en esta instancia la salida vine desde la otra clase gracias a el metodo void. Si usaramos return se necesita sout

        Saludo objsaludo2 = new Saludo();//Ya es un objeto nuevo, hace lo mismo pero es diferente

    }
}
