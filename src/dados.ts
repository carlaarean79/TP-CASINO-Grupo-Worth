import * as readlineSync from 'readline-sync'
import colors from 'colors';
import {Apuestas} from "./apuestas";
import { Jugar } from './interface';

export class Dados extends Apuestas implements Jugar {// se crea la clase dados que extiende de la clase apuesta e implementa la interfaz de jugar.
private dados:number
public constructor(pdineroDisponible : number, pdineroApuesta ? : number){
super(pdineroDisponible,pdineroApuesta);
this.dados= 2;
}
 
public setDados(dados:number): void{
    this.dados= dados;
}
public getDados():number{
return this.dados;
}
public tirarDados() {
  let dado1 =  Math.floor(Math.random() * 6)+1;
  let dado2 =  Math.floor(Math.random() * 6)+1;
  return `El resultado es dado1 ${dado1}, dado 2 ${dado2}`
  
  }
  //método que implementa la interfaz
      //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N cant de líneas
  public probabilidadDeGanar() {
    let nroApuesta: number;
    nroApuesta = readlineSync.questionInt(
     colors.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  "
    )); 

    let probabilidad: number = Math.floor(Math.random() * 6)+1; 
    console.log(colors.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`),
    colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)+5} *****`)); 
     this.inicioJuego(); 
  }
//método que implementa la interfaz
//la da comienzo a los distintos juego
    public inicioJuego(): void{
       let nroApuesta: number;
      console.log(` Dinero disponible: ${this.dineroDisponible}$`  );
    nroApuesta = readlineSync.questionInt(colors.rainbow("Sera su dia de suerte? Compruebelo!! Que numero elige?:  "));
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
          }--------------`
        )
      );
    
    } else { 
      console.log(colors.yellow(
          `*********Usted eligio  al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}*********`),
        colors.red(`--------EL PAR DE DADOS GANADOR ES: ${dado1} y ${dado2
        }:`), colors.bgRed(`usted ha perdido!!---------`),
        ` $$$$$ SALDO DISPONIBLE: ${this.dineroDisponible}$`
      );
      let seguirAbandonar: string; 
      seguirAbandonar = readlineSync.question(colors.blue(
      `Recuerde que jugar en exceso es signo de posible adiccion
      _________________________
      ¿ DESEA SEGUIR APOSTANDO ?
           Responda S/N :  ` ));
      if (seguirAbandonar == "S") {
        this.inicioJuego();
      }else if (seguirAbandonar === "N") {
        console.log(`Gracias por jugar con nosotros`);
    
      }
     
    }
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
      } else if (apuestaLocal >= 0) {

        console.log(colors.red("Saldo insuficiente. Por favor, ingrese un monto válido")); 
      }
      console.log(colors.red(`SE LE RESTAN ${this.dineroApuesta}`)); 
      console.log(colors.green(`SALDO DISPONIBLE: ${this.dineroDisponible}`));
    } while (apuestaLocal < 0); //mientras que//si la apuesta ingresada en menor o igual a cero, el ciclo se vuelve a ejecutar
    
  }
}
