import * as readlineSync from 'readline-sync'
import colors from "colors";
import {Apuestas} from "./apuestas";
import { Jugar } from './interface';
export class Dados extends Apuestas implements Jugar {
private dados:number
public constructor(dados:number,pdineroDisponible : number, pdineroApuesta ? : number){
super(pdineroDisponible,pdineroApuesta);//herencia de la class Apuesta.
this.dados= dados;
}
  inicioJuego(): boolean {
  return true;
  }
  pagarPremio(): void {
    
  }
  apostar(): void {
    
  }
public setDados(dados:number): void{
    this.dados= dados;
}
public getDados():number{
return this.dados;
}
public tirarDados() {// este método permite elegir un número aleatorio entre cero y seis.
    return Math.floor(Math.random() * 6);//math floor redondea el núm hacia abajo.
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
}
