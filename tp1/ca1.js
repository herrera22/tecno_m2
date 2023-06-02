class caminantes {
  constructor() {
    //propiedades del objeto
    this.x = 0;
    this.y = height / 2.0;
    this.t = 20;
    this.dir = 0;
    this.vel = 1;
    // objeto2
    this.ang = 0;
    this.x2 = 0;
    this.y2 = 400;
    // objeto3
    this.amplitude = 100; // Amplitud de las ondas
    this.frequency = 0.02; // Frecuencia de las ondas
    this.xSpacing = 0.5; // Espaciado horizontal entre los puntos del elástico
    this.yOffset = 150; // Desplazamiento vertical del elástico
  }
  dibujar() {
    noStroke();

    ellipse(this.x, this.y, this.t, this.t);
  }

  mover() {
    //cambiamos la direccion desde aca que cambia constantemente
    //movimiento en eje polar para x e y pasado a radianes
    this.x = this.x + this.vel * cos(radians(this.dir));
    this.y = this.y + this.vel * sin(radians(this.dir));
    this.cambiaDireccion();
  }
  objeto2() {
    // this.x2=this.x2+1;
    // this.ang=this.ang+0.01;

    this.x2++;
    fill(255);
    ellipse(this.x2, this.y2 - 80, 10);
    ellipse(this.x2, this.y2 + 80, 10);

    // this.x2 = this.x2 + this.vel * cos(radians(this.dir));
    // this.y2 = this.y2 + this.vel * sin(radians(this.dir));

    if (mouseIsPressed) {
      if (mouseButton === CENTER) {
        this.ang = this.ang + 0.1;
        this.y2 = this.y2 + 5 * sin(this.ang);
      }
      if (mouseButton === LEFT) {
        this.ang = this.ang - 0.2;
        this.y2 = this.y2 - 5 * sin(this.ang);
      }
      if (mouseButton === RIGHT) {
        this.dir += 5;
        this.y2 += 0.5;
        this.x2 += 0.5;
      }
    }
  }
  objeto3() {
    // Dibujar el elástico en forma de ondas
    for (let x = 0; x < 1000; x += this.xSpacing) {
      this.y = sin(x * this.frequency + frameCount * 0.40) * this.amplitude + this.yOffset;
      ellipse(x, this.y, 10, 10);
      ellipse(x, this.y+80, 10, 10);
    }
  }
  cambiaDireccion() {
    if (mouseIsPressed === true) {
      if (mouseButton === LEFT) {
        this.dir += 4;
        this.y += 0.5;
        this.x += 0.5;
      }
      if (mouseButton === RIGHT) {
        this.dir -= 4;
        this.y -= 0.5;
        this.x -= 0.5;
      }
    }
  }
}
