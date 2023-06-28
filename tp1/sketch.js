//OBRA
//------- Delcaramos la clase obra
let o;
//------- Declaramos el pgrafic
let xc;

//------- AUDIO
//------- Declaramos el microfono
let mic;
//------- Declaramos la amplitud del mic
let amp;
//------- Declaramos un audio context
let audioContext;
//------- utiliza ml5 palra el pitch
let pitch;
//------- Modelo ya entrenado 
const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
// test
let imprimir = true;
//------- Valor de configuracion de la amplitud
let AMP_MIN = 0.03;
let AMP_MAX = 0.1;
//------- Valor de configuracion de la frecuencia
let FREC_MIN = 900;
let FREC_MAX = 2000;
//------- Amortiguacion del ruido
let AMORTIGUACION = 0.9;
//------- filtro de ruido
let Gs;
//------- gestor de pitch
let gp;
//------- Booleana que determina si hay sonido
let haySonido = false;
//------- Booleana que determinaba si habia sonido
let habiaSonido = false;
//------- Determina el comienzo del sonido


function setup() {
  //------ Pantalla completa del navegador
  createCanvas(windowWidth, windowHeight);
  //------ Imagen al borde del navegador
  imageMode(CORNER);
  //------ Background de la pantalla
  background(120, 120, 120);

  //------ Constructor de la clase obra
  o = new Obra();

  //------ Constructor del gestor
  Gs = new GestorSenial(AMP_MIN, AMP_MAX);
  //------ Constructor del gestor de pitch
  gp = new GestorSenial(FREC_MIN,FREC_MAX);
  
  //------- Valor de amortiguacion de ruido
  Gs.f = AMORTIGUACION;
  //------ Asignamos el audioContext
  audioContext = getAudioContext();
  //------ asignamos el microfono
  mic = new p5.AudioIn();
  //------ inicializamos el mic
  mic.start(startPitch);
  //------- fuerza el uso del mic en el navegador
  userStartAudio();

  //------ Asignamos el pgrafic
  xc = createGraphics(windowWidth, windowHeight);
  
}

//-------- FUNCION DRAW 
function draw() {
  //----------- Amplitud del mic--------------
  let vol = mic.getLevel();
  //----------- Utilizamos el gestor para filtrar--------
  Gs.actualizar(vol);
  //----------- Le pasamos a amp el valor filtrado de gs
  amp = Gs.filtrada;
  //--------- Le asignamos a hay sonido un valor-----
  haySonido = Gs.filtrada > AMP_MIN; //umbral de ruido 
  //--------- Determinamos cuando comienza el sonido----
  
  //--------- Llamamos a la clase obra y usamos acrualizar para visualizar el programa----------
  o.actualizar();
  //--------- prueba para debuguear
  if (haySonido) {
    if (imprimir) {
      test();
      Gs.dibujar(200, 200);
      gp.dibujar(200,400);
      console.log("Esta es"+gp.filtrada);
    }
  }
  // -------- Canvas de pgrafic
  image(xc, 0, 0);

  //---------- Estado de sonido al terminar la obra --------
  habiaSonido = haySonido;
}
//------------ funcion para testear la amplitud del mic
function test() {
  push();
  textSize(16);
  fill(255);
  let texto;
  texto = "la amplitud es" + amp;
  text(texto, 200, 200);
  pop();
}

//-------- FUNCIONES DEL PITCH/MACHINELEARNING
function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}
function modelLoaded() {
  getPitch();
}
function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      gp.actualizar(frequency);
      console.log("la frecuencia es " + frequency);
    } 
    getPitch();
  })
}
