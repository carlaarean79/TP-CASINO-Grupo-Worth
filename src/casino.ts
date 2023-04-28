import { Ruleta } from './ruleta';
import { Dados } from './dados';
import { Tragamonedas } from './Tragamonedas';
import { Apuestas } from "./apuestas";
import * as readlineSync from 'readline-sync';
import { PiedrasPreciosas } from './piedrasPreciosas';
import { Frutas } from './frutas';
import colors from 'colors';

//con esta clase, lo que se trata de implementar es la clase casino que simular ser el casino(edificio)
//el cual está compuesto por las diferentes salas de juegos, el nombre del casino y la cant de salas 
//que lo componen
export class Casino {//clase individual//inicio de la clase Casino compuesta por las clases 
    private nombre: string;                         //apuestas,tragamonedas,dados y ruleta
    private cantSalas: number;
    private sala1: PiedrasPreciosas;
    private sala1a: Frutas;
    private sala2: Dados;
    private sala3: Ruleta;
    
     public constructor(nombre:string,cantSalas:number,sala1:PiedrasPreciosas,sala1a:Frutas,sala2:Dados,sala3:Ruleta){//comienza constructor
        this.nombre=nombre; 
        this.cantSalas=cantSalas;
        this.sala1=sala1;
        this.sala1a= sala1a;
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
 
     public setSala1(sala1:PiedrasPreciosas):void{
         this.sala1=sala1;
     }
     public getSala1():PiedrasPreciosas{
         return this.sala1;
     }
     public setSala1a(sala1a:Frutas):void{
        this.sala1a=sala1a;
    }
    public getSala1a():Frutas{
        return this.sala1a;
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
  
   
   
 
 
 
 
 