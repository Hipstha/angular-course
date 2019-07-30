'use strict'

//Funciones

function porConsola(numero1, numero2){
  console.log("suma", numero1+numero2);
  console.log("resta", numero1-numero2);
  console.log("multiplicacion", numero1*numero2);
  console.log("division", numero1/numero2);
  console.log("**************************************************");
}

function porPantalla(numero1, numero2){
  document.write("suma", numero1+numero2+"<br>");
  document.write("resta", numero1-numero2+"<br>");
  document.write("multiplicacion", numero1*numero2+"<br>");
  document.write("division", numero1/numero2+"<br>");
  document.write("**************************************************");
}

function calculadora(numero1, numero2, mostrar=false){
  if(mostrar==false){
    porConsola(numero1, numero2)
  }else{
    porPantalla(numero1, numero2)
  }
}

//calculadora(5,6);

/*
for(var i=1; i<=10; i++){
  console.log(i);
  calculadora(i, 8)
}
*/

calculadora(1,4, true)
