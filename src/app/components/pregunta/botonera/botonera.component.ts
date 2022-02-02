import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  btnString: string = 'Aceptar';

  constructor(public _preguntaservices: PreguntaService, private router: Router) { }

  ngOnInit(): void {
  }

  siguiente(){
    switch (this.btnString) {
      case 'Aceptar':
        this._preguntaservices.pregConfirmada = true;
        this.btnString = 'Siguiente';

        if (this._preguntaservices.preguntas.length - 1 === this._preguntaservices.indexPregunta) {
          this.btnString = 'Finalizar';
        }
        break;
      case 'Siguiente':
          this._preguntaservices.indexPregunta++;
          this._preguntaservices.respuestaUsuario.push(this._preguntaservices.indexRespuesta);
          this._preguntaservices.dehabilitarBtn = true;
          this._preguntaservices.pregConfirmada=false;
          this.btnString = 'Aceptar'
          break;
      case 'Finalizar':
        this._preguntaservices.respuestaUsuario.push(this._preguntaservices.indexRespuesta);
        this._preguntaservices.opcionSeleccionada= null;
        this._preguntaservices.pregConfirmada = false;
        this._preguntaservices.indexPregunta= 0;
        this.router.navigate(['/respuesta']);
        break;
      default:
        break;
    }
  }
}
