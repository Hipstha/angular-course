'use strict'

var nombre = "Alejandro";
var nombres = ["Alejandro", "Daniel", "Pamela", "Lesly", 52, true];

var lenguajes = new Array("php", "js", "go", "java", "C#", "C", "PASCAL");

// console.log(nombres[2]);
// console.log(lenguajes[0]);
//
// console.log(nombres.length);
//
// var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
// if(elemento >= nombres.length){
//   alert("Introduce el numero correcto menor que: "+nombres.length);
// }else{
//   alert(nombres[elemento]);
// }

// document.write("<h1>Lenguajes de programación del 2018</h1>");
// document.write("<ul>");
// for(var i = 0; i < lenguajes.length; i++){
//   document.write("<li>"+lenguajes[i]+"</li>");
// }
// document.write("</ul>");

document.write("<ul>");
lenguajes.forEach((elemento)=>{
  document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");
