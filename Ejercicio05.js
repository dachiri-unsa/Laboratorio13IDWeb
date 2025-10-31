const reordenarPalabras = (cadena_palabras) => cadena_palabras.toUpperCase().split(" ");

let frutas = "manzana pera mandarina durazno carambola uva";
console.log(
    "Las frutas son: "+frutas+
    "\nLa cadena ordenada: "+reordenarPalabras(frutas)
)
