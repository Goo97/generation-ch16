package com.fer.excepcion;

public class ErrorFisico extends Exception {
    public ErrorFisico(Exception ex) {
        super("t/t/t <-- Ocurrio un error físico-->", ex);
    }
}
