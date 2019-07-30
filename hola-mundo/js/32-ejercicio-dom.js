'use strict'

window.addEventListener("load", function(){
  console.log("Cargar");
  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display="none";
  formulario.addEventListener("submit", function(){
    console.log('Evento submit');

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if(nombre.trim() == null || nombre.trim().length==0){
      alert("Nombre no es válido");
      return false;
    }
    if(apellido.trim() == null || apellido.trim().length==0){
      alert("apellido no es válido");
      return false;
    }
    if(edad==null || edad<=0 || isNaN(edad)){
      alert("edad no es válido");
      return false;
    }

    box_dashed.style.display="block";

    //var datos_usuario = [nombre, apellido, edad];

    // for(let indice in datos_usuario){
    //   var parrafo = document.createElement("p");
    //   parrafo.append(datos_usuario[indice]);
    //   box_dashed.append(parrafo)
    // }

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellido = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellido.innerHTML = apellido;
    p_edad.innerHTML = edad;

  });
});
