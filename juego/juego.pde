import fisica.*;


FWorld mundo;
Juego j;
void setup() {
  size(800, 600);
  Fisica.init(this);
  mundo = new FWorld();
  mundo.setEdges();
  mundo.setGravity(0,500);
  j = new Juego();
  
}

void draw() {
  background(0);
  
  j.Start();
}
