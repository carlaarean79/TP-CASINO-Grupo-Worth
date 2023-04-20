import * as readlineSync from 'readline-sync'
import colors from "colors";
import {Apuestas} from "./apuestas";
import { Jugar } from './interface';
export class Dados extends Apuestas implements Jugar {
private dados:number
public constructor(pdineroDisponible : number, pdineroApuesta ? : number){
super(pdineroDisponible,pdineroApuesta);//herencia de la class Apuesta.
this.dados= 2;
}
 
public setDados(dados:number): void{
    this.dados= dados;
}
public getDados():number{
return this.dados;
}
public tirarDados() {// este método permite elegir un número aleatorio entre cero y seis.
  let dado1 =  Math.floor(Math.random() * 6)+1;//math floor redondea el núm hacia abajo
 let dado2 =  Math.floor(Math.random() * 6)+1;//math floor redondea el núm hacia abajo
  return `El resultado es dado1 ${dado1}, dado 2 ${dado2}`
  }
  public probabilidadDeGanar() {// interface de Apuesta.
    //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
    let nroApuesta;
    nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
     colors.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  "
    )); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO

    let probabilidad: number = Math.floor(Math.random() * 6)+1;
console.log(colors.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`),
      colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)+1} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
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
  public pagarPremio(): void { //este metodo esta realacionado con el metodo inicioJuego
    if (this.inicioJuego() === true) {  //si el resultado final de incioJuego es true
      console.log(colors.green(`Total a cobrar ${this.dineroApuesta * 10}`)); //el jugador cobra su ganancia
    }
    let seguirAbandonar: string; //luego le pregunta si quiere seguir apostando
    seguirAbandonar = readlineSync.question(colors.blue(
     `_________________________
     ¿ DESEA SEGUIR APOSTANDO ?
           Responda S/N :  ` ));
    if (seguirAbandonar == "S") {//si elige si, lo retorna al inicio del juego
      this.inicioJuego();
    } else {
      this.elegirSala(); //sino le da la opcion de elegir sala
    }
    
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
    
  }
}
