class Pelota {
  PImage pelota;
  Pelota() {
    //FBox base = new FBox(200, 200);
    //mundo.add(base);
    //propiedades de pelota 
    pelota=loadImage("pelota_basket.png");
    FCircle circulo = new FCircle(60);
    //Con esta propiedad anclamos la imagene de la pelota en el elemento fisico"circulo" y seteamos la pos.
    circulo.attachImage(pelota);
    circulo.setPosition(600, 200);
    //le pasamos parametros de gravedad para su correcto funcionamiento en el juego
    
    circulo.setRestitution(1.4);
    //añadimos el circulo al mundo 
    mundo.add(circulo);
  }

  void pelotaFisica() {
  }
}
