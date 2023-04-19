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
exports.Dados = void 0;
const readlineSync = __importStar(require("readline-sync"));
const colors_1 = __importDefault(require("colors"));
const apuestas_1 = require("./apuestas");
class Dados extends apuestas_1.Apuestas {
    constructor(dados, pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta); //herencia de la class Apuesta.
        this.dados = dados;
    }
    inicioJuego() {
        return true;
    }
    pagarPremio() {
    }
    apostar() {
    }
    setDados(dados) {
        this.dados = dados;
    }
    getDados() {
        return this.dados;
    }
    tirarDados() {
        return Math.floor(Math.random() * 6); //math floor redondea el núm hacia abajo.
    }
    probabilidadDeGanar() {
        //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
        colors_1.default.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  ")); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO
        let probabilidad = Math.floor(Math.random() * 6);
        console.log(colors_1.default.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`), colors_1.default.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
        return this.inicioJuego(); //ESTE METODO RETORNA AL METODO iniciojuego POR LO CUAL EL PROGRAMA CONTINUA CON EL
    }
}
exports.Dados = Dados;
