import { Casino } from './casino';//importo todas las clases que voy utilizar
import { Ruleta } from './ruleta';
import { Dados } from './dados';
import { PiedrasPreciosas } from './piedrasPreciosas';
import { Apuestas } from './apuestas';
import { Frutas } from './frutas';
import * as readlineSync from 'readline-sync';
import colors from 'colors'

let RuletaLoca:Ruleta=new Ruleta(5000);
let Dados02:Dados=new Dados(10000);
let TragamonedasPiedrasPreciosas:PiedrasPreciosas=new PiedrasPreciosas(1,40000000,5000);
let TragamonedasFrutal:Frutas=new Frutas(2,1000000,5000)
let juegos: Apuestas= new Apuestas(0);
let casinoRoyal: Casino = new Casino("Royal",4,TragamonedasPiedrasPreciosas,TragamonedasFrutal,Dados02,RuletaLoca);
export class Menu {
    
    public constructor(){
        
    }
    
    public getElegirJuego():void{
        return this.elegirJuego();
    }
    private elegirJuego(){
        
        console.log(colors.yellow(`
        BIEVENIDOS A CASINO ROYAL
        ------------------------
                 MENU
        ------------------------
        Por favor elija una opcion`));
        let opciones = [`Salir`,`Tragamonedas Piedras Preciosas`,`Tragamonedas Frutal`,`Dados02`,`RuletaLoca`];
        
        for(let i=0;i < opciones.length; i++ ){
            console.log(`
      [${i}]----> ${opciones[i]} `);
            
        }
        
        const opcion = readlineSync.questionInt(colors.red(`Ingrese una opcion:   `));
        
        switch(opcion) {
            case 1:
                console.log("ha elegido la opcion de Tragamonedas Piedras Preciosas");
                 TragamonedasPiedrasPreciosas.probabilidadDeGanar();
                break;
                case 2:
                    console.log("ha elegido la opcion de Tragamonedas Frutal");
                   TragamonedasFrutal.probabilidadDeGanar();
                    break;
                    case 3:
                        console.log("ha elegido la opcion de Dados");
                        Dados02.getProbabilidadDeGanar();
                        break;
                        case 4:
                            console.log("ha elegido la opcion de Ruleta");
                         RuletaLoca.probabilidadDeGanar();
                            default:
                                return;
                        }
                    }
                }
                let menu: Menu=new Menu();
                menu.getElegirJuego();
                /* let Tragamonedas01:Tragamonedas= new Tragamonedas(2, 10000);
                let casino01:Casino = new Casino("Casino Royal",3,juegos,Tragamonedas01,dados01,Ruleta01);//nueva instancia de casino//nuevo casino
                
                casino01.getApuesta().elegirSala(), 
                Tragamonedas01.elegirTema(),
                tragamPiedras.probabilidadDeGanar();
                Tragamonedas01.elegirTema(),
                tragamFrutal.probabilidadDeGanar(),
                juegos.elegirSala(),
                Ruleta01.probabilidadDeGanar(),
                juegos.elegirSala(),
                dados01.probabilidadDeGanar();  */


