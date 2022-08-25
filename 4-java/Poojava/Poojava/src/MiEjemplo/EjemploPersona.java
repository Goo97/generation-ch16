package MiEjemplo;

public class EjemploPersona {
    public static void main(String[] args) {
        Persona p = new Persona();
        p.setNombre ("Diego");
        p.setEdad(27);
        p.setNss(737289);
        System.out.println(p.getNombre());
    }
}
//public nombre_de_clase(valores que se introduciran){
//   atributo_de_clase  =  Valor_que_se_agrega
//}