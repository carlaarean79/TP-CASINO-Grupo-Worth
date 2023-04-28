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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const casino_1 = require("./casino"); //importo todas las clases que voy utilizar
const ruleta_1 = require("./ruleta");
const dados_1 = require("./dados");
const piedrasPreciosas_1 = require("./piedrasPreciosas");
const apuestas_1 = require("./apuestas");
const frutas_1 = require("./frutas");
const readlineSync = __importStar(require("readline-sync"));
const colors_1 = __importDefault(require("colors"));
let RuletaLoca = new ruleta_1.Ruleta(5000);
let Dados02 = new dados_1.Dados(10000);
let TragamonedasPiedrasPreciosas = new piedrasPreciosas_1.PiedrasPreciosas(1, 40000000, 5000);
let TragamonedasFrutal = new frutas_1.Frutas(2, 1000000, 5000);
let juegos = new apuestas_1.Apuestas(0);
let casinoRoyal = new casino_1.Casino("Royal", 4, TragamonedasPiedrasPreciosas, TragamonedasFrutal, Dados02, RuletaLoca);
class Menu {
    constructor() {
    }
    getElegirJuego() {
        return this.elegirJuego();
    }
    elegirJuego() {
        console.log(colors_1.default.yellow(`
        BIEVENIDOS A CASINO ROYAL
        ------------------------
                 MENU
        ------------------------
        Por favor elija una opcion`));
        let opciones = [`Salir`, `Tragamonedas Piedras Preciosas`, `Tragamonedas Frutal`, `Dados02`, `RuletaLoca`];
        for (let i = 0; i < opciones.length; i++) {
            console.log(`
      [${i}]----> ${opciones[i]} `);
        }
        const opcion = readlineSync.questionInt(colors_1.default.red(`Ingrese una opcion:   `));
        switch (opcion) {
            case 1:
                console.log("ha elegido la opcion de Tragamonedas Piedras Preciosas");
                TragamonedasPiedrasPreciosas.probabilidadDeGanar();
                break;
            case 2:
                console.log("ha elegido la opcion de Tragamonedas Frutal");
                TragamonedasFrutal.probabilidadDeGanar();
                break;
            case 3:
                console.log("ha elegido la opcion de Dados");
                Dados02.getProbabilidadDeGanar();
                break;
            case 4:
                console.log("ha elegido la opcion de Ruleta");
                RuletaLoca.probabilidadDeGanar();
            default:
                return;
        }
    }
}
exports.Menu = Menu;
let menu = new Menu();
menu.getElegirJuego();
/* let Tragamonedas01:Tragamonedas= new Tragamonedas(2, 10000);
let casino01:Casino = new Casino("Casino Royal",3,juegos,Tragamonedas01,dados01,Ruleta01);//nueva instancia de casino//nuevo casino

casino01.getApuesta().elegirSala(),
Tragamonedas01.elegirTema(),
tragamPiedras.probabilidadDeGanar();
Tragamonedas01.elegirTema(),
tragamFrutal.probabilidadDeGanar(),
juegos.elegirSala(),
Ruleta01.probabilidadDeGanar(),
juegos.elegirSala(),
dados01.probabilidadDeGanar();  */
