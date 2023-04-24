import { Ruleta } from "./ruleta";
import { Dados } from "./dados";
import { Tragamonedas } from './Tragamonedas';
import { Apuestas } from "./apuestas";
//con esta clase, lo que se trata de implementar es la clase casino que simular ser el casino(edificio)
//el cual está compuesto por las diferentes salas de juegos, el nombre del casino y la cant de salas 
//que lo componen
export class Casino {//clase individual//inicio de la clase Casino compuesta por las clases 
    private nombre: string;                         //apuestas,tragamonedas,dados y ruleta
    private cantSalas: number;
    private apuesta: Apuestas;
    private sala1: Tragamonedas;
    private sala2: Dados;
    private sala3: Ruleta;
    
     public constructor(nombre:string,cantSalas:number,apuesta:Apuestas,sala1:Tragamonedas,sala2:Dados,sala3:Ruleta){//comienza constructor
        this.nombre=nombre; 
        this.cantSalas=cantSalas;
        this.apuesta= apuesta;
        this.sala1=sala1;
        this.sala2 =sala2;
        this.sala3 =sala3;
          
     }//fin constructor
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
     public setApuesta(apuesta:Apuestas):void{
        this.apuesta=apuesta;
    }
    public getApuesta():Apuestas{
        return this.apuesta;
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
         
      }//final de la clase
  
   
   
 
 
 
 
 