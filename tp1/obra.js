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
    //------------ variable para controlar el tiempo 
    this.tiempo=0;
  }
  //----- metodo actualizar que es el que reproduce la obra en el sketch principal------
  actualizar() {
    this.tiempo++;
    //------- Determina cuando comienza el sonido
    let empezoElsonido = haySonido && !habiaSonido;
    //console.log(empezoElsonido);
    //------- Inicio del programa con estado valiendo comienzo(0) ----------
    console.log(this.estado);
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
    //------- Es condicional cambia el estado cuando los caminantes se van de los parametros de la pantalla 
      if ((this.ca1.posx >= windowWidth || this.ca1.posY <= -30 ) && (this.ca1.posY >= windowHeight || this.ca1.posY <= -30)){
        // estado cambia de valor a "final"
        this.estado = "final";
      }
    }
    //------- Si estado es igual a final, la condicional activara el reinicio del programa de forma automatica 
    else if (this.estado === "final"){
      this.reinicio();
    }
  }
    //------- funcion que determina el reinicio del programa
  reinicio(){
    //------- Devuelve todas las variables a su estado orginal
      this.estado = "comienzo";
      this.tiempo = 0;
      this.ca1.reinciar();
    }
  }

