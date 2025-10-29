const doblarNumeros = (arreglo) => {
    const copia = Array(arreglo.length)
    for (let i = 0 ; i<arreglo.length ; i++) {
        copia[i] = arreglo[i]*2
    }
    return copia
}

const arreglo_numeros = [32,23,2,9,3]
console.log(
    "el arreglo es "+arreglo_numeros+
    "\nEl arreglo duplicado es: "+doblarNumeros(arreglo_numeros)
)
