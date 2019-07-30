'use strict';

//Condicionales

//IF, si A es igual a B entonces haz algo

var edad1 = 10;
var edad2 = 12;

if(edad1 > edad2){
  console.log("Edad1 es mayor que edad2");
}else{
  console.log("La edad1 es inferior");
}

var edad = 75;
var nombre = "David Suarez";

if(edad >= 18){
  console.log(nombre+" tiene "+edad+" años, es mayor de edad");
  if(edad <=33){
    console.log("Todavia eres millenial");
  }else if(edad>=70){
    console.log("Eres anciano");
  }else{
    console.log("Ya no eres millenial");
  }
}else{
  console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

/*
OP Lógicos
and &&
or ||
negación: !
*/

//Negación
var year = 2018
if(year != 2016){
  console.log("No es 2016");
}

// AND
if(year >= 2000 && year <=2020 && year != 2018){
  console.log("Estamos en la era actual");
}else{
  console.log('Era postmoderna');
}

//Or
if(year==2008 || year==2018){
  console.log("El año acaba en 8");
}

//switch
