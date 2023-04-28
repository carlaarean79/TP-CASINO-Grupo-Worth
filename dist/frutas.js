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
exports.Frutas = void 0;
const _1 = require(".");
const Tragamonedas_1 = require("./Tragamonedas");
const colors_1 = __importDefault(require("colors"));
const readlineSync = __importStar(require("readline-sync"));
class Frutas extends Tragamonedas_1.Tragamonedas {
    constructor(psalaNro, pozoAcumulado, pdineroDisponible, pdineroApuesta) {
        super(psalaNro, pdineroDisponible, pdineroApuesta); //y del padre del padre, y en la super clase tambien
        this.pozoAcumulado = pozoAcumulado;
    } // fin constructor  
    setPozoAcumulado(pozoAcumulado) {
        this.pozoAcumulado = pozoAcumulado;
    }
    getPozoAcumulado() {
        return this.pozoAcumulado;
    }
    //método que implementa la interfaz
    //le da comienzo a los distintos juegos
    inicioJuego() {
        console.log(colors_1.default.bgGreen(`Pozo acumulado ${this.pozoAcumulado} $`));
        console.log(` Dinero disponible: ${this.dineroDisponible}$`);
        console.log(colors_1.default.bgMagenta(`Inicia el juego. Mucha suerte!`));
        this.apostar();
        console.log(`Procesando...***tulin tulin---tulin tulin---***`);
        let lineas1 = ["manzana", "banana", "naranja", "pera"];
        let aleatorio = lineas1[Math.floor(Math.random() * lineas1.length)];
        let lineas2 = ["manzana", "banana", "naranja", "pera"];
        let aleatorio2 = lineas2[Math.floor(Math.random() * lineas2.length)];
        let lineas3 = ["manzana", "banana", "naranja", "pera"];
        let aleatorio3 = lineas3[Math.floor(Math.random() * lineas3.length)];
        let lineas4 = ["manzana", "banana", "naranja", "pera"];
        let aleatorio4 = lineas4[Math.floor(Math.random() * lineas4.length)];
        console.log(colors_1.default.bgMagenta(`Su juego  Lineas -->  ${aleatorio} ----${aleatorio2} ----- ${aleatorio3}----${aleatorio4}`));
        if ((aleatorio === aleatorio3 && aleatorio !== aleatorio2 && aleatorio !== aleatorio4) ||
            (aleatorio === aleatorio4 && aleatorio !== aleatorio2 && aleatorio !== aleatorio3) ||
            (aleatorio2 === aleatorio3 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio4) ||
            (aleatorio2 === aleatorio4 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio3) ||
            (aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio && aleatorio3 !== aleatorio2) ||
            (aleatorio === aleatorio2 && aleatorio !== aleatorio3 && aleatorio !== aleatorio4)) {
            console.log(colors_1.default.yellow(` Acierto de 2 lineas. Usted gana $ ${this.dineroApuesta + 2000}`), colors_1.default.red(`TOTAL ACUMULADO ${this.dineroDisponible = this.dineroDisponible + this.dineroApuesta + 2000}`));
        }
        else if ((aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio !== aleatorio4) ||
            (aleatorio === aleatorio4 && aleatorio === aleatorio2 && aleatorio !== aleatorio3) ||
            (aleatorio === aleatorio3 && aleatorio === aleatorio4 && aleatorio !== aleatorio2) ||
            (aleatorio3 === aleatorio && aleatorio3 === aleatorio2 && aleatorio3 !== aleatorio4) ||
            (aleatorio3 === aleatorio2 && aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio)) {
            console.log(colors_1.default.bgBlue(`Acierto de 3 lineas. Usted gana $ ${this.dineroApuesta + 5000}`), colors_1.default.red(`TOTAL ACUMULADO ${this.dineroDisponible = this.dineroDisponible + this.dineroApuesta + 5000}`));
            console.log(`Dinero disponible ${this.dineroDisponible}`);
        }
        else if (aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio === aleatorio4) {
            console.log(colors_1.default.bgCyan(`HA ACERTADO LAS 4 LINEAS!!!!! USTED GANA ${this.dineroDisponible = this.pozoAcumulado + this.dineroApuesta} `));
        }
        else {
            console.log(colors_1.default.bgRed(`Sin aciertos!! Usted pierde ${this.dineroApuesta} Desea apostar nuavemente?`));
        }
        let seguirAbandonar;
        seguirAbandonar = readlineSync.question(colors_1.default.blue(`Recuerde que jugar en exceso es signo de posible adiccion
          _________________________
          ¿ DESEA SEGUIR APOSTANDO ?
               Responda S/N :  `));
        if (seguirAbandonar == "S") {
            this.dineroDisponible = this.dineroDisponible;
            this.inicioJuego();
        }
        else if (seguirAbandonar === "N") {
            let menu = new _1.Menu();
            menu.getElegirJuego();
            console.log(`Gracias por jugar con nosotros`);
        }
    }
    //método que implementa la interfaz
    //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N cant de líneas.
    probabilidadDeGanar() {
        let cantLineas;
        cantLineas = readlineSync.questionInt(colors_1.default.bgGreen("Antes de empezar el juego, vea cuales son sus probabilidades de acertar 2,3 o 4 lineas. Ingrese una opción: "));
        let probabilidad = Math.floor(Math.random() * 4) + 1;
        console.log(colors_1.default.red(`La probabilidad de acertar ${cantLineas} lineas es de`), colors_1.default.red(`*****${probabilidad} en ${Math.floor(Math.random() * 16) + 1} *****`));
        this.inicioJuego();
    }
    //método que implementa la interfaz
    //interactúa con la apuesta ingresada y el saldo disponible
    // con el ciclo do - while primero se evalúa la sentencia y luego la condición.
    apostar() {
        let apuestaLocal;
        do { //hacer
            apuestaLocal = readlineSync.questionInt(colors_1.default.bgBlue("Ingrese su apuesta: "));
            if (apuestaLocal > 0) { //condicion que evalua el monto ingresado sea mayor a 0
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
} // fin de la sub clase
exports.Frutas = Frutas;
