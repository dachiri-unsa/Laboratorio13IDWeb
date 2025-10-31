const contarPalabras = texto => {
    const palabras = texto.split(" ");
    const setPalabrasUnicas = new Set(palabras);
    const mapaPalabras = new Map();
    let cantidad;
    for (let palabras_unicas of setPalabrasUnicas) {
        cantidad = 0;
        for (let i = 0 ; i < palabras.length ; i++) {
            if (palabras_unicas === palabras[i]) {
                cantidad++;
            }
        }
        mapaPalabras.set(palabras_unicas, cantidad);
    }
    return mapaPalabras
}

let estelar = "sol luna sol sol estrella luna";
console.log(contarPalabras(estelar));
