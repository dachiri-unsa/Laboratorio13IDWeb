const tieneDuplicados = arreglo => {
    const setDelArreglo = new Set(arreglo);
    if (setDelArreglo.size === arreglo.length) return false;
    return true;
}

const numeros = [2,235,267,67,23,4,2]
console.log(tieneDuplicados(numeros))
