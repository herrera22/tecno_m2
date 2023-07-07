class caminantes {
  constructor() {
    //propiedades del objeto
    //-------posx es la posicion inicial de x
    this.posx = 0;
    //-------posy es la posicion inicial de y
    this.posY = 200;
    //-------valor de direccion inicial 
    this.dir = 1;
    //-------valor de velocidad incial 
    this.vel = 0.8;
    //-------ajuste de tamaño para los ellipses pares e impares 
    this.tam = 0;

    // objeto dir y vel
    this.miVelocidadYDireccion = new Dir_y_Vel();

  }
  //-------- Funcion dibujar para los caminantes
  dibujar() {
    // *******LOS ELEMENTOS CON XC SON LOS QUE SON AFECTADOS POR EL PGRAFIC*******

    //le decimos a dir y vel que calcule todo en base al mousex y al mousey
    this.miVelocidadYDireccion.calcularTodo(mouseX, mouseY);

    // ciclo for que crea los 19 ellipses
    for (let i = 0; i < 19; i++) {
      // consdicion que pinta los ellipse pares de negro y los impares de blanco
      if (i % 2 === 0) {
        //color de los ellipses negros 
        xc.fill(70, 70, 70, 50);
        //tamaño de los ellipses negros 
        this.tam = 8;
      } else {
        //color de los ellipses blancos 
        xc.fill(255, 255, 255, 50);
        //tamaño de los ellipses blancos 
        this.tam = 15;
      }
      // le delclaramos que no tenga un stroke
      xc.noStroke();
      // creamos los elipses
      xc.ellipse(this.posx, this.posY + i * 12, this.tam, this.tam);
    }
    // llamamos a la propiedad mover
    this.mover();
  }

  //-------- Funcion de movimiento para los caminantes
  mover() {
    // ejes polares
    this.posx = this.posx + this.vel * cos(radians(this.dir));
    this.posY = this.posY + this.vel * sin(radians(this.dir));

    // utilizamos la variable direccion y de dir y vel para aumentar el valor del eje y y modificar la direccion de los ellipses en el canvas 
    // utilizamos la frecuencia y la amplitud para determinar los sonidos
    // Estos son los minimos que serian cualquier ruido en un umbral normal
    if (frec <= 0.02 && amp <= 0.5 && haySonido) {
      this.posY += 0.08;
      this.dir += 3;
      console.log("aca esta andando frecuencia minima");
    }
    // utilizamos la variable direccion para decrecer el valor de y y modificar la direccion de los ellipses en el canvas 
    //utilizamos la frecuencia y la amplitud para determinar los sonidos 
    //Estos son los maximos que serian los silbidos agudos para hacer que el caminante suba en el espacio 
    else if (frec >= 0.02 && haySonido) {
      this.posY -= 0.08;
      this.dir -= 3;
      console.log("aca esta andando frecuecnia maxima ");
    } 
    //Esta condicion hace que si el programa detecta que se termino el sonido, se vera al caminante cayendo en el espacio y solo se podra manipular al generar alguno de los dos sonidos 
    else if (habiaSonido) {
      this.dir += 0.2;
    }
  }
  //------- funcion de reinicio 
  reinciar() {
    this.sacarCaptura();
    this.reiciarPosicion();
  }
  //-------- funcion de sacar captura  
  sacarCaptura() {
    // save canvas tomara una imagen del canvas y la descargara en la pc 
    saveCanvas("obra_generativa", "png");
    // aviso de captura guardada
    console.log("Captura guardada como obra_generativa.png");
  }
  reiciarPosicion() {
    // reincio de valores originales del programa 
    this.posx = 0;
    this.posY = 200;
    this.dir = 1;
    this.vel = 0.9;
  }
}

