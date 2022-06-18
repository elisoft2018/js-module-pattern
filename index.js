// ./index.js

//IMPORTACIONES
//import calculadora from './lib/calculadora.js'
import { sumar } from "./lib/calculadora.js";
/*console.log(calculadora)
console.log(calculadora.sumar)
console.log(calculadora.multiplicar)*/
//VARIABLES

const result = document.querySelector("#result");
const getResult = document.querySelector("#getResult");
const form = document.querySelector("#form");
// EVENTOS
getResult.addEventListener("click", (event) => {
  //DETENER LA RECARGA DE LA PAGINA POR DEFECTO
  event.preventDefault();

  //ABSTRACCIÓN DE LOS DATOS DE LAS VARIABLES
  const quantityOne = form["quantity_one"].value;
  const quantityTwo = form["quantity_two"].value;
  const parsedQuantityOne = parseInt(quantityOne);
  const parsedQuantityTwo = parseInt(quantityTwo);

  const resultSum = sumar(parsedQuantityOne, parsedQuantityTwo);
  result.innerHTML = resultSum;
  return;
});

//const resultado = sumar(5,5)
//console.log(resultado)
