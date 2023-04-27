import { Apuestas } from "./apuestas";
import { Jugar } from "./interface";
import * as readlineSync from "readline-sync";
import colors from 'colors';

//SE CREO LA CLASE RULETA QUE EXTIENDE DE LA SUPERCLASE APUESTAS E IMPLENTA LA INTERFAZ JUGAR
    export class Ruleta extends Apuestas implements Jugar { 
          public constructor ( pdineroDisponible : number, pdineroApuesta ? : number ) { 
        super (pdineroDisponible , pdineroApuesta);                                   
      
      }
      public girarLaRuleta() {
        return Math.floor(Math.random() * 36);
      }
// se implementan los metodos de la interface jugar que ruleta esta obligada a utilizar o respetar por contrato 
      public probabilidadDeGanar() {
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(
         colors.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar :  "
        )); 
    
        let probabilidad: number = Math.floor(Math.random() * 5)+1;
    console.log(colors.red(`La probabilidad de sacar un ${nroApuesta} es de`),
          colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)+1} *****`)); 
        this.inicioJuego(); 
      }

      //  MÉTODO QUE IMPLEMENTA LA INTERFAZ
//le da comienzo a los distintos juegos
      public inicioJuego(): void{
        console.log(` Dinero disponible: ${this.dineroDisponible}$`  );
        let numeroApuesta; 
        let color;
        numeroApuesta = readlineSync.questionInt(colors.red("Ingrese numero elegido:  ")); 
        color = readlineSync.question(colors.blue("Ingrese color de apuesta:  "));
     this.apostar();
        console.log(colors.cyan(`
                                  | ------------------------|
                                  | Se cierran las apuestas |
                                  |-------------------------|`));
        let aux = Math.floor(Math.random() * 10); 
        if (aux == numeroApuesta) {
          console.log(colors.red(
       `|=====================================================================|
          Su apuesta es al  ${numeroApuesta},${color}
          con un valor de $ ${ this.dineroApuesta }
        |=====================================================================|`),
        colors.blue(
          `******El número favorecido es ${aux} usted ha ganado $ ${this.dineroApuesta * 10 } *******`),colors.yellow(
            `---------------------TOTAL DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 10
        }---------------------`));
      
        } else {
          console.log(colors.cyan(`
        |======================================================================|
              Su apuesta es al  ${numeroApuesta},${color} con un valor de $ ${this.dineroApuesta}.
        |======================================================================|.`
        ), colors.bgMagenta(
        ` *********** El número favorecido es ${aux}:`),colors.bgRed(` usted ha perdido.************`
        ),colors.bgGreen(
        `------------------TOTAL DIPONIBLE $  ${this.dineroDisponible}------------------`));
        } 
        let seguirAbandonar: string;
          seguirAbandonar = readlineSync.question(colors.blue(
          ` Recuerde que jugar en exceso es signo de posible adiccion
                   ---------------------------
                     DESEA SEGUIR APOSTANDO ?
                         Responda S/N :  `));
          if (seguirAbandonar == "S") {
            this.inicioJuego();
          } else if (seguirAbandonar === "N") {
            console.log(`Gracias por jugar con nosotros`);

          }
        
      }

     
      //  Método que implementa la intefaz 
// con el ciclo do - while primero se evalúa la sentencia y luego la condición.
      public apostar():void {
        let apuestaLocal: number;
        do { //hacer
          apuestaLocal = readlineSync.questionInt(colors.red("Ingrese su apuesta: ")); 
          if (apuestaLocal > 0) {
             this.dineroDisponible = this.dineroDisponible - apuestaLocal; 
            this.dineroApuesta = apuestaLocal; 
          } else {
            console.log(colors.yellow("Saldo insuficiente. Por favor, Ingrese un monto válido")); 
          }
          console.log(colors.cyan(`SE LE RESTAN ${this.dineroApuesta}`)); 
       console.log(colors.red(`DINERO DISPONIBLE : ${this.dineroDisponible}`)); 
        } while (apuestaLocal <= 0); //mientras que// si la apuesta ingresada en menor o igual a cero, el ciclo se vuelve a ejecutar
      }

      }