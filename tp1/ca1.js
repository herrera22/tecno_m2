class caminantes {
  constructor() {
    //propiedades del objeto
    this.posx = 0;
    this.posY = 200;
    this.dir = 0;
    this.vel = 1;
    // objeto dir y vel
    this.miVelocidadYDireccion = new Dir_y_Vel();
  }
  dibujar() {
    // *******LOS ELEMENTOS CON XC SON LOS QUE SON AFECTADOS POR EL PGRAFIC*******

    //le decimos a dir y vel que calcule todo en base al mousex y al mousey
    this.miVelocidadYDireccion.calcularTodo(mouseX, mouseY);
    // ciclo for que crea los 19 ellipses
    for (let i = 0; i < 19; i++) {
      // consdicion que pinta los ellipse pares de negro y los impares de blanco
      if (i % 2 === 0) {
        xc.fill(0,0,0,200);
      } else xc.fill(255, 255, 255, 200);
      // le delclaramos que no tenga un stroke
      xc.noStroke();
      // creamos los elipses
      xc.ellipse(this.posx, this.posY + i * 15, 15, 15);
    }
    // llamamos a la propiedad mover condicionada al sonido 
    if(haySonido){
    this.mover();
    }
    //propiedad de dir y vel para debuggear
    // this.miVelocidadYDireccion.mostrarData();
  }
  mover() {
    // ejes polares 
    this.posx = this.posx + this.vel * cos(radians(this.dir));
    this.posY = this.posY + this.vel * sin(radians(this.dir));

    let volum=map(amp,AMP_MIN,AMP_MAX,0,0.10);
    // en mover declaramos que la velocidad de x sea de 1 generando el avance de los caminantes
    
    if (this.posx >= windowWidth) {
      this.posx = windowWidth;
      this.posY = windowWidth;
    }
    // utilizamos la variable direccion y de dir y vel para aumentar el valor de y
    if (volum<=0.02 && volum >=0.01) {
      this.posY += 0.50;
      this.dir += 0.3;
      
    }
    // }//estas dos variable hacen que cuando sostengamos el movimiento sobre el eje x/y el eje y de los caminates se mueva
    // utilizamos la variable direccionx para decrecer el valor de y
    if (volum >=0.05) {
      this.posY -= 0.50;
      this.dir -=0.3;
    }
  }
}
