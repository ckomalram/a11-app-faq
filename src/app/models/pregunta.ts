import { Respuesta } from "./respuesta";

export class Pregunta {
  descripcion : string ;
  respuestas: Respuesta[] ;

  constructor(descripcion: string , respuestas: Respuesta[]){
    this.descripcion = descripcion;
    this.respuestas = respuestas;
  }
}
