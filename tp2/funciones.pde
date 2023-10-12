//-------------CLASE CONTADOR-------------------
class Contador {
  int tiempo;
  int puntos;
  PFont fuente;
  PImage contador;
  PImage scoob;
  Contador() {
    tiempo = 60;
    scoob = loadImage("scooby.png");
    contador= loadImage("contador.png");
    fuente = createFont("contador.TTF", 80);
    textFont(fuente);
    textSize(40);
  }
  void contador() {
    puntos = punto;
    image(contador, 50, 23);
    push();
    fill(255);
    text(tiempo, 70, 85);
    text(puntos, 155, 85);
    pop();
    push();
    textSize(20);
    text("tiempo",63,48);
    text("puntos",135,48);
    pop();
      
  }
  //creamos animacion de scooby para cuando se mete un punto
  void scoobye() {
    if (hayPunto==true) {
      image(scoob, 790, 400, 200, 200);
    }
  }
}
//----------PROPIEDADES DEL PERSONAJE-----------
class Personaje extends FBox {
  boolean noMeMuevo=false;
  boolean meMuevo=false;
  int frameCaminata;
  //aplicar una mascara y añadir el personaje a un Fbox que podamos mover con el teclado.
  int CantS1 = 3;
  String[] nombrefile={"1.png", "2.png", "3.png"};
  PImage idle= loadImage("idle.png");
  PImage []shaggy = new PImage[CantS1];
  Personaje(float _w, float _h) {
    super(_w, _h);
    //ciclo for para declarar los sprites
    for (int a = 0; a < nombrefile.length; a++) {
      shaggy[a]=loadImage(nombrefile[a]);
    }
  }

  void incializarPj(float _x, float _y) {
    //Propiedades de nuestro personaje
    setStatic(false);
    setName("personaje");
    setPosition(_x, _y);
    setRotatable(false);
    setFriction(0);
    setDamping(0);
    setRestitution(0.7);
    attachImage(idle);
    //addForce(100,100);
    actualizar();
  }
  //void actualizar funciona para manejar las animaciones de los sprites de shaggy
  void actualizar() {
    if (getVelocityX()>2 || getVelocityX()>2) {
      meMuevo=true;
    }
    if (getVelocityX()==0) {
      noMeMuevo=true;
    }
    if (frameCount % 2 == 0) {
      frameCaminata = (frameCaminata +1) % 3;
    }
    if (getVelocityX()==0) {
      attachImage(idle);
    } else {
      attachImage(shaggy[frameCaminata]);
    }
  }
}
//--------------CLASE PELOTA-----------------------
class Pelota extends FCircle {
  PImage pelota;
  boolean hayPelota = true;
  Pelota(float _w) {
    super(_w);
    //FBox base = new FBox(200, 200);
    //mundo.add(base);
    //propiedades de pelota 
    pelota=loadImage("pelota_basket.png");
  }

  void pelotaFisica(float _x, float _y) {
    //Con esta propiedad anclamos la imagene de la pelota en el elemento fisico"circulo" y seteamos la pos.
    attachImage(pelota);
    setPosition(_x, _y);
    setFriction(0);
    setStatic(false);
    //le pasamos parametros de gravedad para su correcto funcionamiento en el juego
    //le asignamos un nombre 
    setName("pelota");
    setRestitution(1);
    if (_y >=500) {
      println("esMayor");
      mundo.remove(p);
    }
    //añadimos el circulo al mundo
  }
  void eliminar() {
    if (hayPelota==true) {
      String nombre = p.getName();
      if (nombre.equals("pelota")) {
        mundo.remove(p);
        mundo.add(p);
      }
    }
  }
}
//--------------CLASE ARO------------------------------
class Aro extends FBox {
  PImage aro;
  Aro(float _w, float _h) {
    super(_w, _h);
    aro = loadImage("aro.png");
  }
  void posicionDeAro(float _x, float _y) {
    setPosition(_x, _y);
    setName("aro");
    setStatic(true);
    setFriction(0);
    attachImage(aro);
  }
}
//--------------CLASE ESCENARIO/REINICIO-----------------------
class Escenario {
  PImage fondo;
  PImage instrucciones;
  PImage juego;
  PImage victoria;
  PImage derrota;
  String titulo;
  Escenario() {
    fondo = loadImage("inicio.jpg");
    instrucciones = loadImage("instrucciones001.png");
    juego = loadImage("FondoSolo.png");
    victoria = loadImage("Gane.jpg");
    derrota = loadImage("Derrota.png");
  }
  void fondo() {
    image(fondo, 0, 0, 1000, 600);
  }
  void estado1() {
    image(instrucciones, 0, 0, 1000, 600);
  }
  void estado2() {
    image(juego, 0, 0, 1000, 600);
  }
  void estado3() {
    image(victoria, 0, 0, 1000, 600);
  }
  void estado4() {
    image(derrota, 0, 0, 1000, 600);
  }
  void reinicio() {
    if (tiempoReinicio>=150) { 
      tiempoPaso=0;
      posy = 400;
      tiempoReinicio = 0;
      Estado = 0;
      con.tiempo=0;
      reproducirUnaVez=false;
      reproducirUnaVezD=false;
      punto=0;
      con.tiempo = 60;
      frameCount=0;
      pj.incializarPj(100, 300);
      p.pelotaFisica(400, 0);
      aro.posicionDeAro(770, 200);
      pla.incializar(width/2, height-8);
      miSonido.stop();
      scoo.stop();
      perder.stop();
      ganar.stop();
      tiempoPalmaDetectada = 0;
      palmaDetectada = false;
    }
  }
}
//--------------CLASE PLATAFORMA-----------------------
class Plataforma extends FBox {
  Plataforma(float _w, float _h) {
    super(_w, _h);
  }
  void incializar(float _x, float _y) {
    setFill(0);
    setPosition(_x, _y);
    setName("suelo");
    setStatic(true);
    setGrabbable(false);
  }
}
//--------------CLASES DE OBJETOS REBOTABLES-----------------------
class Tacho extends FCircle {
  PImage basura;
  Tacho(float _w) {
    super(_w); 
    basura = loadImage("Tacho.png");
  }
  void inicializar(float _x, float _y) {
    setPosition(_x, _y);
    setName("basura");
    setStatic(true);
    attachImage(basura);
    setRestitution(1);
  }
}
class Basura extends FBox {
  PImage basura;
  Basura(float _w, float _h) {
    super(_w, _h); 
    basura = loadImage("BolsaBasura1.png");
  }
  void inicializar(float _x, float _y) {
    setPosition(_x, _y);
    setName("basura");
    setStatic(true);
    attachImage(basura);
    setRestitution(1);
  }
}
class otraBasura extends FBox {
  PImage basura;
  otraBasura(float _w, float _h) {
    super(_w, _h); 
    basura = loadImage("BolsaBasura2.png");
  }
  void inicializar(float _x, float _y) {
    setPosition(_x, _y);
    setName("basura");
    setStatic(true);
    attachImage(basura);
    setRestitution(1);
  }
}
