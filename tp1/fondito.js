// clase del fondo 
class fondito {
  constructor() {
    // inicializamos las variables
    // declaramos una clase que seria la cantidad de imagenes por fondo
    this.cantidad = 4;
    // le decimos seleccione un numero random dentro de la variable cantidad
    this.numeroDefondo = floor(random(0, this.cantidad));
    // declaramos un arreglo de fondos 
    this.fondo = []; 

    // delcalramos el array y las imagenes en el ciclo for
    for (let i = 0; i < this.cantidad; i++) {
      // variable que contiene el nombre de los archivos usados para fondo
        let nombre = "images/fondo-" + nf(i, 1) + ".jpg";
        // los fondos en cuestion
        this.fondo[i] = loadImage(nombre);
    }
  }
    // metodo de fondo 
    fondoImg() {
      // fondos
        image(this.fondo[this.numeroDefondo], 0, 0, width, height);
    }
}
