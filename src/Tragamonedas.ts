import { Apuestas } from "./apuestas";
import * as readlineSync from 'readline-sync';

export class Tragamonedas extends Apuestas{ //sub clase
    protected salaNro:number; //se llaman miembros datos/variables internas o atributos (caracteristicas del //objeto)
    public constructor (psalaNro:number,pdineroDisponible:number, pdineroApuesta?:number) { //se inicializan las variables internas y se le asignan un parametro a cada una y tambien se agregan los parametros del constructor de la super clase
    super(pdineroDisponible, pdineroApuesta) //se hace llamada al constructor de la super clase apuesta
        this.salaNro = psalaNro; //se coloca parametros sin el tipo
        
    } //fin constructor

public setSalaNro (pSalaNro:number):void {
    this.salaNro = pSalaNro; 
}

public getSalaNro ():number {
    return this.salaNro;
}

public elegirTema () {
        let temas = [" Tragamonedas Piedras Preciosas"," Tragamonedas Frutal"];//crea un arreglo con las opciones de juego
        let sala = readlineSync.keyInSelect(temas, "Elija un tema");//keyInSelect es un metodo de la libreria readlinesync
        console.log(                                                    //deja que el usuario elija un elemento de la lista
          `El juego elegido es ${temas[sala]}`//muestra el tema elegido
        );
      }      
}