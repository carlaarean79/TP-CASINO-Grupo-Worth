import { Apuestas } from "./apuestas";

export class Tragamonedas extends Apuestas{ //sub clase
    protected tema1:string; //se llaman miembros datos/variables internas o atributos (caracteristicas del
    protected tema2:string; //objeto)
 /*    protected pozoAcumulado:number; */
    public constructor (pTema1:string,pTema2:string,/* pPozoAcumulado:number, */pdineroDisponible:number, pdineroApuesta?:number) { //se inicializan las variables internas y se le asignan un parametro a cada una y tambien se agregan los parametros del constructor de la super clase
    super(pdineroDisponible, pdineroApuesta) //se hace llamada al constructor de la super clase apuesta
        this.tema1 = pTema1; //se coloca parametros sin el tipo
        this.tema2 = pTema2;
        /* this.pozoAcumulado = pPozoAcumulado; */
    } //fin constructor

public setTema1 (pTema1:string):void {
    this.tema1 = pTema1; //con el set se ingresan o modifican datos
}

public getTema1 ():string { //con el get muestra los datos que ingrese por el set
    return this.tema1;
}

public setTema2 (pTema2:string):void {
    this.tema2 = pTema2; 
}

public getTema2 ():string {
    return this.tema2;
}

/* public setPozoAcumulado (pozoAcumulado:number):void {
    this.pozoAcumulado = pozoAcumulado;
}

public getPozoAcumulado ():number {
    return this.pozoAcumulado;
}
 */
public elegirTema () {
    
}

}