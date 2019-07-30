'use strict'

//JavaScript Object Notation

window.addEventListener("load", function(){
  var pelicula = {
    titulo: "Batman vs Superman",
    year: "2017",
    pais: "Estados Unidos"
  }

  pelicula.titulo = "Superman Begins";

  var peliculas = [
    {
      titulo: "La verdad duele",
      year: 2016,
      pais: "Francia"
    },
    {
      titulo: "Batman vs Superman",
      year: 2017,
      pais: "Estados Unidos"
    }
  ];

  console.log(peliculas);

  var caja_peliculas = document.querySelector("#peliculas");

  for(let index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
  }
});
