const contarLetras = palabra => {
    const letras = {};
    for (let l of palabra) {
        if (letras[l] !== undefined) {
            letras[l] ++;
        }
        else {
            letras[l] = 1;
        }
    }
    return letras;
}

let palabra = "carnicero"
console.log("La cantidad de letras en la palabra: "+palabra)
console.log(contarLetras(palabra))
