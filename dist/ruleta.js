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
exports.Ruleta = void 0;
const apuestas_1 = require("./apuestas");
const readlineSync = __importStar(require("readline-sync"));
const colors_1 = __importDefault(require("colors"));
const _1 = require(".");
//SE CREO LA CLASE RULETA QUE EXTIENDE DE LA SUPERCLASE APUESTAS E IMPLENTA LA INTERFAZ JUGAR
class Ruleta extends apuestas_1.Apuestas {
    constructor(pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta);
    }
    girarLaRuleta() {
        return Math.floor(Math.random() * 36);
    }
    // se implementan los metodos de la interface jugar que ruleta esta obligada a utilizar o respetar por contrato 
    probabilidadDeGanar() {
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(colors_1.default.bgGreen("Antes de comenzar el juego, ingrese un numero y vea cuales son sus probabilidades de ganar :  "));
        let probabilidad = Math.floor(Math.random() * 5) + 1;
        console.log(colors_1.default.red(`La probabilidad de sacar un ${nroApuesta} es de`), colors_1.default.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36) + 1} *****`));
        this.inicioJuego();
    }
    //  MÉTODO QUE IMPLEMENTA LA INTERFAZ
    //le da comienzo a los distintos juegos
    inicioJuego() {
        console.log(` Dinero disponible: ${this.dineroDisponible}$`);
        console.log(colors_1.default.bgMagenta(`Inicia el juego. Mucha suerte!`));
        this.apostar();
        let numeroApuesta;
        let color;
        numeroApuesta = readlineSync.questionInt(colors_1.default.red("Ingrese numero elegido:  "));
        color = readlineSync.question(colors_1.default.blue("Ingrese color de apuesta:  "));
        console.log(colors_1.default.cyan(`
                                  | ------------------------|
                                  | Se cierran las apuestas |
                                  |-------------------------|`));
        let aux = Math.floor(Math.random() * 10);
        if (aux == numeroApuesta) {
            console.log(colors_1.default.red(`|=====================================================================|
          Su apuesta es al  ${numeroApuesta},${color}
          con un valor de $ ${this.dineroApuesta}
        |=====================================================================|`), colors_1.default.blue(`******El número favorecido es ${aux} usted ha ganado $ ${this.dineroApuesta * 10} *******`), colors_1.default.yellow(`---------------------TOTAL DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 10}---------------------`));
        }
        else {
            console.log(colors_1.default.cyan(`
        |======================================================================|
              Su apuesta es al  ${numeroApuesta},${color} con un valor de $ ${this.dineroApuesta}.
        |======================================================================|.`), colors_1.default.bgMagenta(` *********** El número favorecido es ${aux}:`), colors_1.default.bgRed(` usted ha perdido.************`), colors_1.default.bgGreen(`------------------TOTAL DIPONIBLE $  ${this.dineroDisponible}------------------`));
        }
        let seguirAbandonar;
        seguirAbandonar = readlineSync.question(colors_1.default.blue(` Recuerde que jugar en exceso es signo de posible adiccion
                   ---------------------------
                     DESEA SEGUIR APOSTANDO ?
                         Responda S/N :  `));
        if (seguirAbandonar == "S") {
            this.inicioJuego();
        }
        else if (seguirAbandonar === "N") {
            let menu = new _1.Menu();
            menu.getElegirJuego();
            console.log(`Gracias por jugar con nosotros`);
        }
    }
    //  Método que implementa la intefaz 
    // con el ciclo do - while primero se evalúa la sentencia y luego la condición.
    apostar() {
        let apuestaLocal;
        do { //hacer
            apuestaLocal = readlineSync.questionInt(colors_1.default.red("Ingrese su apuesta: "));
            if (apuestaLocal > 0) {
                this.dineroDisponible = this.dineroDisponible - apuestaLocal;
                this.dineroApuesta = apuestaLocal;
            }
            else if (apuestaLocal === 0) {
                console.log(colors_1.default.yellow("Saldo insuficiente. Por favor, Ingrese un monto válido"));
            }
            console.log(colors_1.default.cyan(`SE LE RESTAN ${this.dineroApuesta}`));
            console.log(colors_1.default.red(`DINERO DISPONIBLE : ${this.dineroDisponible}`));
        } while (apuestaLocal < 0); //mientras que// si la apuesta ingresada en menor o igual a cero, el ciclo se vuelve a ejecutar
    }
}
exports.Ruleta = Ruleta;
