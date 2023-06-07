class Objeto2 {
    constructor(amplitude, frequency) {
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.xSpacing = 1.5; // Espaciado horizontal entre puntos
        this.yOffset = 200; // Desplazamiento vertical base
    
        this.numCurves = 5; // Número de curvas a dibujar
        this.spacing = 20; // Espaciado vertical entre curvas
        this.curves = []; // Arreglo para almacenar las curvas
    
        // Crea las curvas y agrega los puntos de control iniciales
        for (let i = 0; i < this.numCurves; i++) {
          this.curves[i] = {
            x1: 0,
            y1: 200 + i * this.spacing,
            x2: 0,
            y2: 200 + i * this.spacing,
            x3: 400,
            y3: 200 + i * this.spacing,
            x4: width, // Valor fijo para el último punto de contacto de x
            y4: height - 200 + i * this.spacing, // Valor fijo para el último punto de contacto de y
            t: 0,
            speed: random(0.01, 0.05),
          };
        }
      }
    
      update(mouseX, mouseY) {
        // Actualiza y dibuja cada curva
        for (let i = 0; i < this.numCurves; i++) {
          let curve = this.curves[i];
    
          // Calcula la longitud de la curva en función del movimiento del puntero del mouse
          let curveLength = mouseX;
    
          // Actualiza los puntos de control con los valores del puntero del mouse
          curve.x2 = map(mouseX, 0, width, 0, curveLength);
          curve.y2 = mouseY + i * this.spacing;
          curve.x3 = map(mouseX, 0, width, curveLength, width);
          curve.y3 = height - mouseY + i * this.spacing;
    
          // Incrementa el parámetro de tiempo para el avance progresivo de x4
          curve.t += curve.speed;
    
          // Calcula la posición horizontal del último punto de control utilizando la función noise
          let x4Min = curve.x3; // Establece el límite mínimo para x4 como el valor de x3
          let x4Max = width; // Establece el límite máximo para x4 como el ancho de la ventana
    
          // Calcula el avance progresivo de x4 utilizando la función noise
          let x4Progress = noise(curve.t);
          curve.x4 = lerp(x4Min, x4Max, x4Progress);
    
          // Calcula el desplazamiento vertical del último punto de control utilizando la función cos
          let y4Offset = map(cos(curve.t), -1, 1, -100, 100);
          curve.y4 = curve.y3 + y4Offset;
    
          // Limita el movimiento del bezier dentro de la pantalla
          if (curve.x2 > width) {
            curve.x2 = width;
            curve.x3 = width;
          }
        }
      }
    
      draw() {
        // Dibuja cada curva
        for (let i = 0; i < this.numCurves; i++) {
          let curve = this.curves[i];
    
          // Dibuja la curva bezier con los puntos de control actualizados
          noFill();
          stroke(0);
          bezier(
            curve.x1,
            curve.y1,
            curve.x2,
            curve.y2,
            curve.x3,
            curve.y3,
            curve.x4,
            curve.y4
          );
    
          // Dibuja un círculo en el punto final de la curva
          fill(255, 0, 0);
          ellipse(curve.x4, curve.y4, 8, 8);
    
          // Reinicia la posición del bezier cuando alcanza el final del eje x
          if (curve.x4 >= width) {
            curve.t = 0;
            curve.x2 = 0;
            curve.y2 = 200 + i * this.spacing;
            curve.x3 = width;
            curve.y3 = 200 + i * this.spacing;
          }
        }
      }
    }