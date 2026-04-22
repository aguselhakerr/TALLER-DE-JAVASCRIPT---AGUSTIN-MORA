/*
//const botonToggle = document.getElementById('btnClick');
//const div = document.getElementById('myDIV');

document.getElementById('btnClick').addEventListener('click', function() {
    document.getElementById("myDIV").classList.toggle("myStyle");
});
function myFunction() {
document.getElementById("myDIV").classList.toggle("myStyle");
}
*/


// 1) Selecciona un elemento por su ID y cambia su texto.
//console.log("1)");
document.getElementById("botonEjercicio01").addEventListener("click", function(){
    document.getElementById("elementoEjercicio01").textContent = "Hola mundo, desde JS!";
})

// 2) Cambia el color de fondo de un elemento al hacer clic en él.
document.getElementById("botonEjercicio02").addEventListener("click", function() {
    document.getElementById("elementoEjercicio02").classList.toggle("estiloEjercicio2");
});

// 3) Selecciona todos los elementos con una clase específica y cámbiales el texto.
document.getElementById("botonEjercicio03").addEventListener("click", function(){
    document.querySelectorAll(".ejercicio03").forEach(element => {
        element.textContent = 'Nuevo texto aplicado a la clase "ejercicio03"';
    });
});

// 4) Agrega una nueva clase a un elemento seleccionado.
document.getElementById("botonEjercicio04").addEventListener("click", function(){
    document.getElementById("divEjercicio04").classList.add("titulo");
});

// 5) Elimina una clase existente de un elemento.
document.getElementById("botonEjercicio05").addEventListener("click", function(){
    document.getElementById("divEjercicio05").classList.remove("titulo");
});

// 6) Cambia el contenido HTML de un div usando innerHTML

document.getElementById("botonEjercicio06").addEventListener("click", function(){
    document.getElementById("parrafoEjercicio06").innerHTML = "<b><i>Nuevo texto con etiquetas HTML (b, i)</i></b>";
});

// 7) Muestra en la consola el texto de un párrafo seleccionado.


console.log(document.getElementById("parrafoEjercicio07").textContent);


// 8) Usa querySelectorAll para seleccionar múltiples elementos y recorrerlos con un bucle.
document.querySelectorAll(".frutas").forEach((fruta,indice) => {
    fruta.textContent = `${indice+1}. ${fruta.textContent} añadida a la lista!`
});