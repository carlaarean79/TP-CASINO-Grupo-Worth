"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apuesta = void 0;
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
} // fin de la clase Apuesta
exports.Apuesta = Apuesta;
