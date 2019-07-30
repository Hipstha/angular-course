'use strict'

var categoria = ['Acción', "Terror", "Comedia"];
var peliculas = ["La verdad duele", "la vida es bella", "Gran Torino"];

console.log(peliculas.sort());
console.log(peliculas.reverse());

var cine = [categoria, peliculas];
// console.log(cine);

// var elemento = "";
// do{
//   elemento = prompt("Introduce tu pelicula: ");
//   peliculas.push(elemento);
// }while(elemento!= "ACABAR");
//
// peliculas.pop();

// var indice = peliculas.indexOf('Gran Torino');
// console.log(indice);
//
// var pelicula_string = peliculas.join();
//
// var cadena = "Texto1, texto2, texto3";
// var cadena_array = cadena.split(", ");
//
//
// console.log(cadena_array);

// for(let pelicula in peliculas){
//   document.write("<li>"+peliculas[pelicula]+"</li>");
// }

// BUSQUEDAS

var precios = [10,20,50,80,12];

var busqueda = peliculas.findIndex(pelicula=>pelicula == "La verdad duele");
var busqueda = peliculas.findIndex(pelicula=>pelicula == "La verdad duele");

var busqueda = precios.some(precio=>precio>=80);

console.log(busqueda);
