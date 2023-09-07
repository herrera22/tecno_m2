class Juego {
  Pelota p;
  Personaje pj;
  Escenario Es;
  int Estado;
  String titulo;
  Juego() {
    p =  new Pelota();
    pj = new Personaje();
    Es = new Escenario();
    Estado = 0;
    titulo = "Migel Gordan";
  }

  void Start() {
    if (Estado==0) {
      

      Es.pantallaDeInicio();
      if (keyCode==ENTER) {
        Estado=1;
      }
    }
    if (Estado==1) {
      Es.fondo();
      pj.personaje();
      mundo.step();
      mundo.draw();
    }
  }
}
