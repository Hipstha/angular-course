'use strict'

window.addEventListener("load", function(){
  //Comprobar disponibilidad
  if(typeof(Storage)!="undefined"){
    console.log('Disponible');
  }else{
    console.log("Incompatible");
  }

  // Guardar datos
  localStorage.setItem("title", "Curso de JS");

  //Recuperar elemento

  document.querySelector("#peliculas").innerHTML = localStorage.getItem("title");

  //Guardar objetos

  var usuario = {
    nombre: "Alejandro",
    email: "alex@hotmail.com",
    web: "alex.com"
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  //Recuperar objeto
  console.log(localStorage.getItem("usuario"));
  var userjs = JSON.parse(localStorage.getItem("usuario"));
  console.log(userjs);
  document.querySelector("#datos").append(" "+userjs.web + " Nombre: " + userjs.nombre);

  localStorage.removeItem("usuario");
  localStorage.clear();

});
