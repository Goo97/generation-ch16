package h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(0,0);
        t.setBase(5);
        t.setAltura(2);
        System.out.println("t es el obj de triangulo "+ t.area());
    }
}
