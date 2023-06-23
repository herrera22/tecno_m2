//------- Delcaramos la clase obra
let o;
//------- Declaramos el pgrafic
let xc;
//------- Declaramos el microfono
let mic;
//------- Declaramos la amplitud del mic
let amp;
// test
let imprimir = true;
//------- Valor de configuracion de la amplitud
let AMP_MIN = 0.01;
let AMP_MAX = 0.2;
//------- Amortiguacion del ruido
let AMORTIGUACION = 0.9;
//------- filtro de ruido
let Gs;
//------- Booleana que determina si hay sonido
let haySonido = false;
//------- Booleana que determinaba si habia sonido
let habiaSonido = false;

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
  //------- Valor de amortiguacion de ruido
  Gs.f = AMORTIGUACION;
  //------ Asignamos el pgrafic
  xc = createGraphics(windowWidth, windowHeight);
  //------ asignamos el microfono
  mic = new p5.AudioIn();
  //------ inicializamos el mic
  mic.start();
  //------- fuerza el uso del mic en el navegador
  userStartAudio();
}

function draw() {
  //----------- Amplitud del mic--------------
  //----------- Utilizamos el gestor para filtrar--------
  Gs.actualizar(mic.getLevel());
  //----------- Le pasamos a amp el valor filtrado de gs
  amp = Gs.filtrada;
  //--------- Le asignamos a hay sonido un valor-----
  haySonido = amp > AMP_MIN;
  //--------- Determinamos cuando comienza el sonido----
  let empezoElsonido = haySonido && !habiaSonido;
  //--------- Llamamos a la clase obra y usamos acrualizar para visualizar el programa----------
  o.actualizar();
  //--------- prueba para debuguear
  if (haySonido) {
    if (imprimir) {
      test();
      Gs.dibujar(200, 200);
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
