'use strict'

//Plantillas de texto

var nombre = prompt("Mete un nombre");
var apellidos = prompt("Mete tus apellidos");

var texto = "Mi nombre es: " +nombre+"<br> Mis apellidos son: "+apellidos;

var texto = `
  <h1>Hola que tal</h1>
  <h3>Mi nombre es: ${nombre}</h3>
  <h3>Mi apellido es: ${apellidos}</h3>
`;

document.write(texto);
