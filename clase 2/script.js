/*
// 1. Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.
const nombre = "Agustín";
console.log(`Hola, mi nombre es ${nombre}`);

// 2. Declara y suma dos números, muestra el resultado en consola.
let num1 = 25;
let num2 = 14;

let suma = num1+num2;
console.log(`${num1} + ${num2} = ${suma}`);

// 3. Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.

let comparar1 = 10 > 5;
let comparar2 = 5 < 2;

console.log(`10 es mayor que 5? `+comparar1);
console.log("5 es menor que 2? "+comparar2);

// 4. Declara variables con let y const y nota las diferencias al intentar cambiarlas.

let varLet = 15;
const varConst = 27;
console.log("varLet = 15\nvarConst = 27");

console.log("Intentando cambiar variable let...");
varLet = varLet+1;
console.log("varLet = "+varLet);

console.log("Intentando cambiar variable const...");
//varConst = varConst + 1
console.log("Error: No se pueden modificar variables constantes.");

// 5. Escribe un comentario que explique qué hace tu código.
console.log("El codigo primero declara una variable 'nombre' que tiene asignado el valor 'Agustín', despues se ecribe el mensaje utilizando la variable.");
console.log("Despues crea 2 variables que contienen número enteros y los suma");
console.log("Luego usa comparadores logicos para evaluar 2 pares de números");
console.log("Despues de esto se declara una variable let y se modifica. Además se declara una variable constante y se le intenta cambiar el valor, pero esto larga un error.");

// 6. Declara una variable de tipo boolean y úsala en una operación lógica.
let booleano = 5>2 && 5<10;
console.log("5 es mayor que 2 y menor que 10? "+booleano);


// 7.Imprime el tipo de dato de una variable usando typeof.

let cadenaDeTexto = 7.27;
console.log("El tipo de dato de la cadena de texto: "+typeof cadenaDeTexto);

// 8. Declara un array y muestra uno de sus elementos en la consola.

let arreglo = [1,2,3,4,5];
console.log(`El arreglo contiene los datos: [${arreglo}]`);
console.log("El primer dato (posición cero) es: "+arreglo[0]);
console.log("Y el ultimo (posición 4) es: "+arreglo[4]);

// 9. Usa una operación con % para encontrar el resto de 17 ÷ 3.

let modulo = 17%3;
console.log("El resto de 17/3 es: "+modulo);

// 10. Declara una variable sin valor e imprime su valor inicial.

let sinValor;
console.log("Variable sin valor = "+sinValor);

*/
//ESTRUCTURAS DE CONTROL
console.log("\n---ESTRUCTURAS DE CONTROL---");
/*
let edad = 50;

if (edad >=18){
    console.log("Eres mayor de edad");
} if (edad >=16){
    console.log("Puedes obtener tu licencia de conducir");
} else{
    console.log("No puedes obtener tu licencia de conducir porque eres menor de edad");
}
*/

//1) Escribe un programa que verifique si un número es positivo o negativo.
console.log("1)");

let num3=0;

if (num3>0){
    console.log("El número "+num3+" es positivo");
} else if (num3<0){
    console.log("El número "+num3+" es negativo");
} else {
    console.log("El número "+num3+" es neutro");
}


//2. Usa switch para imprimir el día de la semana según un número del 1 al 7.

console.log("\n2)");

let dia = 1;

switch (dia){
    case 1:
        console.log("Lunes"); break;
    case 2:
        console.log("Martes"); break;
    case 3:
        console.log("Miercoles"); break;
    case 4:
        console.log("Jueves"); break;
    case 5:
        console.log("Viernes"); break;
    case 6:
        console.log("Sabado"); break;
    case 7:
        console.log("Domingo"); break;
    default:
        console.log("El número ingresado no es valido.");
}


//3) Haz un bucle for que imprima los números del 1 al 10.

console.log("\n3)")
let resultado1= "";
for (i=0;i<=10;i++){
    resultado1+=i + " ";
}
console.log(resultado1);

//4) Crea un programa que calcule el factorial de un número usando while.
console.log("\n4)");
let num4 = 4;
let iterador = num4;
let resultado = 1;
while (iterador>0){
    resultado*= iterador;
    iterador--;
}

console.log("El factorial de "+num4+" es = "+resultado);


//5) Escribe un condicional que determine si una persona puede votar según su edad.
console.log("\n5)");
const edad1=18;
if (edad1<16){
    console.log("Es menor de edad. No puede votar");
}else if (edad1>=16 && edad1<18){
    console.log("Puedes votar, pero no estas obligado a hacerlo.");
}else{
    console.log("Puedes votar y estás obligado a hacerlo");
}

