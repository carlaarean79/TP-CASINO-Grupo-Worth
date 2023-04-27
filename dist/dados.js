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
    constructor(pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta);
        this.dados = 2;
    }
    setDados(dados) {
        this.dados = dados;
    }
    getDados() {
        return this.dados;
    }
    tirarDados() {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        return `El resultado es dado1 ${dado1}, dado 2 ${dado2}`;
    }
    //método que implementa la interfaz
    //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N cant de líneas
    probabilidadDeGanar() {
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(colors_1.default.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  "));
        let probabilidad = Math.floor(Math.random() * 6) + 1;
        console.log(colors_1.default.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`), colors_1.default.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36) + 5} *****`));
        this.inicioJuego();
    }
    //método que implementa la interfaz
    //la da comienzo a los distintos juego
    inicioJuego() {
        let nroApuesta;
        console.log(` Dinero disponible: ${this.dineroDisponible} $`);
        nroApuesta = readlineSync.questionInt(colors_1.default.rainbow("Sera su dia de suerte? Compruebelo!! Que numero elige?:  "));
        this.apostar();
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        if (dado1 == dado2 && nroApuesta) {
            console.log(colors_1.default.red(`********Usted eligio al  ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}**********`), colors_1.default.blue(` ---------EL PAR DE DADOS GANADOR ES:  ${dado1} y ${dado2}:`), colors_1.default.bgMagenta(`usted ha ganado!!--------`), colors_1.default.yellow(`$$$$$$ SALDO DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 5}--------------`));
        }
        else {
            console.log(colors_1.default.yellow(`*********Usted eligio  al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}*********`), colors_1.default.red(`--------EL PAR DE DADOS GANADOR ES: ${dado1} y ${dado2}:`), colors_1.default.bgRed(`usted ha perdido!!---------`), ` $$$$$ SALDO DISPONIBLE: ${this.dineroDisponible}$`);
            let seguirAbandonar;
            seguirAbandonar = readlineSync.question(colors_1.default.blue(`Recuerde que jugar en exceso es signo de posible adiccion
      _________________________
      ¿ DESEA SEGUIR APOSTANDO ?
           Responda S/N :  `));
            if (seguirAbandonar === "S") {
                this.inicioJuego();
            }
            else if (seguirAbandonar === "N") {
                console.log(`Gracias por jugar con nosotros`);
            }
        }
    }
    //  Método que implementa la intefaz 
    // con el ciclo do - while primero se evalúa la sentencia y luego la condición.
    //interactúa con la apuesta ingresada y el saldo disponible
    apostar() {
        let apuestaLocal;
        do { //hacer
            apuestaLocal = readlineSync.questionInt(colors_1.default.bgBlue("Ingrese su apuesta: "));
            if (apuestaLocal > 0) {
                this.dineroDisponible = this.dineroDisponible - apuestaLocal;
                this.dineroApuesta = apuestaLocal;
            }
            else if (apuestaLocal === 0) {
                console.log(colors_1.default.red("Saldo insuficiente. Por favor, ingrese un monto válido"));
            }
            console.log(colors_1.default.red(`SE LE RESTAN ${this.dineroApuesta}`));
            console.log(colors_1.default.green(`SALDO DISPONIBLE: ${this.dineroDisponible}`));
        } while (apuestaLocal < 0); //mientras que//si la apuesta ingresada en menor o igual a cero, el ciclo se vuelve a ejecutar
    }
}
exports.Dados = Dados;
