class caminantes {
  constructor() {
    //propiedades del objeto
    this.posx = 0;
    this.posY = 200;
    this.dir = 1;
    this.vel = 0.8;
    this.tam=0;

    // objeto dir y vel
    this.miVelocidadYDireccion = new Dir_y_Vel();

    // Objeto paleta
    this.p = new Paleta();
  }

  //-------- Funcion dibujar para los caminantes
  dibujar() {
    // *******LOS ELEMENTOS CON XC SON LOS QUE SON AFECTADOS POR EL PGRAFIC*******
    let colorcito = this.p.trazos[1];
    //le decimos a dir y vel que calcule todo en base al mousex y al mousey
    this.miVelocidadYDireccion.calcularTodo(mouseX, mouseY);
    // ciclo for que crea los 19 ellipses
    for (let i = 0; i < 19; i++) {
      // consdicion que pinta los ellipse pares de negro y los impares de blanco
      if (i % 2 === 0) {
        xc.fill(70, 70, 70, 50);
        this.tam=8;
      } else{ xc.fill(255, 255, 255, 50);
      this.tam=15;}
      // le delclaramos que no tenga un stroke
      xc.noStroke();
      // creamos los elipses
      xc.ellipse(this.posx, this.posY + i * 12, this.tam, this.tam);
    }
    // llamamos a la propiedad mover condicionada al sonido

    this.mover();

    //propiedad de dir y vel para debuggear
    // this.miVelocidadYDireccion.mostrarData();
  }

  //-------- Funcion de movimiento para los caminantes
  mover() {
    // ejes polares
    this.posx = this.posx + this.vel * cos(radians(this.dir));
    this.posY = this.posY + this.vel * sin(radians(this.dir));
    // en mover declaramos que la velocidad de x sea de 1 generando el avance de los caminantes

    // utilizamos la variable direccion y de dir y vel para aumentar el valor de y
    if (frec <= 0.02 && amp <= 0.5 && haySonido) {
      this.posY += 0.08;
      this.dir += 3;
      console.log("aca esta andando frecuencia minima");
    }

    // }//estas dos variable hacen que cuando sostengamos el movimiento sobre el eje x/y el eje y de los caminates se mueva
    // utilizamos la variable direccionx para decrecer el valor de y
    else if (frec >= 0.02 && haySonido) {
      this.posY -= 0.08;
      this.dir -= 3;
      console.log("aca esta andando frecuecnia maxima ");
    } else if (habiaSonido) {
      this.dir += 0.2;
      //console.log("viveee");
    }
    // MACHINE LARNING 
    // if(label == 'Class 2'){
    //   this.vel = 1;
    //   console.log("esta funcionando");
    // }else if (label == 'Ruido de fondo'){ 
    //   this.vel = 0.9;
    // }
  }
  //------- Funcion dar color con los trazos
  reinciar() {
    this.sacarCaptura();
    this.reiciarPosicion();
  }
  sacarCaptura() {
    saveCanvas("obra_generativa", "png");
    console.log("Captura guardada como obra_generativa.png");
  }
  reiciarPosicion() {
    this.posx = 0;
    this.posY = 200;
    this.dir = 1;
    this.vel = 0.9;
  }
}

