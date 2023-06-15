class Obra {
  // obra es la clase madre del sketck
  constructor() {
    // declaramos los objetos de la clase obra
    // clase fondos
    this.f;
    // clase caminates
    this.ca1;
    // construimos los objetos de la clase obra
    // clase fondo
    this.f = new fondito();
    // clase caminantes
    this.ca1 = new caminantes();

    this.estado = 0;
  }
  // metodo actualizar que es el que reproduce la obra en el sketch principal
  actualizar() {
    // inicio del programa con estado valiendo 0
    if (this.estado === 0){
      if (keyCode === UP_ARROW) {
        this.estado = 1;
      }
    }
    // Si estado no igual a 1 la clase no entra en funcionamiento
    // si estado es igual a uno se activara la clase dibujar
    if (this.estado === 1) {
      this.ca1.dibujar();
    }
    //imprime en consola el estado en donde se encuntra el programa
    console.log(this.estado);
  }
}
