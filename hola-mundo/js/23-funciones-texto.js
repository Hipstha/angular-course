"use strict"

//Transformación de texto

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor robles";
var texto2 = "Es muy buen curso";

// var dato = numero.toString();
// console.log(typeof dato);
// dato = texto1.toUpperCase();
// console.log(dato);
// dato = texto1.toLowerCase();
// console.log(dato);
//
// //longitud
// var nombre = "alejandro";
// nombre = ["hoa", "hola"];
// console.log(nombre.length);
//
// // Concatenar
//
// var textoTotal = texto1+" "+texto2;
//
// console.log(textoTotal);
//
// var textoTotal = texto1.concat(" "+texto2);
// console.log(textoTotal);

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda = texto1.search("curso");
console.log(busqueda);

var busqueda = texto1.match("curso");
console.log(busqueda);

var busqueda = texto1.substr(14,5);
console.log(busqueda);

var busqueda = texto1.charAt(44);
console.log(busqueda);

var busqueda = texto1.includes("JavaScript");
console.log(busqueda);

var busqueda = texto1.replace("JavaScript", "JS");
console.log(busqueda);

var busqueda = texto1.slice(14, 22);
console.log(busqueda);

var busqueda = texto1.split(" ");
console.log(busqueda);

var busqueda = texto1.trim();
console.log(busqueda);
