package h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(0,0);
        System.out.println("t es el obj de triangulo "+ t.area());

        Circulo c = new Circulo(5);
        System.out.println(c);
    }
}
