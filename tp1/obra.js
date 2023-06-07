class Obra {
  // obra es la clase madre del sketck
  constructor() {
    // declaramos los objetos de la clase obra
    this.f;
    this.ca1;
    this.b2;
    // construimos los objetos de la clase obra
    this.f = new fondito();
    this.ca1 = new caminantes();
    this.b2 = new Objeto2();
  }
  actualizar() {
    // // // clase fondito
    this.f.fondoImg();
    // // // // clase caminante
    // this.ca1.dibujar();
    // this.ca1.mover();
    // let amplitude = map(mouseY, 0, height, 0, 200);
    // let frequency = map(mouseY, 0, height, 0.01, 0.1);
    // // Dibujar el objeto3 con los valores de amplitud y frecuencia controlados por el usuario
    // this.ca1.objeto3(amplitude, frequency);
    this.b2.update(mouseX,mouseY);
    this.b2.draw();
  }
}
