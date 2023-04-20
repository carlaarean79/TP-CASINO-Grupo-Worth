"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const casino_1 = require("./casino"); //importo todas las clases que voy utilizar
const Tragamonedas_1 = require("./Tragamonedas");
const ruleta_1 = require("./ruleta");
const dados_1 = require("./dados");
const piedrasPreciosas_1 = require("./piedrasPreciosas");
let Tragamonedas01 = new Tragamonedas_1.Tragamonedas("piedras preciosas", "manzana", 10, 100);
let Ruleta01 = new ruleta_1.Ruleta(5000);
let dados01 = new dados_1.Dados(5000);
let tragamPiedras = new piedrasPreciosas_1.PiedrasPreciosas(4000000, "Piedras Preciosas", "Frutal", 5000);
let casino01 = new casino_1.Casino("Casino Royal", 3, Tragamonedas01, dados01, Ruleta01); //nueva instancia de casino//nuevo casino
let Tragamonedas02 = new Tragamonedas_1.Tragamonedas("piedras preciosas", "manzana", 10, 100);
let Ruleta02 = new ruleta_1.Ruleta(6000);
let dados02 = new dados_1.Dados(5000);
let casino02 = new casino_1.Casino("Casino Miami", 3, Tragamonedas02, dados02, Ruleta02);
console.log(tragamPiedras.inicioJuego()); //muestro como quedó contruido mi nuevo 
/* casino01.setNombre("Casino Las Vegas");//settear el nombre y se lo vamos a cambiar por Casino las vegas
console.log(casino01.getNombre());//mostramos el procedimiento anterior

console.log(casino01);//volvemos a mostrar el objeto casino pero con los cambios realizados
 */