//6) Imprime los números pares entre 1 y 20 con un bucle for.
console.log("\n6)");
let resultado2 = "";
for(i=0;i<=20;i=i+2){
    resultado2+=i + " ";
}
console.log(resultado2);


//7)Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).
console.log("\n7)");
let calificacion = "A";

switch (calificacion.toUpperCase()){
    case "A":
        console.log("Tiene una A"); break;
    case "B":
        console.log("Tiene una B"); break;
    case "C":
        console.log("Tiene una C"); break;
    case "D":
        console.log("Tiene una D"); break;
    case "F":
        console.log("Tiene una F"); break;
    default:
        console.log("Ingrese una calificación valida.");
}


//8) Haz un programa que pida dos números y los sume si ambos son positivos.
console.log("\n8)");
let num5=5;
let num6=7;
let suma2;
if(num5>0 && num6>=0){
    suma2=num5+num6;
    console.log(`${num5} + ${num6} = ${suma2}`);
}else{
    console.log("Error: Ingrese solo números positivos");
}

//9) Escribe un bucle while que cuente de 10 a 1 en orden descendente.
console.log("\n9)");
let num7=10;
let resultado3="";
while (num7>0){
    resultado3+=num7+" ";
    num7--;
}
console.log(resultado3);

//10)Crea una calculadora básica que permita sumar o restar según el operador ingresado.
console.log("\n10)");

let operador = "+";
let num8=5;
let num9=3;

switch(operador){
    case "+":
        console.log(`${num8} + ${num9} = ${num8+num9}`); break;
    case "-":
        console.log(`${num8} - ${num9} = ${num8-num9}`); break;
    case "*":
        console.log(`${num8} * ${num9} = ${num8*num9}`); break;
    case "/":
        console.log(`${num8} / ${num9} = ${num8/num9}`); break;
    default:
        console.log("Error: Ingrese un operador aritmético valido.");
}



console.log("\n\n---FUNCIONES---");

//1)Declara una función que calcule el área de un triángulo.
console.log("\n1)");

function areaTriangulo(a,b){
    return a*b;
}
let base1=2;
let altura1=5;

console.log(`base: ${base1}\naltura: ${altura1}\narea = ${areaTriangulo(base1,altura1)}`);

//2) Crea una función anónima que determine si un número es par o impar.
console.log("\n2)");
const esPar = function(a){
    if(a%2==0){
        return "par";
    }else{
        return "impar";
    }
}
let num10 = 28;
console.log(`El número ${num10} es: `+esPar(num10));


//3) Usa una función de flecha para multiplicar dos números.
console.log("\n3)");

const multiplicador = (a,b) => a*b;
let num11 = 3;
let num12 = 5;
console.log(`${num11} * ${num12} = ${multiplicador(num11,num12)}`);

//4) Escribe una función que convierta una palabra a mayúsculas.
console.log("\n4)");
function textoAMayuscula(textos){
    return textos.toUpperCase();
}
let textos = "prueba1";
console.log(textoAMayuscula(textos));


//5) Haz una función que reciba dos números y retorne el mayor de ellos.
console.log("\n5)");
const numMayor = function(a,b){
    if (a>b){
        console.log(`${a} es Mayor que ${b}`);
    }else if (a<b){
        console.log(`${a} es menor que ${b}`);
    }else {
        console.log(`${a} es igual que ${b}`);
    }
} 
let num13 = 7;
let num14 = 27;

numMayor(num13,num14);

//6) Crea una función que invierta una cadena.
console.log("\n6)");
let cadena1="cadenaDeTexto";

function invertirTexto(cadenaDeTexto){
    let separarCadena = cadenaDeTexto.split();
    console.log(separarCadena);
    
    let invertirCadena = cadenaDeTexto.reverse();
    console.log(invertirCadena);
    
    let unirCadena = cadenaDeTexto.join("");
    console.log(unirCadena);

    return unirCadena;
    /*
    let cadenaInvertida ="";
    for(i=cadena1.length;i<=0;i--){
        cadenaInvertida+=cadenaDeTexto[i] + " ";
    }
        */
}
console.log(invertirTexto(cadena1));

// FUNCIONES
/*
//Función declarativa
function saludar(nombre){
    return `Hola, ${nombre}!`;
}

console.log(saludar("Agus"));

//Función anonima

const suma = function(a,b){
    return a+b;
}
console.log(suma(12344,1));


//Función flecha o Arrow Function

const resta = (a,b) => a - b;
console.log(resta(10,3));
*/
