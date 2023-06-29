class Dir_y_Vel {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.prevPosX;
    this.prevPosY;
    this.miDireccionX;
    this.miDireccionY;
    this.vel;
    this.miDireccionPolar;
  }

  calcularTodo(mi_X, mi_Y) {
    this.prevPosX = this.posX;
    this.prevPosY = this.posY;
    this.posX = mi_X;
    this.posY = mi_Y;

    this.miDireccionX = this.posX - this.prevPosX;
    this.miDireccionY = this.posY - this.prevPosY;
    this.miDireccionPolar = degrees(
      atan2(this.posY - this.prevPosY, this.posX - this.prevPosX)
    );

    this.vel = dist(this.posX, this.posY, this.prevPosX, this.prevPosY);
  }

  //////* ESTOS SON LOS METODOS QUE DEVUELVEN ALGO *///////

  velocidad() {
    return this.vel;
  }
  direccionX() {
    return this.miDireccionX;
  }

  direccionY() {
    return this.miDireccionY;
  }

  direccionPolar() {
    return this.miDireccionPolar;
  }

  //////* ESTO ES PARA DEBBUGGEAR LO QUE SE ESTA VIENDO *///////

  mostrarData() {
    textSize(24);
    fill(255);
    text("Velocidad: " + this.vel, 50, 50);
    text("Direccion X: " + this.miDireccionX, 50, 75);
    text("Direccion Y: " + this.miDireccionY, 50, 100);
    text("Direccion Polar: " + this.miDireccionPolar, 50, 125);

    push();
    noFill();
    stroke(255);
    strokeWeight(3);
    translate(width / 2, height / 2);

    ellipse(0, 0, 100, 100);
    rotate(radians(this.miDireccionPolar));
    line(0, 0, this.vel * 2, 0);

    pop();
  }

  ///////////// FIN DE LA CLASE  ///////
}
