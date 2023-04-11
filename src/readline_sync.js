"use strict";
let saludar = "hola mundo";
let mensaje = saludar;
console.log(mensaje);
let readlineSync = require('readline-sync'); //npm i --save-dev @types/node//instalar para que require no de error
let alturaPersona = readlineSync.question("indique la altura de la persona: ");
console.log(alturaPersona);
const base = readlineSync.question("indique la base: ");
const altura = readlineSync.question("indique la altura: ");
const resultado = base * altura;
console.log(resultado);
