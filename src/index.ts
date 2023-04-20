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
let tragamFrutal:Frutas=new Frutas("d","d",400,500)
let Ruleta01:Ruleta=new Ruleta(5000);
let dados01:Dados=new Dados(5000);
let casino01:Casino = new Casino("Casino Royal",3,Tragamonedas01,dados01,Ruleta01);//nueva instancia de casino//nuevo casino
let juegos: Apuestas[]=[tragamPiedras,Ruleta01,dados01]

console.log(Ruleta01.inicioJuego());


function elegirJuego(){
        let juegos: Apuestas[]=[tragamPiedras,tragamFrutal,Ruleta01,dados01];
        console.log(
        `----------------------
                  MENÚ 
         ----------------------
         [1]--> Tragamonedas Piedras Preciosas
         [2]--> Tragamonedas Frutal
         [3]--> Ruleta
         [4]--> Dados
         [0]--> Exit      `);
        
let opciones = readlineSync.questionInt("Cuál juego desea elegir?:  ")
for(let i = 0; juegos.length; i++){

    if (opciones == 1) {
        console.log(`El juego elegido es ${juegos[0]}`);
        return tragamPiedras.probabilidadDeGanar();
    } if (opciones == 2) {
        console.log(`El juego elegido es ${juegos[1]}`);
        return tragamFrutal.probabilidadDeGanar();
    } if (opciones == 3) {
        console.log(`El juego elegido es ${juegos[2]}`);
        return Ruleta01.probabilidadDeGanar();
    } if (opciones == 4) {
        console.log(`El juego elegido es ${juegos[3]}`);
        return dados01.probabilidadDeGanar();
    } if (opciones == 0) {
        return casino01;
    }
}
   
  }     
  console.log(elegirJuego());
   
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


