document.getElementById("form-label1").textContent = "Ingrese el correo electronico";
document.getElementById("form-label2").textContent = "Ingrese la contraseña";
document.querySelector(".form-text").textContent = "Nunca compartiremos tu correo con nadie";
document.getElementById("form-label3").textContent = "Recuerdame";

document.querySelector(".btn-primary").textContent = "Enviar";

// document.getElementById("form-label1").innerHTML ="<b><i>Ingresa tu correo electronico </i></b>";
document.querySelector("#exampleInputEmail1").setAttribute("placeholder","Ingrese el correo");

document.getElementById("emailHelp").innerHTML = "<b><i>Te robaremos todo los datos personales</i></b>";

document.getElementById("contenedor1").style.backgroundColor = "red";


document.querySelector(".btn-primary").addEventListener("click", function (){
    alert("Cuestionario enviado!"); 
});

document.getElementById("exampleInputEmail1").addEventListener("click", function(e){
    console.log('EMAIL: ', e.value);
});
document.querySelector("#exampleInputEmail1").addEventListener("keydown", function(e){
    console.log('Tecla presionada: ',e.key)
});
document.querySelector("#exampleInputEmail1").addEventListener("keyup", function(e){
    console.log('Tecla soltada: ',e.key)
});

document.getElementById("exampleInputPassword1").addEventListener("click", function(e){
    console.log('\nCONTRASEÑA: ', e.value);
});
document.getElementById("exampleInputPassword1").addEventListener("keydown", function(e){
    console.log('Tecla presionada: ',e.key)
});
document.getElementById("exampleInputPassword1").addEventListener("keyup", function(e){
    console.log('Tecla soltada: ',e.key)
});


document.getElementById("exampleInputEmail1").addEventListener("input", function(e){
    console.log('EMAIL: ', e.target.value);
});
document.getElementById("exampleInputPassword1").addEventListener("input", function(e){
    console.log('Contraseña: ', e.target.value);
});




/*


document.querySelectorAll("form-label").forEach(label => {
    label.textContent = "Ingresa tu correo electronico";
});
document.getElementById("contenedor1").addEventListener(InputEvent, function(){
    document.getElementById("exampleInputEmail1").textContent = '';
});
*/