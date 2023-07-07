class Paleta {
    constructor() {
    // Imagenes de los trazos
    this.cantidad = 3;
    this.trazos = [];
    this.img= loadImage(".images/trazado001.png");
    // Ciclo for para asignar las imagenes al arreglo
    for (let i = 0; i < this.cantidad; i++) {
        let nombre = "images/Trazado" + nf(i + 1, 3) + ".png";
        this.trazos[i] = loadImage(nombre);
        this.trazos[i].mask(this.trazos[i]);
        }
    }
    darColor(){
        let x = int(random(this.trazos[1]));
        let y = int(random(this.trazos[1]));
        let elColor=this.trazos[0].get(x,y);
        return elColor;
    }
}
