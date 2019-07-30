'use strict'

window.addEventListener("load", function(){
  var formulario = document.querySelector("#formpeliculas");
  formulario.addEventListener("submit", function(){
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length > 0){
      localStorage.setItem(titulo, titulo);
    }
  });

  var ul = document.querySelector("#peliculas-list");
  for(let i in localStorage){
    if(typeof localStorage[i] == "string"){
      //console.log(localStorage[i]);
      var li = document.createElement("li");
      li.append(localStorage[i]);
      console.log(li);
      ul.append(li);
    }
  }

  var formularioB = document.querySelector("#formBorrarPeliculas");
  formulario.addEventListener("submit", function(){
    var titulo = document.querySelector("#borrarpelicula").value;
    if(titulo.length > 0){
      localStorage.removeItem(titulo);
    }
  });

});
