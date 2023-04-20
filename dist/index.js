"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const casino_1 = require("./casino"); //importo todas las clases que voy utilizar
const Tragamonedas_1 = require("./Tragamonedas");
const ruleta_1 = require("./ruleta");
const dados_1 = require("./dados");
const piedrasPreciosas_1 = require("./piedrasPreciosas");
const readlineSync = __importStar(require("readline-sync"));
const frutas_1 = require("./frutas");
let Tragamonedas01 = new Tragamonedas_1.Tragamonedas(1, 10000);
let tragamPiedras = new piedrasPreciosas_1.PiedrasPreciosas(1, 40000000, 5000);
let tragamFrutal = new frutas_1.Frutas("d", "d", 400, 500);
let Ruleta01 = new ruleta_1.Ruleta(5000);
let dados01 = new dados_1.Dados(5000);
let casino01 = new casino_1.Casino("Casino Royal", 3, Tragamonedas01, dados01, Ruleta01); //nueva instancia de casino//nuevo casino
let juegos = [tragamPiedras, Ruleta01, dados01];
console.log(Ruleta01.inicioJuego());
function elegirJuego() {
    let juegos = [tragamPiedras, tragamFrutal, Ruleta01, dados01];
    console.log(`----------------------
                  MENÚ 
         ----------------------
         [1]--> Tragamonedas Piedras Preciosas
         [2]--> Tragamonedas Frutal
         [3]--> Ruleta
         [4]--> Dados
         [0]--> Exit      `);
    let opciones = readlineSync.questionInt("Cuál juego desea elegir?:  ");
    for (let i = 0; juegos.length; i++) {
        if (opciones == 1) {
            console.log(`El juego elegido es ${juegos[0]}`);
            return tragamPiedras.probabilidadDeGanar();
        }
        if (opciones == 2) {
            console.log(`El juego elegido es ${juegos[1]}`);
            return tragamFrutal.probabilidadDeGanar();
        }
        if (opciones == 3) {
            console.log(`El juego elegido es ${juegos[2]}`);
            return Ruleta01.probabilidadDeGanar();
        }
        if (opciones == 4) {
            console.log(`El juego elegido es ${juegos[3]}`);
            return dados01.probabilidadDeGanar();
        }
        if (opciones == 0) {
            return casino01;
        }
    }
}
console.log(elegirJuego());
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
