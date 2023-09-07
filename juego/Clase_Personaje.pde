class Personaje {
  PImage pj;
  Personaje() {
    pj=loadImage("pj.png");
    FBox pjb = new FBox(50, 280);
    pjb.setPosition(100, 400);
    pjb.setRestitution(0);
    pjb.attachImage(pj);
    mundo.add(pjb);

    //aplicar una mascara y añadir el personaje a un Fbox que podamos mover con el teclado.
  }

  void personaje() {
  }
}
