import { Menu } from ".";
import { Tragamonedas } from "./Tragamonedas";
import { Jugar } from "./interface";
import colors from "colors"
import * as readlineSync from 'readline-sync'

export class PiedrasPreciosas extends Tragamonedas implements Jugar { //inicio de la sub clase Diamantes
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
//la da comienzo a los distintos juegos
public inicioJuego():void {
    console.log(colors.bgGreen(`Pozo acumulado ${this.pozoAcumulado} $`));
    console.log(` Dinero disponible: ${this.dineroDisponible}$`  );
    console.log(colors.bgMagenta(`Inicia el juego. Mucha suerte!`));
        this.apostar();
    console.log(`Procesando ....***tulin tulin---tulin tulin---***`);
        let lineas1 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio = lineas1[Math.floor(Math.random()*lineas1.length)]
        let lineas2 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio2 = lineas2[Math.floor(Math.random()*lineas2.length)]
        let lineas3 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio3 = lineas3[Math.floor(Math.random()*lineas3.length)]
        let lineas4 = ["Diamante","Gema","Rubi","Amatista"]
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
          } else if((aleatorio === aleatorio2 && aleatorio == aleatorio3 && aleatorio !== aleatorio4) || 
          (aleatorio === aleatorio4 && aleatorio===aleatorio2 && aleatorio !== aleatorio3)||
          (aleatorio === aleatorio3 && aleatorio === aleatorio4 && aleatorio !== aleatorio2)||
          (aleatorio2 === aleatorio3 && aleatorio2 === aleatorio4 && aleatorio2 !== aleatorio)||
          (aleatorio3 === aleatorio && aleatorio3 === aleatorio2 && aleatorio3 !== aleatorio4)||
          (aleatorio3 === aleatorio2 && aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio)){
            console.log(colors.bgBlue(
                `Acierto de 3 lineas. Usted gana $ ${this.dineroApuesta + 5000}`),
                colors.red(`TOTAL ACUMULADO ${this.dineroDisponible = this.dineroDisponible + this.dineroApuesta + 5000}`));
            console.log(`Dinero disponible ${this.dineroDisponible++}`);
            }   else if(aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio === aleatorio4){
                    console.log(colors.bgCyan(
                        `HA ACERTADO LAS 4 LINEAS!!!!! USTED GANA ${this.pozoAcumulado + this.dineroApuesta} `));
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
            this.inicioJuego();
          } else if (seguirAbandonar === "N") {
            let menu=new Menu();
            menu.getElegirJuego();
            console.log(`Gracias por jugar con nosotros`);
          } 
    
        }

      //método que implementa la interfaz
      //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N cant de líneas.
    public probabilidadDeGanar():void{
    let cantLineas;
    cantLineas = readlineSync.questionInt(
     colors.bgGreen("Antes de empezar el juego, vea cuales son sus probabilidades de acertar 2,3 o 4 lineas. Ingrese una opción: "
    )); 
      let probabilidad: number = Math.floor(Math.random() * 4)+1; 
console.log(colors.red(`La probabilidad de acertar ${cantLineas} lineas es de`),
      colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 16)+1} *****`));
    this.inicioJuego(); 
   
    }
    
      //  Método que implementa la intefaz 
// con el ciclo do - while primero se evalúa la sentencia y luego la condición.
 //interactúa con la apuesta ingresada y el saldo disponible
    public apostar(): void {
        let apuestaLocal: number;
        do { //hacer
          apuestaLocal = readlineSync.questionInt(colors.bgBlue("Ingrese su apuesta: "));
          if (apuestaLocal > 0) {
            this.dineroDisponible = this.dineroDisponible - apuestaLocal; 
            this.dineroApuesta = apuestaLocal; 
          } else if (apuestaLocal === 0) {

            console.log(colors.red("Saldo insuficiente. Por favor, ingrese un monto válido")); 
          } 
          
          console.log(colors.red(`SE LE RESTAN ${this.dineroApuesta}`));
          console.log(colors.green(`SALDO DISPONIBLE: ${this.dineroDisponible}`));
        } while (apuestaLocal < 0); //mientras que// si la apuesta ingresada en menor o igual a cero, el ciclo se vuelve a ejecutar
      }
} // fin de la sub clase

