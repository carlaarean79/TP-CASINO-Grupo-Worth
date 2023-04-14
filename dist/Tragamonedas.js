"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const apuestas_1 = require("./apuestas");
class Tragamonedas extends apuestas_1.Apuesta {
    constructor(pTema1, pTema2, pPozoAcumulado, pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta); //se hace llamada al constructor de la super clase apuesta
        this.tema1 = pTema1; //se coloca parametros sin el tipo
        this.tema2 = pTema2;
        this.pozoAcumulado = pPozoAcumulado;
    } //fin constructor
    setTema1(pTema1) {
        this.tema1 = pTema1; //con el set se ingresan o modifican datos
    }
    getTema1() {
        return this.tema1;
    }
    setTema2(pTema2) {
        this.tema2 = pTema2;
    }
    getTema2() {
        return this.tema2;
    }
    setPozoAcumulado(pozoAcumulado) {
        this.pozoAcumulado = pozoAcumulado;
    }
    getPozoAcumulado() {
        return this.pozoAcumulado;
    }
    elegirTema() {
    }
}
exports.Tragamonedas = Tragamonedas;
