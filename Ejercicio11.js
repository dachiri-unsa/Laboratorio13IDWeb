const auto = {
    marca: "toyota",
    modelo: "4Runner",
    año: 2025,
    detalles() {
        console.log(`El auto es un ${this.marca}, del modelo ${this.modelo} y del año ${this.año}`)
    }
}
auto.detalles();
