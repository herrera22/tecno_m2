//----------- Clase del fondo ------------------------------------- 
class fondito {
  constructor() {
    //--------- Inicializamos las variables
    //--------- Declaramos una clase que seria la cantidad de imagenes por fondo
    this.cantidad = 4;
    //--------- Le decimos seleccione un numero random dentro de la variable cantidad
    this.numeroDefondo = floor(random(0, this.cantidad));
    //--------- Declaramos un arreglo de fondos 
    this.fondo = []; 

    //--------- Delcalramos el array y las imagenes en el ciclo for
    for (let i = 0; i < this.cantidad; i++) {
      //------- variable que contiene el nombre de los archivos usados para fondo
        let nombre = "images/fondo-" + nf(i, 1) + ".jpg";
        //------- los fondos en cuestion
        this.fondo[i] = loadImage(nombre);
    }
  }
    //--------- metodo de fondo que llamaremos desde la clase obra
    fondoImg() {
      //------- fondos
        image(this.fondo[this.numeroDefondo], 0, 0, width, height);
    }
}
