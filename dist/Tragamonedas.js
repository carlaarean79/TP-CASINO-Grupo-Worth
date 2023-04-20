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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const apuestas_1 = require("./apuestas");
const readlineSync = __importStar(require("readline-sync"));
class Tragamonedas extends apuestas_1.Apuestas {
    /*    protected pozoAcumulado:number; */
    constructor(psalaNro, /* pPozoAcumulado:number, */ pdineroDisponible, pdineroApuesta) {
        super(pdineroDisponible, pdineroApuesta); //se hace llamada al constructor de la super clase apuesta
        this.salaNro = psalaNro; //se coloca parametros sin el tipo
        /* this.pozoAcumulado = pPozoAcumulado; */
    } //fin constructor
    setSalaNro(pSalaNro) {
        this.salaNro = pSalaNro;
    }
    getSalaNro() {
        return this.salaNro;
    }
    /* public setPozoAcumulado (pozoAcumulado:number):void {
        this.pozoAcumulado = pozoAcumulado;
    }
    
    public getPozoAcumulado ():number {
        return this.pozoAcumulado;
    }
     */
    elegirTema() {
        let temas = [" Tragamonedas Piedras Preciosas", " Tragamonedas Frutal"]; //crea un arreglo con las opciones de juego
        let sala = readlineSync.keyInSelect(temas, "Elija un tema"); //keyInSelect es un metodo de la libreria readlinesync
        console.log(//deja que el usuario elija un elemento de la lista
        `El juego elegido es ${temas[sala]}` //muestra el tema elegido
        );
    }
}
exports.Tragamonedas = Tragamonedas;
