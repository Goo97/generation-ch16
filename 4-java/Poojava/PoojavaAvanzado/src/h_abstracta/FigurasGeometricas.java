package h_abstracta;

public abstract class FigurasGeometricas {
    public abstract float area();
    private String nombre;

    public FigurasGeometricas(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString (){
        return nombre+ "area " + area();
    }

}
