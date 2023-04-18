"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
const apuestas_1 = require("./apuestas");
class Ruleta extends apuestas_1.Apuesta {
    constructor($$Disponible, $$apuesta) {
        super($$Disponible, $$apuesta);
    }
    inicioJuego() {
        throw new Error("Method not implemented.");
    }
    pagarPremio() {
        throw new Error("Method not implemented.");
    }
    probabilidadDeGanar() {
        throw new Error("Method not implemented.");
    }
    apostar() {
        throw new Error("Method not implemented.");
    }
}
exports.Ruleta = Ruleta;
