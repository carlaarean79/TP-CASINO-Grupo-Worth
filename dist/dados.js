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
        super(pdineroDisponible, pdineroApuesta); //herencia de la class Apuesta.
        this.dados = 2;
    }
    setDados(dados) {
        this.dados = dados;
    }
    getDados() {
        return this.dados;
    }
    tirarDados() {
        let dado1 = Math.floor(Math.random() * 6) + 1; //math floor redondea el núm hacia abajo
        let dado2 = Math.floor(Math.random() * 6) + 1; //math floor redondea el núm hacia abajo
        return `El resultado es dado1 ${dado1}, dado 2 ${dado2}`;
    }
    probabilidadDeGanar() {
        //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
        colors_1.default.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  ")); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO
        let probabilidad = Math.floor(Math.random() * 6) + 1;
        console.log(colors_1.default.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`), colors_1.default.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36) + 1} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
        return this.inicioJuego(); //ESTE METODO RETORNA AL METODO iniciojuego POR LO CUAL EL PROGRAMA CONTINUA CON EL
    }
    inicioJuego() {
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(colors_1.default.rainbow("Sera su dia de suerte? Compruebelo!! Cual numero elige?:  "));
        this.apostar();
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        if (dado1 == dado2 && nroApuesta) {
            console.log(colors_1.default.red(`********Usted eligio al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}**********`), colors_1.default.blue(` ---------EL PAR DE DADOS GANADOR ES:  ${dado1} y ${dado2}:`), colors_1.default.bgMagenta(`usted ha ganado!!--------`), colors_1.default.yellow(`$$$$$$ SALDO DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 5}$${this.pagarPremio()}--------------`));
            return true;
        }
        else {
            console.log(colors_1.default.yellow(`*********Usted eligió  al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}*********`), colors_1.default.red(`--------EL PAR DE DADOS GANADOR ES: ${dado1} y ${dado2}:`), colors_1.default.bgRed(`usted ha perdido!!---------`), ` $$$$$ SALDO DISPONIBLE: ${this.dineroDisponible}$`);
            let seguirAbandonar; //le da al usuario la posibilidad de elegir si sigue o no apostando
            seguirAbandonar = readlineSync.question(colors_1.default.blue(`_________________________
      ¿ DESEA SEGUIR APOSTANDO ?
           Responda S/N :  `));
            if (seguirAbandonar == "S") { //si elije si,  vuelve al inicio del metodo inicioJuego()
                this.inicioJuego();
            }
            else {
                this.elegirSala(); //si elije que no ejecuta el metodo elegir sala
            }
            return false;
        }
    }
    pagarPremio() {
        if (this.inicioJuego() === true) { //si el resultado final de incioJuego es true
            console.log(colors_1.default.green(`Total a cobrar ${this.dineroApuesta * 10}`)); //el jugador cobra su ganancia
        }
        let seguirAbandonar; //luego le pregunta si quiere seguir apostando
        seguirAbandonar = readlineSync.question(colors_1.default.blue(`_________________________
     ¿ DESEA SEGUIR APOSTANDO ?
           Responda S/N :  `));
        if (seguirAbandonar == "S") { //si elige si, lo retorna al inicio del juego
            this.inicioJuego();
        }
        else {
            this.elegirSala(); //sino le da la opcion de elegir sala
        }
    }
    apostar() {
        let apuestaLocal; //variable que almacenara la apuesta ingresada por el usuario
        do { //hacer
            apuestaLocal = readlineSync.questionInt(colors_1.default.bgBlue("Ingrese su apuesta: ")); //questionInt para que reconozca tipo numero
            if (apuestaLocal > 0) { //condicion que evalua el monto ingresado sea mayor a 0
                this.dineroDisponible = this.dineroDisponible - apuestaLocal; //le resta a la variable dineroD lo que el usario ingreso
                this.dineroApuesta = apuestaLocal; //almacena en la variable dineroA, el resto y lo toma como nuevo valor
            }
            else {
                console.log(colors_1.default.red("No se puede apostar en negativo")); //si el usuario ingresa num negat
            }
            console.log(colors_1.default.red(`SE LE RESTAN ${this.dineroApuesta}`)); //muestra el monto de la apuesta
            console.log(colors_1.default.green(`SALDO DISPONIBLE: ${this.dineroDisponible}`)); //muestra por consola el dinero disponible
        } while (apuestaLocal <= 0); //mientras que
    }
}
exports.Dados = Dados;
