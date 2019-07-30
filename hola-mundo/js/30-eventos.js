'use strict'

//eventos de rato

window.addEventListener("load", function(){
  function cambiarColor(){
    console.log("click");
    var bg = boton.style.background
    if(bg=="green"){
      boton.style.background="red";
      boton.style.padding = "10px";
      boton.style.border = "1px solid #ccc";
    }else{
      boton.style.background="green";
    }
    return true;
  }

  //click
  var boton = document.querySelector("#boton");
  boton.addEventListener("click", function(){
    cambiarColor();
    this.style.border = "10px solid black";
  });

  //mouse over
  boton.addEventListener("mouseover", function(){
    boton.style.background="#ccc";
  });

  //mouse out
  boton.addEventListener("mouseout", function(){
    boton.style.background="white";
  });

  //focues
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("focus", function(){
    console.log("[focus] Foco en input");
  })

  //blur
  input.addEventListener("blur", function(){
    console.log("[blur] Estas fuera del input");
  });

  //keydown
  input.addEventListener("keydown", function(event){
    console.log("[keydown] pulsando tecla", String.fromCharCode(event.keyCode));
  });

  //keypress
  input.addEventListener("keypress", function(event){
    console.log("[keypress] Tecla presionada: ", String.fromCharCode(event.keyCode));
  });

  //keyup
  input.addEventListener("keyup", function(event){
    console.log("[keyup] se suela la tecla");
  });
}); //Final de load
