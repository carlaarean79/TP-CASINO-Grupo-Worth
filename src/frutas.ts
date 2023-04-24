import { Tragamonedas } from "./Tragamonedas";
import { Jugar } from "./interface";
import colors from "colors"
import * as readlineSync from 'readline-sync'

export class Frutas extends Tragamonedas implements Jugar { //inicio de la sub clase frutas
    private pozoAcumulado:number;
    public constructor (psalaNro:number,pozoAcumulado:number,pdineroDisponible:number, pdineroApuesta?:number) { //se agrega parametros del padre
        super (psalaNro,pdineroDisponible, pdineroApuesta)//y del padre del padre, y en la super clase tambien
            this.pozoAcumulado=pozoAcumulado;
    } // fin constructor  
   
public setPozoAcumulado (pozoAcumulado:number):void {
    this.pozoAcumulado = pozoAcumulado;
}

public getPozoAcumulado ():number {
    return this.pozoAcumulado;
}
//método que implementa la interfaz
//le da comienzo a los distintos juegos
public inicioJuego():void {
    console.log(colors.bgGreen(`Pozo acumulado ${this.pozoAcumulado} $`));
    console.log(` Dinero disponible: ${this.dineroDisponible}$`  );
    this.apostar();
    console.log(`Procesando...***tulin tulin---tulin tulin---***`);
        let lineas1 = ["manzana","banana","naranja","pera"]
        let aleatorio = lineas1[Math.floor(Math.random()*lineas1.length)]
        let lineas2 = ["manzana","banana","naranja","pera"]
        let aleatorio2 = lineas2[Math.floor(Math.random()*lineas2.length)]
        let lineas3 = ["manzana","banana","naranja","pera"]
        let aleatorio3 = lineas3[Math.floor(Math.random()*lineas3.length)]
        let lineas4 = ["manzana","banana","naranja","pera"]
        let aleatorio4 = lineas4[Math.floor(Math.random()*lineas4.length)]
        console.log(colors.bgMagenta(`Su juego  Lineas -->  ${aleatorio} ----${aleatorio2} ----- ${aleatorio3}----${aleatorio4}`));
        if((aleatorio === aleatorio3 && aleatorio !== aleatorio2 && aleatorio !== aleatorio4) ||
         (aleatorio === aleatorio4 && aleatorio !== aleatorio2 && aleatorio !== aleatorio3) ||
         (aleatorio2 === aleatorio3 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio4) ||
         (aleatorio2 === aleatorio4 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio3) ||
         (aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio && aleatorio3 !== aleatorio2)||
         (aleatorio === aleatorio2 && aleatorio !== aleatorio3 && aleatorio !== aleatorio4 )){
          console.log(colors.yellow(
           ` Acierto de 2 lineas. Usted gana $ ${this.dineroApuesta + 2000}`),
           colors.red(`TOTAL ACUMULADO ${this.dineroDisponible = this.dineroDisponible + this.dineroApuesta + 2000}`));
          } else if((aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio !== aleatorio4) || 
          (aleatorio === aleatorio4 && aleatorio===aleatorio2 && aleatorio !== aleatorio3)||
          (aleatorio === aleatorio3 && aleatorio === aleatorio4 && aleatorio !== aleatorio2)||
          (aleatorio3 === aleatorio && aleatorio3 === aleatorio2 && aleatorio3 !== aleatorio4)||
          (aleatorio3 === aleatorio2 && aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio)){
            console.log(colors.bgBlue(
                `Acierto de 3 lineas. Usted gana $ ${this.dineroApuesta + 5000}`),
                colors.red(`TOTAL ACUMULADO ${this.dineroDisponible = this.dineroDisponible + this.dineroApuesta + 5000}`));
            console.log(`Dinero disponible ${this.dineroDisponible}`);
            }   else if(aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio === aleatorio4){
                    console.log(colors.bgCyan(
                        `HA ACERTADO LAS 4 LINEAS!!!!! USTED GANA ${this.dineroDisponible = this.pozoAcumulado + this.dineroApuesta} `));
                    
                    } else{
                             
          console.log(colors.bgRed(
            `Sin aciertos!! Usted pierde ${this.dineroApuesta} Desea apostar nuavemente?`));
          }
          let seguirAbandonar: string; 
          seguirAbandonar = readlineSync.question(colors.blue(
          `Recuerde que jugar en exceso es signo de posible adiccion
          _________________________
          ¿ DESEA SEGUIR APOSTANDO ?
               Responda S/N :  ` ));
          if (seguirAbandonar == "S") {
            this.dineroDisponible = this.dineroDisponible;
            this.inicioJuego();
          } else if (seguirAbandonar === "N") {
            console.log(`Gracias por jugar con nosotros`);
          }
         
        }

      //método que implementa la interfaz
      //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N cant de líneas.

    public probabilidadDeGanar():void{
    let cantLineas;
    cantLineas = readlineSync.questionInt(
     colors.bgGreen("Ingrese que cantidad de lineas quiere apostar entre 2 y 4 y vea cuales son sus probabilidades de acertar:  "
    ));
      let probabilidad: number = Math.floor(Math.random() * 4)+1; 
console.log(colors.red(`La probabilidad de acertar ${cantLineas} lineas es de`),
      colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 16)+1} *****`)); 
    this.inicioJuego(); 
   
    }
    //método que implementa la interfaz
    //interactúa con la apuesta ingresada y el saldo disponible
     // con el ciclo do - while primero se evalúa la sentencia y luego la condición.
    public apostar(): void {
        let apuestaLocal: number; 
        do { //hacer
          apuestaLocal = readlineSync.questionInt(colors.bgBlue("Ingrese su apuesta: "));         if (apuestaLocal > 0) {//condicion que evalua el monto ingresado sea mayor a 0
            this.dineroDisponible = this.dineroDisponible - apuestaLocal; 
            this.dineroApuesta = apuestaLocal; 
          } else {
            console.log(colors.red("Saldo insuficiente. Por favor, ingrese un monto válido")); 
          }
          console.log(colors.red(`SE LE RESTAN ${this.dineroApuesta}`));
          console.log(colors.green(`SALDO DISPONIBLE: ${this.dineroDisponible}`));
        } while (apuestaLocal <= 0); //mientras que//si la apuesta ingresada en menor o igual a cero, el ciclo se vuelve a ejecutar
      }
} // fin de la sub clase