'use strict'
/*
Programa que pida dos numeros y que nos diga cual es mayor, cual menor y si son iguales.
PLUS: Si no son un número o son menores o iguales a 0, vuelva a pedir los datos
*/

var numero1 = parseInt(prompt('Introduce el primer numero: ', 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt('Introduce el primer numero: ', 0));
  numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

console.log(numero1, numero2);

if(numero1==numero2){
  alert("Numeros iguales");
}else if(numero1>numero2){
  alert("Numero 1 es mayor que el numero 2");
}else if(numero1<numero2){
  alert("El numero 2 es mayor que el 1");
}
