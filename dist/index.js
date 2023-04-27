"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const casino_1 = require("./casino"); //importo todas las clases que voy utilizar
const Tragamonedas_1 = require("./Tragamonedas");
const ruleta_1 = require("./ruleta");
const dados_1 = require("./dados");
const piedrasPreciosas_1 = require("./piedrasPreciosas");
const apuestas_1 = require("./apuestas");
const frutas_1 = require("./frutas");
let Tragamonedas01 = new Tragamonedas_1.Tragamonedas(2, 10000);
let tragamPiedras = new piedrasPreciosas_1.PiedrasPreciosas(1, 40000000, 5000);
let tragamFrutal = new frutas_1.Frutas(2, 1000000, 5000);
let Ruleta01 = new ruleta_1.Ruleta(5000);
let dados01 = new dados_1.Dados(10000);
let juegos = new apuestas_1.Apuestas(0);
let casino01 = new casino_1.Casino("Casino Royal", 3, juegos, Tragamonedas01, dados01, Ruleta01); //nueva instancia de casino//nuevo casino
casino01.getApuesta().elegirSala(),
    Tragamonedas01.elegirTema(),
    tragamPiedras.probabilidadDeGanar();
Tragamonedas01.elegirTema(),
    tragamFrutal.probabilidadDeGanar(),
    juegos.elegirSala(),
    Ruleta01.probabilidadDeGanar(),
    juegos.elegirSala(),
    dados01.probabilidadDeGanar();
