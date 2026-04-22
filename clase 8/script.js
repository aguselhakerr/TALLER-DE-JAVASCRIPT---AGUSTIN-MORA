console.log("--- ARREGLOS ---\n")
const frutas = ["Manzana","Banana","Melon"]
console.log(frutas);
document.getElementById("p1").textContent = frutas;

// Agregamos una fruta
console.log("Agregamos una fruta al final.");
frutas.push("MANGO");
console.log(frutas);
document.getElementById("p1").textContent = frutas;

// Quitamos el ultimo valor
console.log("Quitamos la fruta del final.");
frutas.pop();
console.log(frutas);
document.getElementById("p1").textContent = frutas;

// Se agrega primero en la lista
console.log("Agregamos una fruta al principio.");
frutas.unshift("Pera");
console.log(frutas);
document.getElementById("p1").textContent = frutas;

// Elimina el primero
console.log("Quitamos la fruta del inicio.");
frutas.shift("Ananá");
console.log(frutas);
document.getElementById("p1").textContent = frutas;


// Eliminar un elemento especifico
let index = frutas.indexOf("Banana"); // int de la posición de ese valor (1 en este caso)
console.log("Eliminamos un valor especifico");
frutas.splice(index,1);
console.log(frutas);
document.getElementById("p1").textContent = frutas;

// Imprime una por una
frutas.forEach(function(fruta){
    console.log(fruta);
});

// cambia cada uno de los elementos
const frutasEnMayusculas = frutas.map(function(fruta){
    return fruta.toUpperCase();
});
console.log("Frutas en mayusculas")
console.log(frutasEnMayusculas);

// filter podemos detectar cosas como una sola letra o más letras
// En ese caso habria que hacer un forEach para mostrarlo

const frutasConA = frutas.filter(function(frutas){
    return frutas.includes("o") || frutas.includes("O");
});

console.log("Filtrar las frutas que tienen la letra 'o' ");
console.log(frutasConA);


// reduce para concatenar strings
const frutasConcatenadas = frutas.reduce(function(acumulador,fruta){
    return acumulador + fruta + " | ";
}, "• ");
console.log(frutasConcatenadas);

//reduce para sumar números
const numeros = [1,2,3,4,5];
const suma = numeros.reduce(function(acumulador,numero){
    return acumulador+numero;
},0);

console.log(suma);


console.log("\n\n--- OBJETOS ---\n\n");

// Objeto, se usa this para referirse a este nombre, sin this no anda
const persona = {
    nombre: "Agustín",
    edad: 20,
    // Podemos crear una función dentro del objeto
    saludar: function(){
        return "Hola mi nombre es "+ this.nombre + " y tengo "+ this.edad +" años!";
    }
};
console.log(persona.saludar());

const usuarioBancario = {
    nombre: "Silvia",
    saldo: 727,
    depositar: function (cantidad){
        this.saldo += cantidad;
    }
}
console.log("Saldo inicial: "+usuarioBancario.saldo);
usuarioBancario.depositar(12000);
console.log("Saldo despues del deposito: "+usuarioBancario.saldo);

// Crear un arreglo de objetos donde cada objeto represente un producto 
// con propiedades como nombre, precio, y cantidad. 
// Implementar funciones para:
//Agregar productos.
//Calcular el costo total.
//Filtrar productos por precio.

console.log("\nActividad práctica 3\n\nCrear un arreglo de objetos donde cada objeto represente un producto con propiedades como nombre, precio, y cantidad. Implementar funciones para:\nAgregar productos.\nCalcular el costo total.\nFiltrar productos por precio.\n");

const televisor = {
    nombre: "Philips",
    precio: 900,
    cantidad: 7
};
const heladera = {
    nombre: "Drean",
    precio: 1200,
    cantidad: 4
};
const celular = {
    nombre: "Google Pixel",
    precio: 600,
    cantidad: 2
}
const stock = [televisor,heladera, celular];
index = stock.indexOf(televisor);
console.log("\nTV "+stock[index].nombre + ": "+ stock[index].precio + "$ USD");
console.log("\nAgregamos el producto 'lavarropas' al stock\n\n");
const lavarropas = {
    nombre: "Samsung",
    precio: 1300,
    cantidad: 3
};
stock.push(lavarropas);
index = stock.indexOf(lavarropas);
console.log("Lavarropa "+stock[index].nombre+": "+stock[index].precio+"$ USD");

