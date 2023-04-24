import { Apuestas } from "./apuestas";
import * as readlineSync from 'readline-sync';

export class Tragamonedas extends Apuestas{ //sub clase que extiende de apuestas. Es también una super clase para sus variantes
    protected salaNro:number;
    public constructor (psalaNro:number,pdineroDisponible:number, pdineroApuesta?:number) { 
    super(pdineroDisponible, pdineroApuesta) 
           this.salaNro = psalaNro; 
        
    } //fin constructor

public setSalaNro (pSalaNro:number):void {
    this.salaNro = pSalaNro; 
}

public getSalaNro ():number {
    return this.salaNro;
}
//este método da la opción de elgir el tema del tragamonedas
//está prediseñado con la librería readline-sync

public elegirTema () {
        let temas = [" Tragamonedas Piedras Preciosas"," Tragamonedas Frutal"];
        let sala = readlineSync.keyInSelect(temas, "Elija un tema");
        console.log(                                                    
          `El juego elegido es ${temas[sala]}`
        );
      }      
}