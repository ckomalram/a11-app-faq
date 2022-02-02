import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexRespuesta=null;
  respuestaUsuario: Array<number> = [];
  indexPregunta : number = 0;
  opcionSeleccionada: Respuesta;
  dehabilitarBtn: boolean = true;
   pregConfirmada: boolean = false;

  public preguntas: Pregunta[]= [
    new Pregunta('Cual es la capital de Panamá' , [
      new Respuesta('Vacamonte',0),
      new Respuesta('Panama',1),
      new Respuesta('Vista Alegre',0),
      new Respuesta('Chame',0),
    ]),
    new Pregunta('Cual es la capital de Francia' , [
      new Respuesta('Roma',0),
      new Respuesta('Paris',1),
      new Respuesta('Dublin',0),
      new Respuesta('Atenas',0),
    ]),
    new Pregunta('Cual es la capital de Egipto' , [
      new Respuesta('Casa Blanca',0),
      new Respuesta('Dubai',0),
      new Respuesta('Londres',0),
      new Respuesta('El Cairo',1),
    ]),
  ]

  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }
}
