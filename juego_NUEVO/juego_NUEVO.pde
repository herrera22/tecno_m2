
import netP5.*;
import oscP5.*;
import fisica.*;
import processing.video.*;
import java.awt.Rectangle;
import processing.sound.*;

//----------VARIABLES-----------
//asigno las variables a usar 
FWorld mundo;
Pelota p;
Personaje pj;
Escenario Es;
Plataforma pla;
Aro aro;
Contador con;
OscP5 osc;

SoundFile miSonido, miSonido2, perder, ganar;
//variable para el manejo de la escena 
int Estado;
String titulo;
//movimiento del pj
float velocidadX;
float velocidadXPos;
float posX, posY;
float amortiguacion = 0.9;
int punto=0;
PVector indice;
PVector pulgar;
PVector puntero;

boolean palmaDetectada = false;
int tiempoPalmaDetectada = 0; // Guarda el tiempo en que se detectó la palma
int tiempoEspera = 3000; // 5000 milisegundos = 5 segundos
int tiempoMostrarPalma = 3000;
int tiempoPaso=0;
//declaramos el joint que va a capturar la pocision de shaggy
FMouseJoint ancla;
float xManija, yManija;
float anchoMov=320;
float altoMov=180;
float posy = 400;

boolean hayMovimiento=false;
//----------SONIDOS-------------

void setup() {
  size(800, 600);
  //----------CAPTURA-------------
  osc = new OscP5(this, 8008);
  indice = new PVector(0, 0);
  pulgar = new PVector(width, height);
  puntero = new PVector(0, 0); 
  //----------FISICAS-------------
  //inicializo la libreria de fisicas
  Fisica.init(this);
  //inicializo el mundo fisico
  mundo = new FWorld();
  //le asigno edges para determinar los bordes 
  mundo.setEdges();
  //le asigno una gravedad
  mundo.setGravity(0, 700);
  //----------OBJETOS-------------
  //construyo las clases a usar
  p =  new Pelota(60);
  pj = new Personaje(79, 280);
  Es = new Escenario();
  pla= new Plataforma(width, 50);
  aro = new Aro(100, 30);
  con = new Contador();
  //agregamos los objetos fisicos al mundo

  //OBJETO PLATAFORMA
  pla.incializar(width/2, height-8);
  mundo.add(pla);
  //OBJETO PERSONAJE
  pj.incializarPj(width/2, height/2);
  mundo.add(pj);
  //----------ANCLA-------------
  ancla = new FMouseJoint(pj, width/2, height/2);
  ancla.setNoStroke();
  mundo.add(ancla);
  //OBJETO PELOTA
  p.pelotaFisica(posy, 0);
  mundo.add(p);
  //OBJETO ARO

  mundo.add(aro);
  //asigno un valor 0 a estado para comenzar con la escena 0
  Estado = 0;
  //valor de pos del pj
  velocidadX=-90;
  velocidadXPos=90;

  //----------sonidos-------------
  miSonido = new SoundFile(this, "Scooby Doo Tema02.wav");
  ganar = new SoundFile(this, "victoria.wav");
  perder = new SoundFile(this, "Perder.wav");
}

void draw() {


  background(102, 159, 255);

  //----------FISICAS-------------
  // pj.movimientoPersonaje();


  if (Estado==0) {
    if (!miSonido.isPlaying()) {
      miSonido.play();
      miSonido.loop();
    }
    Es.fondo();
  } else if (Estado==1) {
    Es.estado1();
    tiempoPaso++;
    if (tiempoPaso>=200) {
      Estado=2;
    }
  } else if (Estado==2) {
    Es.estado2();
    mundo.step();
    mundo.draw();
    aro.posicionDeAro(755, 200);
    con.contador();

    // Resta un segundo al tiempo restante en cada frame
    if (frameCount % 60 == 0 && con.tiempo > 0) {
      con.tiempo--;
    }
    if (con.tiempo == 0 && punto>=5) {
      Estado=3;
    }
    if (con.tiempo == 0 && punto<5) {
      Estado=4;
    }
  } else if (Estado==3) {
    Es.estado3();
    miSonido.stop();
    if (!ganar.isPlaying()) {
      ganar.play();
    }
  }
 else if (Estado==4) {
  Es.estado4();
  miSonido.stop();
  if (!perder.isPlaying()) {
    perder.play();
  }
}
}



//--------DEBUG--------------

void mousePressed() {
  println(mouseX, mouseY);
}
