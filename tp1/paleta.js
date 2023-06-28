class Paleta {
    constructor() {
    // Imagenes de los trazos
    this.cantidad = 3;
    this.trazos = [];
    // Ciclo for para asignar las imagenes al arreglo
    for (let i = 0; i < this.cantidad; i++) {
        let nombre = "images/Trazado" + nf(i + 1, 3) + ".png";
        this.trazos[i] = loadImage(nombre);
        }
    }
    darColor(){
        let x = int(random(this.trazos[1].width));
        let y = int(random(this.trazos[1].height));
        let elColor=this.trazos[1].get(x,y);
        return elColor;
    }
}
