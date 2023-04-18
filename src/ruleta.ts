import { Apuesta } from "./apuestas";
import { Jugar } from "./interface";
import * as readlineSync from "readline-sync";

    export class Ruleta extends Apuesta implements Jugar {
      
        public constructor($$Disponible: number, $$apuesta?: number) {
          super($$Disponible, $$apuesta);
        }
      inicioJuego(): boolean {
        throw new Error("Method not implemented.");
      }
      pagarPremio(): void {
        throw new Error("Method not implemented.");
      }
      probabilidadDeGanar(): void {
        throw new Error("Method not implemented.");
      }
      apostar(): void {
        throw new Error("Method not implemented.");
      }
      }