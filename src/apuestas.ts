import * as readlineSync from "readline-sync";

export class Apuesta {  // Comiezo de la clase Apuesta //superclase, padre

    protected dineroApuesta : number; // Declaracion de miembros datos // Variable internas.
    protected dineroDisponible : number; // Portected :  modificador de acceso con el cual , las clase que lo hereden van a tener acceso a ellos. 
    public constructor (pdineroDisponible : number, pdineroApuesta ? : number) { // Inicia constructor, pdineroApuesta ? parametro opcional en el ultimo lugar, de otro modo respectar el orden de como se crearon las variables. 
        this.dineroDisponible = pdineroDisponible; // con this. se transformo las variabels en objetos 
        pdineroApuesta ? this.dineroApuesta = pdineroApuesta : this.dineroApuesta = 0; // el signo ? es un operador ternario (operador condicional ) y lo que hace es la sintaxis de la condicion IF -- ELSE.
                                                                                       // si ingresa dineroApuesta me devuelve el valor que ingreso por parametro, y sino me devuelve 0. 
    } // Finaliza constructor.

    public setDineroApuesta(pdineroApuesta : number) : void { // Son los miebros "METODOS o funciones" y estamos habalndo del SET y el GET
        this.dineroApuesta = pdineroApuesta;                  // El SET permite setear (ingresar o modificar datos ingresadso por el constructro ) los valores del parametro.
     }
    public getDienroApuesta() : number {                     // Muestra los valores ingresados o modificados por el SET.
        return this.dineroApuesta;
     }
    public setDineroDisponible(pdineroDisponible : number) : void {
        this.dineroDisponible = pdineroDisponible;
     }
     public getDineroDisponible() : number {
        return this.dineroDisponible;
     }
     public elegirSala(){//menú de opciones de juego
        let juegos = [" Tragamonedas Diamantes"," Tragamonedas Frutal"," Ruleta"," Dados"];//crea un arreglo con las opciones de juego
        let sala = readlineSync.keyInSelect(juegos, "Elija una opcion");//keyInSelect es un metodo de la libreria readlinesync
        console.log(                                                    //deja que el usuario elija un elemento de la lista
          `El juego elegido es ${juegos[sala]}`//muestra el juego elegido
        );
      }      

} // fin de la clase Apuesta