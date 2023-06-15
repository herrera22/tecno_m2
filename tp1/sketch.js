// delcaramos los objetos
let o;
function setup() {
  // pantalla completa
  createCanvas(windowWidth, windowHeight);
  // imagen al borde
  imageMode(CORNER);
  background(120,120,120);
  // construimos los objetos
  o = new Obra();
}

function draw() {
  // llamamos a la clase obra y usamos el metodo actualizar para reproducir la obra 
  o.actualizar();
  
}
