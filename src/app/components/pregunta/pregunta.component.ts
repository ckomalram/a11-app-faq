import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPreguntas: Pregunta[];
  constructor(public _preguntaService: PreguntaService) {

    this.listPreguntas = this._preguntaService.getPreguntas();


  }

  ngOnInit(): void {
    console.log(this.listPreguntas);
  }

  obtenerPregunta() {
    return this.listPreguntas[this._preguntaService.indexPregunta].descripcion;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if (this._preguntaService.pregConfirmada === true) {
      return;
    }
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.dehabilitarBtn = false;
    this._preguntaService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Respuesta) {

    //Respuesta sin confirmar
    if (respuesta === this._preguntaService.opcionSeleccionada && !this._preguntaService.pregConfirmada) {
      return 'active text-light';
    }

    //Respuesta correcta confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
       return 'list-group-item-success';
    }

    //Respuesta incorrecta confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
       return 'list-group-item-danger';
    }


  }


  iconCorrecta(respuesta: Respuesta) {
    //Respuesta correcta confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrecta(respuesta: Respuesta) {
    //Respuesta correcta confirmada
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada
      && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    } else {
      return false;
    }
  }



}
