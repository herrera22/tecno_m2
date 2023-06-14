class caminantes {
  constructor() {
    //propiedades del objeto
    this.posx = 0;
    this.posY = 200;
    this.ang  = 0;
    this.dist = 0;
  }
  dibujar() {
    fill(0);
    for (let i = 0; i < 19; i++) {
      if (i % 2 === 0) {
        fill(0);
      } else fill(255, 255, 255, 20);
      noStroke();
      ellipse(this.posx, this.posY + i * 5, 5, 5);
    }
    this.mover();
  }
  mover() {
    this.posx += 0.2;
  }
}
