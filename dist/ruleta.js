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
class Ruleta extends apuestas_1.Apuestas {
    constructor(pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta); // se hace una llamada al constructor de la superclase apuesta, pero no se le incluye el tipo                                   
    }
    // se implementan los metodos de la interface jugar que ruleta esta obligada a utilizar o respetar por contrato 
    probabilidadDeGanar() {
        //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
        colors_1.default.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar :  ")); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO
        let probabilidad = Math.floor(Math.random() * 5) + 1;
        console.log(colors_1.default.red(`La probabilidad de sacar un ${nroApuesta} es de`), colors_1.default.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36) + 1} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
        return this.inicioJuego(); //ESTE METODO RETORNA AL METODO iniciojuego POR LO CUAL EL PROGRAMA CONTINUA CON EL
    }
    //  xxxx
    inicioJuego() {
        let numeroApuesta; //declare dos variables para guardar los datos que el usuario ingresa
        let color;
        numeroApuesta = readlineSync.questionInt(colors_1.default.red("Ingrese numero elegido:  ")); //inicializo cada variable//questionInt xq ingresa un numero
        color = readlineSync.question(colors_1.default.blue("Ingrese color de apuesta:  ")); //question porque ingresa string
        this.apostar(); //ejecuta el metodo apostar()
        console.log(colors_1.default.cyan(`
                                  | ------------------------|
                                  | Se cierran las apuestas |
                                  |-------------------------|`));
        let aux = Math.floor(Math.random() * 10); //cree una variable aux la que almacenara un numero aleatorio entre 1 y 10
        if (aux == numeroApuesta) {
            //si ese numero aleatorio es igual al de la apuesta gana y se multiplica su dinero de apuesta * 10
            console.log(colors_1.default.red(`|=====================================================================|
          Su apuesta es al  ${numeroApuesta},${color}
          con un valor de $ ${this.dineroApuesta}
        |=====================================================================|`), colors_1.default.blue(`******El número favorecido es ${aux} usted ha ganado $ ${this.dineroApuesta * 10} *******`), colors_1.default.yellow(`---------------------TOTAL DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 10}---------------------`));
            return true;
        }
        else { //si pierde descuenta del dinero disponible lo apostado
            console.log(colors_1.default.cyan(`
        |======================================================================|
              Su apuesta es al  ${numeroApuesta},${color} con un valor de $ ${this.dineroApuesta}.
        |======================================================================|.`), colors_1.default.bgMagenta(` *********** El número favorecido es ${aux}:`), colors_1.default.bgRed(` usted ha perdido.************`), colors_1.default.bgGreen(`------------------TOTAL DIPONIBLE $  ${this.dineroDisponible}------------------`));
            let seguirAbandonar; //le da al usuario la posibilidad de elegir si sigue o no apostando
            seguirAbandonar = readlineSync.question(colors_1.default.blue(` El juego excesivo es perjudicial para la salud
                                  ---------------------------
                                    DESEA SEGUIR APOSTANDO ?
                                        Responda S/N :  `));
            if (seguirAbandonar == "S") { //si elije que si vuelve al inicio del metodo inicioJuego()
                this.inicioJuego();
            }
            else if (seguirAbandonar === "N") {
                console.log(`Gracias por jugar con nosotros`);
            }
            return false;
        }
    }
    //  XXX
    /* public pagarPremio():void{//este metodo esta realacionado con el metodo inicioJuego
      if (this.inicioJuego() === true) {//si el resultado final de incioJuego es true
        console.log(colors.bold(`Total a cobrar ${this.dineroApuesta * 10}`));//el jugador cobra su ganancia
      }
      let seguirAbandonar: string;//luego le pregunta si quiere seguir apostando
      seguirAbandonar = readlineSync.question(colors.zalgo(
 ` El juego excesivo es perjudicial para la salud
        _________________________
        ¿ DESEA SEGUIR APOSTANDO ?
        ---------------------------
          Responda S/N :  `)
      );
      if (seguirAbandonar == "S") {//si elige si, lo retorna al inicio del juego
        this.inicioJuego()
      }else{
        this.elegirSala();//sino le da la opcion de elegir sala
          }
    }
*/
    //  XXXXX
    apostar() {
        let apuestaLocal; //variable que almacenara la apuesta ingresada por el usuario
        do { //hacer
            apuestaLocal = readlineSync.questionInt(colors_1.default.red("Ingrese su apuesta: ")); //questionInt para que reconozca tipo numero
            if (apuestaLocal > 0) {
                //condicion que evalua el monto ingresado sea mayor a 0
                this.dineroDisponible = this.dineroDisponible - apuestaLocal; //le resta a la variable dineroD lo que el usario ingreso
                this.dineroApuesta = apuestaLocal; //almacena en la variable dineroA, el resto
            }
            else {
                console.log(colors_1.default.yellow("No se puede apostar en negativo")); //si el usuario ingresa num negat
            }
            console.log(colors_1.default.cyan(`SE LE RESTAN ${this.dineroApuesta}`)); //muestra el monto de la apuesta
            console.log(colors_1.default.red(`DINERO DISPONIBLE : ${this.dineroDisponible}`)); //muestra por consola el dinero disponible
        } while (apuestaLocal <= 0); //mientras que
        return;
    }
}
exports.Ruleta = Ruleta;
