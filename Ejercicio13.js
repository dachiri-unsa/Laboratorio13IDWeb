const combinarCatalogos = (tiendaA, tiendaB) => {
    const tiendaC = structuredClone(tiendaA);
    for (let producto in tiendaB) {
        tiendaC[producto] = tiendaB[producto];
    }
    return tiendaC;
}
const tienda1 = {
    arroz: 10,
    azucar: 5,
    harina: 8
}
const tienda2 = {
    arroz: 8,
    papa: 1.5,
    alberja: 4
}

const tienda3 = combinarCatalogos(tienda1,tienda2);
console.log(tienda3)
