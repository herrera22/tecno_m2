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
    //le decimos a dir y vel que calcule todo en base al mousex y al mousey
    this.miVelocidadYDireccion.calcularTodo(mouseX, mouseY);
    // ciclo for que crea los 19 ellipses
    for (let i = 0; i < 19; i++) {
      // consdicion que pinta los ellipse pares de negro y los impares de blanco
      if (i % 2 === 0) {
        fill(0);
      } else fill(255, 255, 255, 80);
      // le delclaramos que no tenga un stroke
      noStroke();
      // creamos los elipses
      ellipse(this.posx, this.posY + i * 15, 15, 15);
    }
    // llamamos a la propiedad mover
    this.mover();
    //propiedad de dir y vel para debuggear
    // this.miVelocidadYDireccion.mostrarData();
  }
  mover() {
    // ejes polares 
    this.posx = this.posx + this.vel * cos(radians(this.dir));
    this.posY = this.posY + this.vel * sin(radians(this.dir));
    // en mover declaramos que la velocidad de x sea de 1 generando el avance de los caminantes
    this.posx += 1;
    if (this.posx >= windowWidth) {
      this.posx = windowWidth;
      this.posY = windowWidth;
    }
    // utilizamos la variable direccion y de dir y vel para aumentar el valor de y
    if (this.miVelocidadYDireccion.direccionY()>=2) {
      this.dir += 2;
      this.posY += 0.50;
      
    }
    // }//estas dos variable hacen que cuando sostengamos el movimiento sobre el eje x/y el eje y de los caminates se mueva
    // utilizamos la variable direccionx para decrecer el valor de y
    if (this.miVelocidadYDireccion.velocidad()>=5) {
      this.dir -= 2;
      this.posY -= 0.50;
      
    }
  }
}
