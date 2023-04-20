import { Apuestas } from "./apuestas";
import { Jugar } from "./interface";
import * as readlineSync from "readline-sync";
import colors from "colors";

    export class Ruleta extends Apuestas implements Jugar {
      
      public constructor ( pdineroDisponible : number, pdineroApuesta ? : number ) {
        super (pdineroDisponible , pdineroApuesta);
      
      }

      public probabilidadDeGanar() {// interface de Apuesta.
        //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
         colors.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  "
        )); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO
    
        let probabilidad: number = Math.floor(Math.random() * 6);
    console.log(colors.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`),
          colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
        return this.inicioJuego(); //ESTE METODO RETORNA AL METODO iniciojuego POR LO CUAL EL PROGRAMA CONTINUA CON EL
      }

      public inicioJuego(): boolean {
        let nroApuesta: number;
        nroApuesta = readlineSync.questionInt(colors.rainbow("Sera su dia de suerte? Compruebelo!! Cual numero elige?:  "));
        this.apostar();
        let dado1 =  Math.floor(Math.random() * 6)+1;
        let dado2=  Math.floor(Math.random() * 6)+1;
        if (dado1 == dado2 && nroApuesta) {
          console.log(colors.red(
              `********Usted eligio al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}**********`),
            colors.blue(
              ` ---------EL PAR DE DADOS GANADOR ES:  ${dado1} y ${dado2}:`),colors.bgMagenta(`usted ha ganado!!--------`),
            colors.yellow(
              `$$$$$$ SALDO DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 5
              }$${this.pagarPremio()}--------------`
            )
          );
          return true;
        } else {
          console.log(colors.yellow(
              `*********Usted eligió  al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}*********`),
            colors.red(`--------EL PAR DE DADOS GANADOR ES: ${dado1} y ${dado2
            }:`), colors.bgRed(`usted ha perdido!!---------`),
            ` $$$$$ SALDO DISPONIBLE: ${this.dineroDisponible}$`
          );
          let seguirAbandonar: string; //le da al usuario la posibilidad de elegir si sigue o no apostando
          seguirAbandonar = readlineSync.question(colors.blue(
          `_________________________
          ¿ DESEA SEGUIR APOSTANDO ?
               Responda S/N :  ` ));
          if (seguirAbandonar == "S") {//si elije si,  vuelve al inicio del metodo inicioJuego()
            this.inicioJuego();
          } else {
            this.elegirSala(); //si elije que no ejecuta el metodo elegir sala
          }
          return false;
        }
      }
      pagarPremio(): void {
        throw new Error("Method not implemented.");
      }
     
      apostar(): void {
        throw new Error("Method not implemented.");
      }
      }