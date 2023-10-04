import netP5.*;
import oscP5.*;

import fisica.*;
import gab.opencv.*;
import processing.video.*;
import java.awt.Rectangle;

//----------VARIABLES-----------
//asigno las variables a usar 
FWorld mundo;
Pelota p;
Personaje pj;
Escenario Es;
Plataforma pla;
Aro aro;
OscP5 osc;
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
//declaramos el joint que va a capturar la pocision de shaggy
FMouseJoint ancla;
float xManija , yManija;
float anchoMov=600;
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
  //mundo.setGravity(0, 700);
  //----------OBJETOS-------------
  //construyo las clases a usar
  p =  new Pelota(60);
  pj = new Personaje(50, 50);
  Es = new Escenario();
  pla= new Plataforma(width, 50);
  aro = new Aro(100, 30);
  //agregamos los objetos fisicos al mundo

  //OBJETO PLATAFORMA
  pla.incializar(width/2, height-8);
  mundo.add(pla);
  //OBJETO PERSONAJE
  pj.incializarPj(200, 300);
  mundo.add(pj);
  //----------ANCLA-------------
  ancla = new FMouseJoint(pj, width/2, height/2);
  //ancla.setNoStroke();
  mundo.add(ancla);
  //OBJETO PELOTA
  p.pelotaFisica(300, 0);
  mundo.add(p);
  //OBJETO ARO
  aro.posicionDeAro(770, 200);
  mundo.add(aro);
  //asigno un valor 0 a estado para comenzar con la escena 0
  Estado = 0;
  titulo = "Migel Gordan";
  //valor de pos del pj
  velocidadX=-90;
  velocidadXPos=90;
}

void draw() {


  background(102, 159, 255);
  //----------FISICAS-------------
  // pj.movimientoPersonaje();
  mundo.step();
  mundo.draw(this);

  if (Estado==0) {
    Es.pantallaDeInicio();
    if (Estado==1) {
    } else if (Estado==2) {
    } else if (Estado==3) {
    } else if (Estado==4) {
    } else if (Estado==5) {
    } else if (Estado==6) {
    }
  }

  //--------DEBUG--------------
}
void mousePressed(){
 Estado 
}
