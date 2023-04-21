import { Apuestas } from "./apuestas";
import { Jugar } from "./interface";
import * as readlineSync from "readline-sync";
import colors from 'colors';

    export class Ruleta extends Apuestas implements Jugar {  // La clase ruleta extiende (hereda) dela clase apuesta (Superclase) e implementa la interface jugar
      
      public constructor ( pdineroDisponible : number, pdineroApuesta ? : number ) { // los parametros del constructor de la superclase tambien se incluyen en el constructor de la subclase (clase hija ruleta)
        super (pdineroDisponible , pdineroApuesta); // se hace una llamada al constructor de la superclase apuesta, pero no se le incluye el tipo                                   
      
      }
// se implementan los metodos de la interface jugar que ruleta esta obligada a utilizar o respetar por contrato 
      public probabilidadDeGanar() {// interface de Apuesta.
        //ESTE METODO DEVUELVE CUAL ES LA PROBABILIDAD DE GANAR APOSTANDO N NRO.
        let nroApuesta;
        nroApuesta = readlineSync.questionInt(//DECLARE UNA VARIABLE A LA CUAL LA INICIE CON QUESTION DE READLINE-SYNC
         colors.bgGreen("Ingrese un numero y vea cuales son sus probabilidades de ganar :  "
        )); //LE PIDE AL USUARIO QUE INGRESE UN NUMERO
    
        let probabilidad: number = Math.floor(Math.random() * 5)+1;
    console.log(colors.red(`La probabilidad de sacar un ${nroApuesta} es de`),
          colors.red(`*****${probabilidad} en ${Math.floor(Math.random() * 36)+1} *****`)); //ME DEVUELVE EL NUMERO ELEGIDO, EL RANDOM GUARDADO EN LA VARIABLE PROBABILIDAD Y ELIJE OTRO NUMERO AL ALEATORIO ENTRE 1 Y 20.
        return this.inicioJuego(); //ESTE METODO RETORNA AL METODO iniciojuego POR LO CUAL EL PROGRAMA CONTINUA CON EL
      }

      //  xxxx

      public inicioJuego(): boolean {//metodo que devuelve valor booleano. si gana devuelve true, si pierde false
        let numeroApuesta; //declare dos variables para guardar los datos que el usuario ingresa
        let color;
        numeroApuesta = readlineSync.questionInt(colors.red("Ingrese numero elegido:  ")); //inicializo cada variable//questionInt xq ingresa un numero
        color = readlineSync.question(colors.blue("Ingrese color de apuesta:  ")); //question porque ingresa string
       this.apostar(); //ejecuta el metodo apostar()
        console.log(colors.cyan(`
                                  | ------------------------|
                                  | Se cierran las apuestas |
                                  |-------------------------|`));
        let aux = Math.floor(Math.random() * 10); //cree una variable aux la que almacenara un numero aleatorio entre 1 y 10
        if (aux == numeroApuesta) {
          //si ese numero aleatorio es igual al de la apuesta gana y se multiplica su dinero de apuesta * 10
          console.log(colors.red(
       `|=====================================================================|
          Su apuesta es al  ${numeroApuesta},${color}
          con un valor de $ ${ this.dineroApuesta }
        |=====================================================================|`),
        colors.blue(
          `******El número favorecido es ${aux} usted ha ganado $ ${this.dineroApuesta * 10 } *******`),colors.yellow(
            `---------------------TOTAL DISPONIBLE: ${this.dineroDisponible + this.dineroApuesta * 10
        }---------------------`));
          return true;
        } else {//si pierde descuenta del dinero disponible lo apostado
          console.log(colors.cyan(`
        |======================================================================|
              Su apuesta es al  ${numeroApuesta},${color} con un valor de $ ${this.dineroApuesta}.
        |======================================================================|.`
        ), colors.bgMagenta(
        ` *********** El número favorecido es ${aux}:`),colors.bgRed(` usted ha perdido.************`
        ),colors.bgGreen(
        `------------------TOTAL DIPONIBLE $  ${this.dineroDisponible}------------------`));
          let seguirAbandonar: string;//le da al usuario la posibilidad de elegir si sigue o no apostando
          seguirAbandonar = readlineSync.question(colors.blue(
                       ` El juego excesivo es perjudicial para la salud
                                  ---------------------------
                                    DESEA SEGUIR APOSTANDO ?
                                        Responda S/N :  `));
          if (seguirAbandonar == "S") {//si elije que si vuelve al inicio del metodo inicioJuego()
            this.inicioJuego();
          } else if (seguirAbandonar === "N") {
            console.log(`Gracias por jugar con nosotros`);

          }
          return false;
        }
      }

      //  XXX
      /* public pagarPremio():void{//este metodo esta realacionado con el metodo inicioJuego
        if (this.inicioJuego() === true) {//si el resultado final de incioJuego es true
          console.log(colors.bold(`Total a cobrar ${this.dineroApuesta * 10}`));//el jugador cobra su ganancia
        }
        let seguirAbandonar: string;//luego le pregunta si quiere seguir apostando
        seguirAbandonar = readlineSync.question(colors.zalgo(
   ` El juego excesivo es perjudicial para la salud
          _________________________
          ¿ DESEA SEGUIR APOSTANDO ?
          ---------------------------
            Responda S/N :  `)
        );
        if (seguirAbandonar == "S") {//si elige si, lo retorna al inicio del juego
          this.inicioJuego()
        }else{
          this.elegirSala();//sino le da la opcion de elegir sala
            }
      }
 */
      //  XXXXX

      public apostar():void {
        let apuestaLocal: number; //variable que almacenara la apuesta ingresada por el usuario
        do { //hacer
          apuestaLocal = readlineSync.questionInt(colors.red("Ingrese su apuesta: ")); //questionInt para que reconozca tipo numero
          if (apuestaLocal > 0) {
            //condicion que evalua el monto ingresado sea mayor a 0
            this.dineroDisponible = this.dineroDisponible - apuestaLocal; //le resta a la variable dineroD lo que el usario ingreso
            this.dineroApuesta = apuestaLocal; //almacena en la variable dineroA, el resto
          } else {
            console.log(colors.yellow("No se puede apostar en negativo")); //si el usuario ingresa num negat
          }
          console.log(colors.cyan(`SE LE RESTAN ${this.dineroApuesta}`)); //muestra el monto de la apuesta
          console.log(colors.red(`DINERO DISPONIBLE : ${this.dineroDisponible}`)); //muestra por consola el dinero disponible
        } while (apuestaLocal <= 0); //mientras que
        return;
      }



      }