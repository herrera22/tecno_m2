
import oscP5.*;
import fisica.*;
import processing.sound.*;
//----------OBJETOS-------------
FWorld mundo;
Pelota p;
Personaje pj;
Escenario Es;
Plataforma pla;
Aro aro;
Tacho t;
Basura b;
otraBasura ob;
Contador con;
OscP5 osc;
//----------JOINT-----------
FMouseJoint ancla;
//----------SONIDOS-----------
SoundFile miSonido, miSonido2, perder, ganar, rebote, scoo, fail;
//----------VARIABLES-----------
int Estado;
int punto=0;
//----------VARIABLES HADPOSE-----------
PVector indice;
PVector pulgar;
PVector puntero;
boolean palmaDetectada = false;
int tiempoPalmaDetectada = 0; // Guarda el tiempo en que se detectó la palma
int tiempoEspera = 3000; // 5000 milisegundos = 5 segundos
int tiempoMostrarPalma = 3000;
int tiempoPaso=0;
//----------VARIABLES SOBRE EL JOINT Y CAPTURA-----------
float posX;
float posY;
float xManija, yManija;
float anchoMov=1000;
float altoMov=180;
float posy = 400;
//----------REINICIO-----------
float tiempoReinicio = 0;
//----------BOOLEANS-----------
boolean hayMovimiento=false;
boolean reproducirUnaVez = false;
boolean reproducirUnaVezD = false;
boolean hayPunto = false;


void setup() {
  size(1000, 600);
  frameRate(30);
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
  mundo.setGravity(0, 1100);
  //----------OBJETOS-------------
  //construyo las clases a usar
  p =  new Pelota(60);
  pj = new Personaje(79, 280);
  Es = new Escenario();
  pla= new Plataforma(width, 50);
  aro = new Aro(100, 30);
  con = new Contador();
  t = new Tacho(100);
  b = new Basura(50,50);
  ob = new otraBasura(50,50);
  ///----------PLATAFORMA-----------
  pla.incializar(width/2, height+10);
  mundo.add(pla);
  //----------PERSONAJE-----------
  pj.incializarPj(width/2, height/2);
  mundo.add(pj);
  //----------ANCLA-------------
  ancla = new FMouseJoint(pj, width/2, height/2);
  ancla.setNoStroke();
  mundo.add(ancla);
  //----------PELOTA-----------
  p.pelotaFisica(posy, 0);
  mundo.add(p);
  //----------ARO-----------
  mundo.add(aro);
  ////----------OBJETOS REBOTABLES-----------
  mundo.add(t);
  mundo.add(b);
  mundo.add(ob);
  //----------VALOR DE ESTADO-----------
  Estado = 0;

  //----------ASIGNO SONIDOS-------------
  miSonido = new SoundFile(this, "Scooby Doo Tema02.wav");
  ganar = new SoundFile(this, "victoria.wav");
  perder = new SoundFile(this, "Perder.wav");
  rebote = new SoundFile(this, "rebote.mp3");
  scoo = new SoundFile(this, "scooby_doo.mp3");
  
}

void draw() {
  background(27, 181,177);
  //----------ESTADOS/ESCENAS-------------
  if (Estado==0) {
      perder.stop();
      ganar.stop();
      reproducirUnaVezD=false;
      reproducirUnaVez=false;
    if (!miSonido.isPlaying()) {
      miSonido.play();
      miSonido.amp(0.5);
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
    pj.actualizar();
    con.scoobye();
    t.inicializar(944,500);
    b.inicializar(850,500);
    ob.inicializar(30,500);
    aro.posicionDeAro(945, 250);
    con.contador();
    //----------LOGICA DEL CONTADOR-----------
    if (frameCount % 20 == 0 && con.tiempo > 0) {
      con.tiempo--;
    }
    //----------PASO ESTADO GANAR-----------
    if (con.tiempo == 0 && punto>=3) {
      Estado=3;
    }
    //---------- PASO ESTADO PERDER-----------
    if (con.tiempo == 0 && punto<3) {
      Estado=4;
    }
    //----------ESTADO GANAR Y REINICIO-----------
  } else if (Estado==3) {
    Es.estado3();
    Es.reinicio();
    tiempoReinicio++;
    miSonido.stop();
    if (!ganar.isPlaying() && reproducirUnaVez == false) {
      ganar.play();
      ganar.amp(0.1);
      reproducirUnaVez=true;
    }
    //----------ESTADO PERDER Y REINICIO-----------
  } else if (Estado==4) {
    Es.estado4();
    Es.reinicio();
    tiempoReinicio++;
    miSonido.stop();
    if (!perder.isPlaying() && reproducirUnaVezD== false) {
      perder.play();
      perder.amp(0.2);
      reproducirUnaVezD=true;
    }
  }
}



//--------DEBUG--------------

void mousePressed() {
  println(mouseX, mouseY);
}
void keyPressed() {
  Estado++;
}
