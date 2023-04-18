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
exports.Apuesta = void 0;
const readlineSync = __importStar(require("readline-sync"));
class Apuesta {
    constructor(pdineroDisponible, pdineroApuesta) {
        this.dineroDisponible = pdineroDisponible; // con this. se transformo las variabels en objetos 
        pdineroApuesta ? this.dineroApuesta = pdineroApuesta : this.dineroApuesta = 0; // el signo ? es un operador ternario (operador condicional ) y lo que hace es la sintaxis de la condicion IF -- ELSE.
        // si ingresa dineroApuesta me devuelve el valor que ingreso por parametro, y sino me devuelve 0. 
    } // Finaliza constructor.
    setDineroApuesta(pdineroApuesta) {
        this.dineroApuesta = pdineroApuesta; // El SET permite setear (ingresar o modificar datos ingresadso por el constructro ) los valores del parametro.
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
    elegirSala() {
        let juegos = [" Tragamonedas Diamantes", " Tragamonedas Frutal", " Ruleta", " Dados"]; //crea un arreglo con las opciones de juego
        let sala = readlineSync.keyInSelect(juegos, "Elija una opcion"); //keyInSelect es un metodo de la libreria readlinesync
        console.log(//deja que el usuario elija un elemento de la lista
        `El juego elegido es ${juegos[sala]}` //muestra el juego elegido
        );
    }
} // fin de la clase Apuesta
exports.Apuesta = Apuesta;
