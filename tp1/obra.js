//---------------- Clase obra -------------
class Obra {
  //-------------- obra es la clase madre del sketck
  constructor() {
    //------------ Declaramos los objetos de la clase obra
    //------------ Clase fondos
    this.f;
    //------------ Clase caminates
    this.ca1;

    //------------ Construimos los objetos de la clase obra
    //------------ Clase fondo
    this.f = new fondito();
    //------------ clase caminantes
    this.ca1 = new caminantes();
    //------------ variable que afecta los estados del programa
    this.estado = 0;
  }
  //----- metodo actualizar que es el que reproduce la obra en el sketch principal------
  actualizar() {
    //------- inicio del programa con estado valiendo 0 ----------
    //------- Declaramos una condicion que al apretar la flecha pase a estado el valor de uno-------
    if (this.estado === 0){
      if (keyCode === UP_ARROW) {
        this.estado = 1;
      }
    }
    //------- Si estado no igual a 1 la clase no entra en funcionamiento ----------
    //------- Si estado es igual a uno se activara la clase dibujar -----------
    if (this.estado === 1) {
      this.f.fondoImg();
      this.ca1.dibujar();
    }
    //-------- Imprime en consola el estado en donde se encuntra el programa ---------
    console.log(this.estado);
  }
}
