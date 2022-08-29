package com.fer.Principal;

import com.fer.Herencia.BasePadre;
import com.fer.Herencia.Ej;
import com.fer.Herencia.Hija;
import com.fer.Herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Ej ejecutar=new Ej();
        ejecutar.ejecutar();

        Hija objH = new Hija();
        objH.visualizarA();

        Hijo objHo = new Hijo();
        objHo.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(636);
        Object miObj = new BasePadre();

        System.out.println("Atributo de clase base: "+objH.getA());
        System.out.println("Atributo clase hijo "+ objHo.getA());
    }
}