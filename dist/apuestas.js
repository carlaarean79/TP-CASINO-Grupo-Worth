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
exports.Apuestas = void 0;
const readlineSync = __importStar(require("readline-sync"));
class Apuestas {
    constructor(pdineroDisponible, pdineroApuesta) {
        this.dineroDisponible = pdineroDisponible;
        pdineroApuesta ? this.dineroApuesta = pdineroApuesta : this.dineroApuesta = 0;
        // si ingresa dineroApuesta me devuelve el valor que ingreso por parametro, y sino me devuelve 0. 
    } // Finaliza constructor.
    setDineroApuesta(pdineroApuesta) {
        this.dineroApuesta = pdineroApuesta;
    }
    getDienroApuesta() {
        return this.dineroApuesta;
    }
    setDineroDisponible(pdineroDisponible) {
        this.dineroDisponible = pdineroDisponible;
    }
    getDineroDisponible() {
        return this.dineroDisponible;
    }
    //keyInSelect es un metodo de la libreria readlinesync//deja que el usuario elija un elemento de la lista
    elegirSala() {
        let juegos = [" Tragamonedas ", " Ruleta", " Dados"];
        let sala = readlineSync.keyInSelect(juegos, "Elija una opcion");
        console.log(`El juego elegido es ${juegos[sala]}`);
    } // este metodo si bien simula ser un menú de opciones, no se pudo modificar para que al elegir
    //una opción redireccione al juego seleccionado. Por lo tanto la elección es forzada e irá en 
    //orden cde como se llamaron a los distintos nuevos objetos
    probabilidadDeGanar() {
    }
} // fin de la clase Apuesta
exports.Apuestas = Apuestas;
