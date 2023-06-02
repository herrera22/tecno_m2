class Obra {
  // obra es la clase madre del sketck
  constructor() {
    // declaramos los objetos de la clase obra
    this.f;
    this.ca1;
    // construimos los objetos de la clase obra
    this.f = new fondito();
    this.ca1 = new caminantes();
  }
  actualizar() {
    // // // clase fondito
    this.f.fondoImg();
    // // // // clase caminante
    // this.ca1.dibujar();
    // this.ca1.mover();
    this.ca1.objeto3();
  }
}
