import { Casino } from './casino';//importo todas las clases que voy utilizar
import { Tragamonedas } from './Tragamonedas';
import { Ruleta } from './ruleta';
import { Dados } from './dados';

let Tragamonedas01:Tragamonedas= new Tragamonedas("piedras preciosas","manzana", 10, 100);
let Ruleta01:Ruleta=new Ruleta();
let dados01:Dados=new Dados();
let casino01:Casino = new Casino("Casino Royal",3,Tragamonedas01,dados01,Ruleta01);//nueva instancia de casino//nuevo casino
let Tragamonedas02:Tragamonedas= new Tragamonedas("piedras preciosas","manzana", 10, 100);
let Ruleta02:Ruleta=new Ruleta();
let dados02:Dados=new Dados();
let casino02:Casino= new Casino("Casino Miami",3,Tragamonedas02,dados02,Ruleta02);

console.log(casino01);//muestro como quedó contruido mi nuevo casino

casino01.setNombre("Casino Las Vegas");//settear el nombre y se lo vamos a cambiar por Casino las vegas
console.log(casino01.getNombre());//mostramos el procedimiento anterior

console.log(casino01);//volvemos a mostrar el objeto casino pero con los cambios realizados



