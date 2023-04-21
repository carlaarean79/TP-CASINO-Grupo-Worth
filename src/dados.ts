import * as readlineSync from 'readline-sync'
import colors from "colors";
import {Apuestas} from "./apuestas";
import { Jugar } from './interface';
export class Dados extends Apuestas implements Jugar {// se crea la clase dados que extiende de la clase apuesta e implementa la interfaz de jugar.
private dados:number
public constructor(pdineroDisponible : number, pdineroApuesta ? : number){//los parámetros del constructor de la super class, también se incluyen en el constructor de la subclass.
super(pdineroDisponible,pdineroApuesta);//se hace un llamado al constructor de la super class Apuesta. Se escriben sin el tipo.
this.dados= 2;
}
 
public setDados(dados:number): void{//setter se ingresa o modifican datos, a través de parámetros.
    this.dados= dados;
}
public getDados():number{// getter muestran valores, de allí que retornen.
return this.dados;
}
public tirarDados() {// este método permite elegir un número aleatorio entre cero y seis.
  let dado1 =  Math.floor(Math.random() * 6)+1;//math floor redondea el núm hacia abajo
  let dado2 =  Math.floor(Math.random() * 6)+1;//math floor redondea el núm hacia abajo
  return `El resultado es dado1 ${dado1}, dado 2 ${dado2}`//concatenación.
  
  }
  public probabilidadDeGanar() {// este método implementa la interface de Jugar.
    //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
    let nroApuesta: number;
    nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
     colors.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar al tirar dos dados:  "
    )); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO

    let probabilidad: number = Math.floor(Math.random() * 6)+1; // la variable probabilidad, stá equiparada al mét math floor.
    console.log(colors.red(`La probabilidad de sacar un ${nroApuesta} en ambos dados es de`),
    colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)+1} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
    return this.inicioJuego(); //ESTE METODO RETORNA AL METODO iniciojuego POR LO CUAL EL PROGRAMA CONTINUA CON EL
  }
    public inicioJuego(): boolean {// es otro mét que implementa la interfaz Jugar.
    let nroApuesta: number;
    nroApuesta = readlineSync.questionInt(colors.rainbow("Sera su dia de suerte? Compruebelo!! Que numero elige?:  "));
    this.apostar();// es otro mét que implementa la interfaz Jugar.
    let dado1 =  Math.floor(Math.random() * 6)+1;//se crearon los objetos dados. Y en ambos elige un núm al azar.
    let dado2=  Math.floor(Math.random() * 6)+1;
    if (dado1 == dado2 && nroApuesta) { // si dado 1 es igual a dado 2 y al núm que ingresa el usuario.
      console.log(colors.red( // si acierta imprime un mensaje, diciendo ""
          `********Usted eligio al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}**********`),
        colors.blue(// le confirma al usuario cuál es su núm de apuesta y el monto.
          ` ---------EL PAR DE DADOS GANADOR ES:  ${dado1} y ${dado2}:`),colors.bgMagenta(`usted ha ganado!!--------`),
        colors.yellow(// le informa al usuario, cuáles fueron los resultados al tirar ambos dados. Y como esta se cumple, le dice "ha ganado".
          `$$$$$$ SALDO DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 5 //le da a conocer el dinero que posee.
          }$${this.pagarPremio()}--------------`
        )
      );// fin console.log
      return true;// retorna verdadero.
    } else { // sino se da la condición.
      console.log(colors.yellow(
          `*********Usted eligio  al ${nroApuesta} como par ganador y con una apuesta de $ ${this.dineroApuesta}*********`),
        colors.red(`--------EL PAR DE DADOS GANADOR ES: ${dado1} y ${dado2
        }:`), colors.bgRed(`usted ha perdido!!---------`),
        ` $$$$$ SALDO DISPONIBLE: ${this.dineroDisponible}$`
      );
      let seguirAbandonar: string; //le da al usuario la posibilidad de elegir si sigue o no apostando
      seguirAbandonar = readlineSync.question(colors.blue(
      `Recuerde que jugar en exceso es signo de posible adiccion
      _________________________
      ¿ DESEA SEGUIR APOSTANDO ?
           Responda S/N :  ` ));
      if (seguirAbandonar == "S") {//si elije si,  vuelve al inicio del metodo inicioJuego()
        this.inicioJuego();
      } else {
        this.elegirSala(); //si elije no, ejecuta el método elegir sala.
      }
      return false; // si la conddición no se cumple, retorna falso.
    }
  }
  public pagarPremio(): void { //este metodo esta realacionado con el metodo inicioJuego
    if (this.inicioJuego() === true) {  //si el resultado final de incioJuego es true
      console.log(colors.green(`Total a cobrar ${this.dineroApuesta * 10}`)); //el jugador cobra su ganancia
    }
    let seguirAbandonar: string; //luego le pregunta si quiere seguir apostando
    seguirAbandonar = readlineSync.question(colors.blue(
     `Recuerde que jugar en exceso es signo de posible adiccion
     _________________________
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
    } while (apuestaLocal < 0); //mientras que
    
  }
}
