import { Casino } from './casino';//importo todas las clases que voy utilizar
import { Tragamonedas } from './Tragamonedas';
import { Ruleta } from './ruleta';
import { Dados } from './dados';
import { PiedrasPreciosas } from './piedrasPreciosas';
import { Apuestas } from './apuestas';
import { Frutas } from './frutas';


let Tragamonedas01:Tragamonedas= new Tragamonedas(2, 10000);
let tragamPiedras:PiedrasPreciosas=new PiedrasPreciosas(1,40000000,5000);
let tragamFrutal:Frutas=new Frutas(2,1000000,5000)
let Ruleta01:Ruleta=new Ruleta(5000);
let dados01:Dados=new Dados(10000);
let juegos: Apuestas= new Apuestas(0);
let casino01:Casino = new Casino("Casino Royal",3,juegos,Tragamonedas01,dados01,Ruleta01);//nueva instancia de casino//nuevo casino

console.log(casino01.getApuesta().elegirSala(),
Tragamonedas01.elegirTema(),
tragamFrutal,
tragamFrutal.probabilidadDeGanar(),
Tragamonedas01.elegirTema(),
tragamPiedras,
tragamPiedras.probabilidadDeGanar(),
juegos.elegirSala(),
Ruleta01.probabilidadDeGanar(),
juegos.elegirSala(),
dados01.probabilidadDeGanar());


    