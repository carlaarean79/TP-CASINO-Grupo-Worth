"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
//con esta clase, lo que se trata de implementar es la clase casino que simula ser el casino(edificio)
//el cual está compuesto por las diferentes salas de juegos, el nombre del casino y la cant de salas 
//que lo componen
class Casino {
    constructor(nombre, cantSalas, sala1, sala2, sala3) {
        this.nombre = nombre; //constructor me sirve para crear las instancias de los 
        this.cantSalas = cantSalas; //nuevos objetos
        this.sala1 = sala1; //inicializamos variables
        this.sala2 = sala2; //se le asigna el parámetro correspondiente
        this.sala3 = sala3;
    } //fin constructor
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setCantDeSalas(cantSalas) {
        this.cantSalas = cantSalas;
    }
    getCantDeSalas() {
        return this.cantSalas;
    }
    setSala1(sala1) {
        this.sala1 = sala1;
    }
    getSala1() {
        return this.sala1;
    }
    setSala2(sala2) {
        this.sala2 = sala2;
    }
    getSala2() {
        return this.sala2;
    }
    setSala3(sala3) {
        this.sala3 = sala3;
    }
    getSala3() {
        return this.sala3;
    }
} //final de la clase
exports.Casino = Casino;
