class fondito {
  constructor() {
    // inicializamos las variables
    this.cantidad = 4;
    this.numeroDefondo = floor(random(0, this.cantidad));
    this.fondo = []; // Debes inicializar el arreglo 'fondo'

    // delcalramos el array y las imagenes en el ciclo for
    for (let i = 0; i < this.cantidad; i++) {
        let nombre = "images/fondo-" + nf(i, 1) + ".jpg";
        this.fondo[i] = loadImage(nombre);
    }
  }
    // metodo de fondo 
    fondoImg() {
        image(this.fondo[this.numeroDefondo], 0, 0, width, height);
    }
}
