//-------------clase personaje------------
class Personaje extends FBox {
  PImage pj;
  boolean meMuevoIzquierda;
  boolean meMuevoDerecha;
  boolean noMeMuevo;
  boolean estoySaltando;
  boolean puedeSaltar;
  Personaje(float _w, float _h) {
    super(_w, _h);
    pj=loadImage("pj.png");
    //aplicar una mascara y añadir el personaje a un Fbox que podamos mover con el teclado.
  }

  void incializarPj(float _x, float _y) {
    //inicializo lo booleanos de movimiento como false
    meMuevoIzquierda = false;
    meMuevoDerecha = false;
    estoySaltando = false;
    puedeSaltar = false;

    //Propiedades de nuestro personaje
    setName("personaje");
    setPosition(_x, _y);
    setRotatable(false);
    setFriction(0);
    setDamping(0);
    setRestitution(0.3);
    //addForce(100,100);
  }
}
//--------------clase pelota-----------------------
class Pelota extends FCircle {
  PImage pelota;
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
    //le pasamos parametros de gravedad para su correcto funcionamiento en el juego
    //le asignamos un nombre 
    setName("pelota");
    setRestitution(1);
    //añadimos el circulo al mundo
  }
}
//--------------clase aro-----------------------
class Aro extends FBox {

  Aro(float _w, float _h) {
    super(_w, _h);
  }
  void posicionDeAro(float _x, float _y) {
    setPosition(_x, _y);
    setName("aro");
    setStatic(true);
    setFriction(0);
  }
}
//--------------clase escenarios-----------------------
class Escenario {
  PImage fondo;
  PFont fuente;
  String titulo;
  Escenario() {
    fondo = loadImage("Fondo.JPG");
    fuente = createFont("scoobydoo.ttf", 80);
    textFont(fuente);
    titulo="Jueguito";
  }
  void fondo() {
    image(fondo, 0, 0, 800, 600);
  }
  void pantallaDeInicio() {
    background(0);
    push();
    strokeWeight(3);
    fill(0, 255, 0);
    text(titulo, 250, 300);
    pop();
  }
}
//--------------clase xxxxxx-----------------------
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
