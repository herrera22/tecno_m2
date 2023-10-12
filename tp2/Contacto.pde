//----------METODO DE CAPTURA-----------
void oscEvent(OscMessage m) {
  if (m.addrPattern().equals("/annotations/palmBase")) {
    posX = map( m.get(0).floatValue(), 0, 800, width, 0 );
    posY = map( m.get(1).floatValue(), 0, 600, 0, height );
    if (!palmaDetectada) {
      palmaDetectada = true;
      tiempoPalmaDetectada = millis();
    } else {
      if (millis() - tiempoPalmaDetectada >= tiempoEspera && Estado == 0 ) {
        Estado=1;
        palmaDetectada = false;
      }
    }
  }
  // Establecer la posición del personaje en función de las coordenadas de la mano
  float xEnCaptura = posX;
  float yEnCaptura = posY;
  float xEnPantalla = map(xEnCaptura, altoMov, anchoMov, 0, width);
  float yEnPantalla = map(yEnCaptura, 0, altoMov, anchoMov, height);
  float f = 0.80;
  xManija = lerp(xEnPantalla, xManija, f);
  yManija = lerp(yEnPantalla, yManija, f);
  ancla.setTarget(xManija, 400);
}

//--------------FUNCION DE CONTACTO-----------------------
void contactStarted(FContact contact) {
  FBody _body1 = contact.getBody1();
  FBody _body2 = contact.getBody2();
  if (_body1.getName()=="pelota" && _body2.getName()=="aro" && contact.getNormalY()<=0) {
    punto=punto+1;
    hayPunto = true;
  } 
  if (_body2.getName()=="pelota" && _body1.getName()=="aro" && contact.getNormalY()<=0) {
    punto=punto+1;
    hayPunto = true;
    println("hay colision");
    p.eliminar();
    scoo.play();
  } else {
    hayPunto = false;
  }


  if (_body1.getName()=="pelota" && _body2.getName()=="suelo" && contact.getNormalY()<=0) {
    println("hola");
    p.eliminar();
  } else if (_body2.getName()=="pelota" && _body1.getName()=="suelo" && contact.getNormalY()<=0) {
    println("hola");
    p.eliminar();
  } 
  

  if (_body2.getName()=="pelota" && _body1.getName()=="null" ) {
    rebote.play();
  } else if (_body2.getName()=="pelota" && _body1.getName()=="personaje" ) {
    rebote.play();
  }else if (_body2.getName()=="pelota" && _body1.getName()=="basura" ) {
    rebote.play();
  }

  println(_body1.getName(), _body2.getName());
  println(punto);
}
