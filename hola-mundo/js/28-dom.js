'use strict'

// DOM - Document Object Model

function cambiaColor(color){
  caja.style.background = color;
}


//Conseguir de ID
//var caja = document.getElementById("micaja");

// var caja = document.querySelector("#micaja");
// caja.innerHTML = "Texto en la caja desde js";
// caja.style.background = "red";
// caja.style.padding = "20px";
// caja.style.color = "white";
// caja.className="hola";
//
// console.log(caja);
//
// cambiaColor("green");

//Elemento por etiqueta
var todosLosDivs = document.getElementsByTagName("div");
var contenidoTexto = todosLosDivs[1];
contenidoTexto.innerHTML = "otro texto segundo elemento";
contenidoTexto.style.background = "red";
console.log(contenidoTexto);

console.log(todosLosDivs);
//todosLosDivs.forEach((valor, indice)=>{
for(let valor in todosLosDivs){
  if(typeof todosLosDivs[valor].textContent == "string"){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
  }
}

//});

//Por su clase
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
//divsRojos[0].style.background = "red";
console.log(divsAmarillos);
divsAmarillos[0].style.background="yellow";
for(let div in divsRojos){
  if(divsRojos[div].className == "rojo"){
    divsRojos[div].style.background = "red";
  }
}

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);
