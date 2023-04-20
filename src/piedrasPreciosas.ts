import { Tragamonedas } from "./Tragamonedas";
import { Jugar } from "./interface";
import colors from "colors"
import * as readlineSync from 'readline-sync'

export class PiedrasPreciosas extends Tragamonedas implements Jugar { //inicio de la sub clase Diamantes
/*     private linea1:string[];
    private linea2:string[];
    private linea3:string[]; */
    private pozoAcumulado:number;
    public constructor (/* linea1:number[],linea2:number[],linea3:number[], */pozoAcumulado:number,pTema1:string,pTema2:string,pdineroDisponible:number, pdineroApuesta?:number) { //se agrega parametros del padre
        super (pTema1,pTema2,/* pPozoAcumulado */pdineroDisponible, pdineroApuesta)//y del padre del padre, y en la super clase tambien
           /*  this.linea1 = [3];
            this.linea2 = [3];
            this.linea3 = [3]; */
            this.pozoAcumulado=pozoAcumulado;
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
public setPozoAcumulado (pozoAcumulado:number):void {
    this.pozoAcumulado = pozoAcumulado;
}

public getPozoAcumulado ():number {
    return this.pozoAcumulado;
}
inicioJuego():boolean {
    console.log(colors.bgGreen(`Pozo acumulado ${this.pozoAcumulado} $`));
    this.apostar();
    console.log(`***tulin tulin---pimpollo---tulin tulin---mi alma***`);
        let lineas1 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio=lineas1[Math.floor(Math.random()*lineas1.length)]
        let lineas2 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio2=lineas2[Math.floor(Math.random()*lineas2.length)]
        let lineas3 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio3=lineas3[Math.floor(Math.random()*lineas3.length)]
        let lineas4 = ["Diamante","Gema","Rubi","Amatista"]
        let aleatorio4=lineas3[Math.floor(Math.random()*lineas4.length)]
        console.log(colors.bgMagenta(`Su juego  Lineas -->  ${aleatorio} ----${aleatorio2} ----- ${aleatorio3}----${aleatorio4}`));
        if((aleatorio === aleatorio3 && aleatorio !== aleatorio2 && aleatorio !== aleatorio4) ||
         (aleatorio === aleatorio4 && aleatorio !== aleatorio2 && aleatorio !== aleatorio3) ||
         (aleatorio2 === aleatorio3 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio4) ||
         (aleatorio2 === aleatorio4 && aleatorio2 !== aleatorio && aleatorio2 !== aleatorio3) ||
         (aleatorio3 === aleatorio4 && aleatorio3 !== aleatorio && aleatorio3 !== aleatorio2)){
          console.log(colors.yellow(
           ` Acierto de 2 lineas. Usted gana $ ${this.dineroApuesta + 2000}`),
           colors.red(`TOTAL ACUMULADO ${this.dineroDisponible + this.dineroApuesta + 2000}`));
          } if((aleatorio === aleatorio2) && (aleatorio2 === aleatorio3)&& (aleatorio3===aleatorio4)){
            console.log(colors.bgBlue(
                `Acierto de 3 lineas. Usted gana $ ${this.dineroApuesta + 5000}`),
                colors.red(`TOTAL ACUMULADO ${this.dineroDisponible + this.dineroApuesta + 5000}`));
            console.log(`Dinero disponible ${this.dineroDisponible++}`);
            }    if(aleatorio === aleatorio2 && aleatorio === aleatorio3 && aleatorio === aleatorio4){
                    console.log(colors.bgCyan(
                        `HA ACERTADO LAS 4 LINEAS!!!!! USTED GANA ${this.pozoAcumulado + this.dineroApuesta} `));
                        return true;
                    } else{
                             
          console.log(colors.bgRed(
            `Sin aciertos!! Usted pierde ${this.dineroApuesta --} Desea apostar nuavemente?`));
            return false;     
           }
        }

        
    pagarPremio():string {
        return ""
    }
    probabilidadDeGanar():void {
        
    }
    
    public apostar(): void {
        let apuestaLocal: number; //variable que almacenara la apuesta ingresada por el usuario
        do { //hacer
          apuestaLocal = readlineSync.questionInt(colors.bgBlue("Ingrese su apuesta: ")); //questionInt para que reconozca tipo numero
          if (apuestaLocal > 0) {//condicion que evalua el monto ingresado sea mayor a 0
            this.dineroDisponible = this.dineroDisponible - apuestaLocal; //le resta a la variable dineroD lo que el usario ingreso
            this.dineroApuesta = apuestaLocal; //almacena en la variable dineroA, el resto y lo toma como nuevo valor
          } else {
            console.log(colors.red("No se puede apostar en negativo")); //si el usuario ingresa num negat
          }
          console.log(colors.red(`SE LE RESTAN ${this.dineroApuesta}`)); //muestra el monto de la apuesta
          console.log(colors.green(`SALDO DISPONIBLE: ${this.dineroDisponible}`)); //muestra por consola el dinero disponible
        } while (apuestaLocal <= 0); //mientras que
        return;
      }

} // fin de la sub clase

