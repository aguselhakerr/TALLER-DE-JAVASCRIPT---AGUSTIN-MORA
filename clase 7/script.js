/*
Actividad práctica:

Crear un arreglo de objetos donde cada objeto represente un producto
con propiedades como nombre, precio, y cantidad.

Implementar funciones para:
Agregar productos.
Calcular el costo total.
Filtrar productos por precio.

*/

const productos = [
    { nombre: "camiseta", precio: 20 , cantidad: 2},
    { nombre: "pantalón", precio: 40 , cantidad: 1},
    { nombre: "zapatos", precio: 60 , cantidad: 5}

];
document.querySelectorAll("#pedro").forEach(element => {
    element.innerHTML = productos.map(producto => `${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`).join("<br>");
});
let precioFinal;
const precioTotal = {
    precioFinal : productos[0].precio * productos[0].cantidad 
    
};

console.log(precioTotal());