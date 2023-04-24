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
exports.Tragamonedas = void 0;
const apuestas_1 = require("./apuestas");
const readlineSync = __importStar(require("readline-sync"));
class Tragamonedas extends apuestas_1.Apuestas {
    constructor(psalaNro, pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta);
        this.salaNro = psalaNro;
    } //fin constructor
    setSalaNro(pSalaNro) {
        this.salaNro = pSalaNro;
    }
    getSalaNro() {
        return this.salaNro;
    }
    //este método da la opción de elgir el tema del tragamonedas
    //está prediseñado con la librería readline-sync
    elegirTema() {
        let temas = [" Tragamonedas Piedras Preciosas", " Tragamonedas Frutal"];
        let sala = readlineSync.keyInSelect(temas, "Elija un tema");
        console.log(`El juego elegido es ${temas[sala]}`);
    }
}
exports.Tragamonedas = Tragamonedas;
