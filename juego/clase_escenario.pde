class Escenario {
  PImage fondo;
  PFont fuente;
  String titulo;
  Escenario() {
    fondo = loadImage("Fondo.JPG");
    fuente = createFont("scoobydoo.ttf",80);
    textFont(fuente);
    titulo="Jueguito";
  }
  void fondo() {
    image(fondo, 0, 0,800,600);
  }
  void pantallaDeInicio(){
   background(0);
   push();
   strokeWeight(3);
   fill(0,255,0);
   text(titulo,250,300);
   pop();
  }
}
