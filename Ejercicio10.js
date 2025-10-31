const invertirMap = map => {
    const mapInvertido = new Map();
    for (let [clave, valor] of map) {
        mapInvertido.set(valor,clave);
    }
    return mapInvertido;
}

const capitales = ([["Peru","Lima"],["Chile","Santiago"],["Colombia","Bogota"]])
console.log("El mapa es: ")
console.log(capitales)
console.log("El mapa invertido es: ")
console.log(invertirMap(capitales))
