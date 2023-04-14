"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiedrasPreciosas = void 0;
const Tragamonedas_1 = require("./Tragamonedas");
class PiedrasPreciosas extends Tragamonedas_1.Tragamonedas {
    constructor(linea1, linea2, linea3, pTema1, pTema2, pPozoAcumulado, pdineroDisponible, pdineroApuesta) {
        super(pTema1, pTema2, pPozoAcumulado, pdineroDisponible, pdineroApuesta); //y del padre del padre, y en la super clase tambien
        this.linea1 = [3];
        this.linea2 = [3];
        this.linea3 = [3];
    } // fin constructor  
    setLinea1(linea1) {
        this.linea1 = linea1;
    }
    getLinea1() {
        return this.linea1;
    }
    setLinea2(linea2) {
        this.linea2 = linea2;
    }
    getLinea2() {
        return this.linea2;
    }
    setLinea3(linea3) {
        this.linea3 = linea3;
    }
    getLinea3() {
        return this.linea3;
    }
    realizarApuesta() {
        return true;
    }
    pagarPremio() {
        return "";
    }
    probabilidadDeGanar() {
    }
} // fin de la sub clase
exports.PiedrasPreciosas = PiedrasPreciosas;
