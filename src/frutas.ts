import { Tragamonedas } from "./Tragamonedas";
import { Jugar } from "./interface";

export class Frutas extends Tragamonedas implements Jugar { //inicio de la sub clase Diamantes
    private linea1:number[];
    private linea2:number[];
    private linea3:number[];
    public constructor (linea1:number[],linea2:number[],linea3:number[],pTema1:string,pTema2:string,pPozoAcumulado:number,pdineroDisponible:number, pdineroApuesta?:number) { //se agrega parametros del padre
        super (pTema1,pTema2,pPozoAcumulado,pdineroDisponible, pdineroApuesta)//y del padre del padre, y en la super clase tambien
            this.linea1 = [3];
            this.linea2 = [3];
            this.linea3 = [3];
    } // fin constructor  
    
public setLinea1 (linea1:number[]):void {
    this.linea1 = linea1
}

public getLinea1 ():number[] {
    return this.linea1;
}

public setLinea2 (linea2:number[]):void {
    this.linea2 = linea2
}

public getLinea2 ():number[] {
    return this.linea2;
}

public setLinea3 (linea3:number[]):void {
    this.linea3 = linea3
}

public getLinea3 ():number[] {
    return this.linea3;
}

realizarApuesta():boolean {
    return true
}
    pagarPremio():string {
        return ""
    }
    probabilidadDeGanar():void {

    }

} // fin de la sub clase