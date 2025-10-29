const filtrarYTransformar = (arreglo) => {
    arreglo = arreglo.filter(num => num >= 0 )
    let sumatoria = 0
    arreglo.forEach((num, i) => {
         sumatoria+=num*num
    })
    return sumatoria
}

const arreglo_numeros = [3,-2,5,-9,0]
console.log(
    "El arreglo es: "+arreglo_numeros+
    "\nLa respuesta de la suma de los cuadrados de los positivos es: "+
    filtrarYTransformar(arreglo_numeros)
)
