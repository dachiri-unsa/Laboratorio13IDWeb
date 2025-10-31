const presios_de_productos = new Map()
presios_de_productos.set("arroz", 8)
presios_de_productos.set("azucar", 5)
presios_de_productos.set("gaseosa", 7)
presios_de_productos.set("pollo", 15)
presios_de_productos.set("atun", 4)

let sumatoria = 0
for(let presios of presios_de_productos.values()) {
    sumatoria += presios
}
console.log("El presio total de los productos es "+sumatoria)
