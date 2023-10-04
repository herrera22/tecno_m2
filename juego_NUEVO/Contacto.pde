void oscEvent(OscMessage m) {
  if (m.addrPattern().equals("/annotations/palmBase")) {
    posX = map( m.get(0).floatValue(), 0, 800, width, 0 );
    posY = map( m.get(1).floatValue(), 0, 600, 0, height );
    if (!palmaDetectada) {
      palmaDetectada = true;
      tiempoPalmaDetectada = millis();
    } else {
      if (millis() - tiempoPalmaDetectada >= tiempoEspera ) {
        Estado=1;
        palmaDetectada = false;
      }
    }
  }



  // Establecer la posición del personaje en función de las coordenadas de la mano
  float xEnCaptura = posX;
  float xEnPantalla = map(xEnCaptura, 0,anchoMov,0,width);
  float f = 1;
  xManija = lerp(xEnPantalla, xManija, f);
  ancla.setTarget(xManija, 545);
}

//--------------funcion de contacto-----------------------
void contactStarted(FContact contact) {
  FBody _body1 = contact.getBody1();
  FBody _body2 = contact.getBody2();
  //if ((_body1.getName()=="personaje" && (_body2.getName()=="suelo")) || (_body2.getName() == "personaje" && (_body1.getName() == "suelo" ))) {
  //  if (contact.getNormalX() == 0 && pj.getVelocityY() >= 0) {
  //    if (_body1.getName()=="personaje" && contact.getNormalY()>0) {
  //      pj.puedeSaltar = true;
  //    } else if (_body2.getName()=="personaje" && contact.getNormalY()<0) {
  //      pj.puedeSaltar = true;
  //    }
  //  }
  //}


  if (_body1.getName()=="pelota" && _body2.getName()=="aro" && contact.getNormalY()<=0) {
    punto=punto+1;
    println("hay colrision");
  } else if (_body2.getName()=="pelota" && _body1.getName()=="aro" && contact.getNormalY()<=0) {
    punto=punto+1;
  }
  
   if (_body1.getName()=="pelota" && _body2.getName()=="suelo" || _body2.getName()=="suelo" && _body1.getName()=="pelota") {
    mundo.remove(pj);
    hayPelota=false;
    println("hay colrision");
  }


  println(_body1.getName(), _body2.getName());
  println(punto);
}
