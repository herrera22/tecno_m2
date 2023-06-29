class caminantes {
  constructor() {

    //propiedades del objeto
    this.posx = 0;
    this.posY = 200;
    this.dir = 0;
    this.vel = 0.8;

    // objeto dir y vel
    this.miVelocidadYDireccion = new Dir_y_Vel();

    // Objeto paleta
    this.p = new Paleta();    
  }

  //-------- Funcion dibujar para los caminantes
  dibujar() {
    // *******LOS ELEMENTOS CON XC SON LOS QUE SON AFECTADOS POR EL PGRAFIC*******
    let colorcito=this.p.darColor();
    //le decimos a dir y vel que calcule todo en base al mousex y al mousey
    this.miVelocidadYDireccion.calcularTodo(mouseX, mouseY);
    // ciclo for que crea los 19 ellipses
    for (let i = 0; i < 19; i++) {
      // consdicion que pinta los ellipse pares de negro y los impares de blanco
      if (i % 2 === 0) {
          xc.fill(0,0,0,30);
      } else xc.fill(255,255,255,30);
      // le delclaramos que no tenga un stroke
      xc.noStroke();
      // creamos los elipses
      xc.ellipse(this.posx, this.posY + i * 15, 15, 15);
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

    if (this.posx >= windowWidth) {
      this.posx = windowWidth;
      this.posY = windowWidth;
    }
    // utilizamos la variable direccion y de dir y vel para aumentar el valor de y
    if (gp.filtrada <= 0.1000 && haySonido) {
      this.posY += 0.5;
      this.dir += 2.8;
      console.log("aca esta andando");
    }
    // }//estas dos variable hacen que cuando sostengamos el movimiento sobre el eje x/y el eje y de los caminates se mueva
    // utilizamos la variable direccionx para decrecer el valor de y
    if (gp.filtrada >= 0.1600 && haySonido) {
      this.posY -= 0.5;
      this.dir -= 2.8;
      console.log("aca esta andandox2 ");
    }
  }

  //------- Funcion dar color con los trazos
  darColor(){
  
  }
}
