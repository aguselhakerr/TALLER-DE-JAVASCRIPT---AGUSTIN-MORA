let precio = 10000;
let esPremium = false;

//if (precio > 50000 && esPremium === false){console.log}
/*
if (precio >= 50000 || esPremium) {
    alert("Este producto tiene envío gratis");
} else {
    alert("Debe abonar el costo de envío");
}
*/
/*
1) Crear una condición donde:
El usuario pueda acceder si:
Tiene más de 18 años Y
Está registrado

*/

console.log("1)");
usuarioRegistrado = true;
let edad = 16;

if (edad>=18 && usuarioRegistrado){
    console.log("Puede acceder a la pagina!")
}else {
    console.log("Usted no cumple los requisitos para acceder a la pagina.")
}

let onclick = false;
let onmouseover = false;
document.getElementById("onclick").addEventListener("click",function(){
    if (onclick){
        console.log("El producto es caro");
    }else{
        console.log("El producto es barato")
    }
})

// Cuando se hace clic en el botón, muestra un mensaje
        document.getElementById('btnClick').addEventListener('click', function() {
            alert('¡Hiciste clic en el botón!');
        });