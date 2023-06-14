// delcaramos los objetos
let o;
function setup() {
  // pantalla completa
  createCanvas(windowWidth, windowHeight);
  // imagen al borde
  imageMode(CORNER);
  background(255,0,255);
  // construimos los objetos
  o = new Obra();
}

function draw() {
  o.actualizar();
  
}
