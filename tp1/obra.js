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
    this.estado = "comienzo";
  }
  //----- metodo actualizar que es el que reproduce la obra en el sketch principal------
  actualizar() {
    //------- Determina cuando comienza el sonido
    let empezoElsonido = haySonido && !habiaSonido;
    //console.log(empezoElsonido);
    //------- Inicio del programa con estado valiendo comienzo(0) ----------
    if (this.estado === "comienzo") {
      this.f.fondoImg();
      //------- Si empezoElsonido pasa a de false a true se agregan los caminantes -------
      if (empezoElsonido) {
        this.estado = "agregar";
      }
    }
    //------- Si estado es igual a agregar se activara la clase dibujar -----------
    else if (this.estado === "agregar") {
      this.ca1.dibujar();
    }
    
    //------- Cuando no hay sonido termina el programa 
    //-------- Imprime en consola el estado en donde se encuntra el programa ---------
    // console.log(this.estado);
  }
  reiniciar(){
    this.ca1.reinicio();
    this.estado = "comienzo";
    

  }
}