const precioTotal = function(){
    stock.forEach(function(){
        suma += stock;
        return suma;
    });
};
/*
// Imprime una por una
frutas.forEach(function(fruta){
    console.log(fruta);
});
*/
console.log("\n\nLa suma de los precios es: "+suma);

console.log("Array de productos")
let productos = [
    {nombre: "Laptop", precio: 800, cantidad: 2},
    {nombre: "Mouse", precio: 20, cantidad: 5},
    {nombre: "Teclado", precio: 120, cantidad: 3}
];
console.log(productos);
console.log("Agregamos MiniPC");

function agregarProductos(nombre,precio,cantidad){
    productos.push({nombre,precio,cantidad});
};
agregarProductos("miniPc",1200,10);
console.log(productos);

function calcularTotal(){
    let total = 0;
    for (let i = 0; i <productos.length; i++){
        total += productos[i].precio + productos[i].cantidad;
    };
    return total;
};
console.log("\nTotal de precio: "+calcularTotal());



console.log("\n\n\n --- EJERCICIOS --- \n\n\n");

console.log("\n1) Crea un arreglo con 5 números y muestra el tercero en consola.");
const arreglo1 = [1,2,3,4,5];
console.log(arreglo1);
console.log(arreglo1[2]);

console.log("\n2) Agrega un nuevo elemento a un arreglo usando push.");
arreglo1.push(6);
console.log(arreglo1);

console.log("\n3) Elimina el último elemento de un arreglo y muéstralo en consola.");
console.log("Se eliminó el número: "+arreglo1.pop());
console.log(arreglo1);


console.log("\n4) Usa map para multiplicar por 2 cada número de un arreglo.");
console.log(arreglo1.map(multiplicarPorDos));
function multiplicarPorDos(num){
    return num*2;
};

console.log("\n5) Filtra un arreglo para obtener solo los números mayores a 10.");
arreglo1.push(10,11,12,13,14,15);
console.log(arreglo1);
console.log("Números mayores a 10:\n"+arreglo1.filter(numeroMayorADiez).join(" - "));
function numeroMayorADiez(num){
    if (num>10){
        return num;
    };
};

console.log("\n6) Declara un objeto con las propiedades nombre, edad, y profesión.");
const empleado = {
    nombre: "Agustín",
    edad: "20",
    profesion: "Hacker"
};
console.log(empleado);

console.log("\n7) Accede y muestra el valor de una propiedad de un objeto.");
console.log("Nombre: ",empleado.nombre);

console.log("\n8) Agrega un método a un objeto que devuelva un saludo personalizado.");
empleado.saludar = function(){ // Esto se podría poner directamente en la llamada de la linea 224
    return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años. Actualmente estoy trabajando como ${this.profesion} en una empresa internacional!`;
};
console.log(empleado.saludar()); // Aca se podría poner directamente la función

console.log("\n9) Usa reduce para sumar todos los números de un arreglo.");
console.log(arreglo1);
// Se puede poner la función directamente
console.log("La suma de los numeros del arreglo da: "+arreglo1.reduce(function(total,num){
    return total+num
}));

console.log("\n10) Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.");
const celulares = [
    {nombre:"Samsung S25",precio:1200},
    {nombre:"Iphone 17",precio:1250},
    {nombre:"Moto edge 70 fusion",precio:750}
];
function mostrarNombresCelulares(){ 
    for (let i =0; i<celulares.length;i++){
        console.log("Nombre: "+celulares[i].nombre);
    };
}
mostrarNombresCelulares();
console.log("\nAgregamos un nuevo celular al final de la lista.");
celulares.push({nombre:"Google pixel 10",precio:900});
mostrarNombresCelulares();
console.log(celulares);

