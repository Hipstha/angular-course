'use strict'

//BOM Browser Object Model

// function getBom(){
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
// }
function getBom(){
  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location);
}

function redirect(url){
  window.location.href = url;
}

getBom();

function abrirVentana(url){
  window.open(url)
}
