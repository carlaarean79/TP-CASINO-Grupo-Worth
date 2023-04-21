"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const casino_1 = require("./casino"); //importo todas las clases que voy utilizar
const Tragamonedas_1 = require("./Tragamonedas");
const ruleta_1 = require("./ruleta");
const dados_1 = require("./dados");
const piedrasPreciosas_1 = require("./piedrasPreciosas");
const frutas_1 = require("./frutas");
let Tragamonedas01 = new Tragamonedas_1.Tragamonedas(1, 10000);
let tragamPiedras = new piedrasPreciosas_1.PiedrasPreciosas(1, 40000000, 5000);
let tragamFrutal = new frutas_1.Frutas(2, 1000000, 5000);
let Ruleta01 = new ruleta_1.Ruleta(5000);
let dados01 = new dados_1.Dados(10000);
let casino01 = new casino_1.Casino("Casino Royal", 3, Tragamonedas01, dados01, Ruleta01); //nueva instancia de casino//nuevo casino
let juegos = [tragamPiedras, Ruleta01, dados01];
console.log(tragamFrutal.elegirSala());
console.log(tragamFrutal.probabilidadDeGanar());
//console.log (Ruleta01.elegirSala())
//console.log (Ruleta01.probabilidadDeGanar())
// console.log(dados01.elegirSala());          
// console.log(dados01.probabilidadDeGanar());
//function elegirJuego(){
//        let juegos: Apuestas[]=[tragamPiedras,tragamFrutal,Ruleta01,dados01];
//       console.log(
//
/* juegos[1]
console.log(tragamPiedras.elegirSala());
console.log(tragamPiedras);
console.log(tragamPiedras.probabilidadDeGanar());


 


function elegirSala() {
    throw new Error('Function not implemented.');
} */
/* casino01.setNombre("Casino Las Vegas");//settear el nombre y se lo vamos a cambiar por Casino las vegas
console.log(casino01.getNombre());//mostramos el procedimiento anterior

console.log(casino01);//volvemos a mostrar el objeto casino pero con los cambios realizados
 */
