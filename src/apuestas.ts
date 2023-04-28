import * as readlineSync from "readline-sync";

export class Apuestas {  // Comiezo de la clase Apuesta //superclase, padre

    protected dineroApuesta : number; 
    protected dineroDisponible : number;  
    public constructor (pdineroDisponible : number, pdineroApuesta ? : number) {  
        this.dineroDisponible = pdineroDisponible;  
        pdineroApuesta ? this.dineroApuesta = pdineroApuesta : this.dineroApuesta = 0;    
                                                                   // si ingresa dineroApuesta me devuelve el valor que ingreso por parametro, y sino me devuelve 0. 
    } // Finaliza constructor.

    public setDineroApuesta(pdineroApuesta : number) : void { 
        this.dineroApuesta = pdineroApuesta;    
    }              
    public getDienroApuesta() : number {                  
              return this.dineroApuesta;
     }
    public setDineroDisponible(pdineroDisponible : number) : void {
        this.dineroDisponible = pdineroDisponible;
     }
     public getDineroDisponible() : number {
        return this.dineroDisponible;
     }
    //keyInSelect es un metodo de la libreria readlinesync//deja que el usuario elija un elemento de la lista
     public elegirSala(){//menú de opciones de juego
        let juegos = [" Tragamonedas "," Ruleta"," Dados"];
        let sala = readlineSync.keyInSelect(juegos, "Elija una opcion");
        console.log(                                                    
          `El juego elegido es ${juegos[sala]}`
        );
      }   // este metodo si bien simula ser un menú de opciones, no se pudo modificar para que al elegir
      //una opción redireccione al juego seleccionado. Por lo tanto la elección es forzada e irá en 
      //orden cde como se llamaron a los distintos nuevos objetos
  
} // fin de la clase Apuesta
