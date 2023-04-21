import { Casino } from './casino';//importo todas las clases que voy utilizar
import { Tragamonedas } from './Tragamonedas';
import { Ruleta } from './ruleta';
import { Dados } from './dados';
import { PiedrasPreciosas } from './piedrasPreciosas';
import { Apuestas } from './apuestas';
import * as readlineSync from 'readline-sync';
import { Frutas } from './frutas';

let Tragamonedas01:Tragamonedas= new Tragamonedas(1, 10000);
let tragamPiedras:PiedrasPreciosas=new PiedrasPreciosas(1,40000000,5000);
let tragamFrutal:Frutas=new Frutas(2,1000000,5000)
let Ruleta01:Ruleta=new Ruleta(5000);
let dados01:Dados=new Dados(10000);
let casino01:Casino = new Casino("Casino Royal",3,Tragamonedas01,dados01,Ruleta01);//nueva instancia de casino//nuevo casino
let juegos: Apuestas[]=[tragamPiedras,Ruleta01,dados01]

console.log(tragamFrutal.elegirSala());
console.log(tragamFrutal.probabilidadDeGanar());


//console.log (Ruleta01.elegirSala())
//console.log (Ruleta01.probabilidadDeGanar())
// console.log(dados01.elegirSala());          
// console.log(dados01.probabilidadDeGanar());

//function elegirJuego(){
//        let juegos: Apuestas[]=[tragamPiedras,tragamFrutal,Ruleta01,dados01];
 //       console.log(
    //
/* juegos[1]
console.log(tragamPiedras.elegirSala());
console.log(tragamPiedras);
console.log(tragamPiedras.probabilidadDeGanar());


 


function elegirSala() {
    throw new Error('Function not implemented.');
} */
/* casino01.setNombre("Casino Las Vegas");//settear el nombre y se lo vamos a cambiar por Casino las vegas
console.log(casino01.getNombre());//mostramos el procedimiento anterior

console.log(casino01);//volvemos a mostrar el objeto casino pero con los cambios realizados
 */


