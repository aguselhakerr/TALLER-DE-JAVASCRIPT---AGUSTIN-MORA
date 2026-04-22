//alert("Hola mundo, js!");
console.log("!Hola desde JavaScript!");

// 2. Dentro de app.js, declarar variables con let y const, y mostrar su valor en la consola.

let nombre = "Agustín";
const edad = 20;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

let suma = 10 + 5;
console.log(`10 + 5 = ${suma}`);

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

const PI = 3.14159;
console.log(`(constante) PI = ${PI}`);

//3. Realizar operaciones matemáticas utilizando los operadores aritméticos y mostrar los resultados.

console.log("7 + 2 = "+(7+2));
console.log("7 - 2 = "+(7-2));
console.log("7 * 2 = "+(7*2));
console.log("7 / 2 = "+(7/2));

//4. Crear una condición que compare dos números y muestre en la consola si son iguales o uno es mayor que otro.

let num1 = 727;
let num2 = 15;
let comparar = num1>num2;

if (comparar == true){
    console.log (`${num1} es mayor a ${num2}`);
} else {
    console.log (`${num1} es menor o igual a ${num2}`);
}

