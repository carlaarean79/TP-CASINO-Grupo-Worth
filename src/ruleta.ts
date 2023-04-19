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

      inicioJuego(): boolean {
        throw new Error("Method not implemented.");
      }
      pagarPremio(): void {
        throw new Error("Method not implemented.");
      }
     
      apostar(): void {
        throw new Error("Method not implemented.");
      }
      }