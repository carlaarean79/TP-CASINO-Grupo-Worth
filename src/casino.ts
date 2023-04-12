import { Tragamonedas } from "./Tragamonedas";
import { Ruleta } from "./ruleta";
import { Dados } from "./dados";
//con esta clase, lo que se trata de implementar es la clase casino que simula ser el casino(edificio)
//el cual está compuesto por las diferentes salas de juegos, el nombre del casino y la cant de salas 
//que lo componen
export class Casino {//clase individual
    private nombre: string;
    private cantSalas: number;
    private sala1: Tragamonedas;//composicion
    private sala2: Dados;//composicion
    private sala3: Ruleta;//composicion
    
     public constructor(nombre:string,cantSalas:number,sala1:Tragamonedas,sala2:Dados,sala3:Ruleta){
        this.nombre=nombre;
        this.cantSalas=cantSalas;
        this.sala1=sala1;
        this.sala2 =sala2;
        this.sala3 =sala3;
          
     }
     public setNombre(nombre:string):void{
         this.nombre=nombre;
     }
     public getNombre():string{
         return this.nombre;
     }
     public setCantDeSalas(cantSalas:number):void{
         this.cantSalas=cantSalas;
     }
     public getCantDeSalas():number{
         return this.cantSalas;
     }
     public setSala1(sala1:Tragamonedas):void{
         this.sala1=sala1;
     }
     public getSala1():Tragamonedas{
         return this.sala1;
     }
     public setSala2(sala2:Dados):void{
        this.sala2=sala2;
    }
    public getSala2():Dados{
        return this.sala2;
    }
    public setSala3(sala3:Ruleta):void{
        this.sala3=sala3;
    }
    public getSala3():Ruleta{
        return this.sala3;
    }
         
      }
        
     
 
 
 
 
 