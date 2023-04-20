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
exports.PiedrasPreciosas = void 0;
const Tragamonedas_1 = require("./Tragamonedas");
const colors_1 = __importDefault(require("colors"));
const readlineSync = __importStar(require("readline-sync"));
class PiedrasPreciosas extends Tragamonedas_1.Tragamonedas {
    constructor(/* linea1:number[],linea2:number[],linea3:number[], */ pozoAcumulado, pTema1, pTema2, pdineroDisponible, pdineroApuesta) {
        super(pTema1, pTema2, /* pPozoAcumulado */ pdineroDisponible, pdineroApuesta); //y del padre del padre, y en la super clase tambien
        /*  this.linea1 = [3];
         this.linea2 = [3];
         this.linea3 = [3]; */
        this.pozoAcumulado = pozoAcumulado;
    } // fin constructor  
    /* public setLinea1 (linea1:number[]):void {
        this.linea1 = linea1
    }
    
    public getLinea1 ():number[] {
        return this.linea1;
    }
    
    public setLinea2 (linea2:number[]):void {
        this.linea2 = linea2
    }
    
    public getLinea2 ():number[] {
        return this.linea2;
    }
    
    public setLinea3 (linea3:number[]):void {
        this.linea3 = linea3
    }
    
    public getLinea3 ():number[] {
        return this.linea3;
    } */
    setPozoAcumulado(pozoAcumulado) {
        this.pozoAcumulado = pozoAcumulado;
    }
    getPozoAcumulado() {
        return this.pozoAcumulado;
    }
    inicioJuego() {
        console.log(colors_1.default.bgGreen(`Pozo acumulado ${this.pozoAcumulado} $`));
        this.apostar();
        console.log(`***tulin tulin---pimpollo---tulin tulin---mi alma***`);
        let lineas1 = ["Diamante", "Gema", "Rubi", "Amatista"];
        let aleatorio = lineas1[Math.floor(Math.random() * lineas1.length)];
        let lineas2 = ["Diamante", "Gema", "Rubi", "Amatista"];
        let aleatorio2 = lineas2[Math.floor(Math.random() * lineas2.length)];
        let lineas3 = ["Diamante", "Gema", "Rubi", "Amatista"];
        let aleatorio3 = lineas3[Math.floor(Math.random() * lineas3.length)];
        let lineas4 = ["Diamante", "Gema", "Rubi", "Amatista"];
        let aleatorio4 = lineas3[Math.floor(Math.random() * lineas4.length)];
        console.log(colors_1.default.bgMagenta(`Su juego  Lineas -->  ${aleatorio} ----${aleatorio2} ----- ${aleatorio3}----${aleatorio4}`));
        if ((aleatorio === aleatorio3 && aleatorio !== aleatorio2 && aleatorio !== aleatorio4) ||
            (aleatorio === aleatorio4 && aleatorio !== aleatorio2 && aleatorio !== aleatorio3) ||
            (aleatorio2 === aleatorio3 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio4) ||
            (aleatorio2 === aleatorio4 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio3) ||
            (aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio && aleatorio3 !== aleatorio2)) {
            console.log(colors_1.default.yellow(` Acierto de 2 lineas. Usted gana $ ${this.dineroApuesta + 2000}`), colors_1.default.red(`TOTAL ACUMULADO ${this.dineroDisponible + this.dineroApuesta + 2000}`));
        }
        if ((aleatorio === aleatorio2) && (aleatorio2 === aleatorio3) && (aleatorio3 === aleatorio4)) {
            console.log(colors_1.default.bgBlue(`Acierto de 3 lineas. Usted gana $ ${this.dineroApuesta + 5000}`), colors_1.default.red(`TOTAL ACUMULADO ${this.dineroDisponible + this.dineroApuesta + 5000}`));
            console.log(`Dinero disponible ${this.dineroDisponible++}`);
        }
        if (aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio === aleatorio4) {
            console.log(colors_1.default.bgCyan(`HA ACERTADO LAS 4 LINEAS!!!!! USTED GANA ${this.pozoAcumulado + this.dineroApuesta} `));
            return true;
        }
        else {
            console.log(colors_1.default.bgRed(`Sin aciertos!! Usted pierde ${this.dineroApuesta--} Desea apostar nuavemente?`));
            return false;
        }
    }
    pagarPremio() {
        return "";
    }
    probabilidadDeGanar() {
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
        return;
    }
} // fin de la sub clase
exports.PiedrasPreciosas = PiedrasPreciosas;
