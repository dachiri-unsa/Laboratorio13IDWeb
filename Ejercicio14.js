const gestionarEmpleados = array_objetos => {
    const areaTrabajo = new Map();
    for (let l of array_objetos) {
        const area = l.area;
        const nombre = l.nombre;

        if (areaTrabajo.has(area)) {
            areaTrabajo.get(area).push(nombre);
        }
        else {
            areaTrabajo.set(area, [nombre]);
        }
    }
    return areaTrabajo;
}
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];
console.log(gestionarEmpleados(listaEmpleados))
