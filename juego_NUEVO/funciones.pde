//-------------clase personaje-------------------
class Contador{
   int tiempo;
   int puntos;
   PFont fuente;
   PImage contador;
  Contador(){
    tiempo = 60;
    
    contador= loadImage("contador.png");
    fuente = createFont("contador.TTF", 80);
    textFont(fuente);
    textSize(40);
    
  }
   void contador(){
     puntos = punto;
     image(contador,324,23);
     push();
     fill(255,0,0);
     text(tiempo,345,85);
     text(puntos,425,85);
     pop();
     
   }
}

class Personaje extends FBox {
  boolean noMeMuevo;
  boolean meMuevo;
  int vm=0;
  //aplicar una mascara y añadir el personaje a un Fbox que podamos mover con el teclado.
  int CantS1 = 4;
  String[] nombrefile={"1.png", "2.png", "3.png", "4.png"};
  PImage []shaggy = new PImage[CantS1];

  Personaje(float _w, float _h) {
    super(_w, _h);
    //ciclo for para declarar los sprites
    for (int a = 0; a < nombrefile.length; a++) {
      shaggy[a]=loadImage(nombrefile[a]);
    }
  }

  void incializarPj(float _x, float _y) {
    //inicializo lo booleanos de movimiento como false
    meMuevo = false;
    noMeMuevo = false;

    //Propiedades de nuestro personaje
    setStatic(false);
    setName("personaje");
    setPosition(_x, _y);
    setRotatable(false);
    setFriction(0);
    setDamping(0);
    setRestitution(0.3);
    attachImage(shaggy[vm]);
    
    //addForce(100,100);
  }
  
}
//--------------clase pelota-----------------------
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
//--------------clase aro------------------------------
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
//--------------clase escenarios-----------------------
class Escenario {
  PImage fondo;
  PImage instrucciones;
  PImage juego;
  PImage victoria;
  PImage derrota;
  String titulo;
  Escenario() {
    fondo = loadImage("inicio.jpg");
    instrucciones = loadImage("instrucciones.jpg");
    juego = loadImage("FondoSolo.png");
    victoria = loadImage("Gane.jpg");
    derrota = loadImage("derrota.jpg");
  }
  void fondo() {
    image(fondo, 0, 0, 800, 600);
  }
  void estado1() {
    image(instrucciones, 0, 0, 800, 600);
  }
  void estado2() {
    image(juego, 0, 0, 800, 600);
  }
  void estado3() {
    image(victoria, 0, 0, 800, 600);
  }
  void estado4() {
    image(derrota, 0, 0, 800, 600);
  }
}
//--------------clase plataforma-----------------------
class Plataforma extends FBox {
  Plataforma(float _w, float _h) {
    super(_w, _h);
  }
  void incializar(float _x, float _y) {
    setPosition(_x, _y);
    setName("suelo");
    setStatic(true);
    setGrabbable(false);
    setFriction(100);
  }
}
//--------------clase xxxxxxxxxxx-----------------------
