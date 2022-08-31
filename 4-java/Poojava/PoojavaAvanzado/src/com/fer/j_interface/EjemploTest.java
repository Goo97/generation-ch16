package com.fer.j_interface;

public class EjemploTest {
    public static void main(String[] args) {
        System.out.println("Test.CONV" + Prueba.CONV);
        Prueba p = new Prueba();
        System.out.println(("p =")+ p.CONV);

        Test ts = new Prueba(); //Por referencia. se necesita porque Prueba es el concreto

    }
}
