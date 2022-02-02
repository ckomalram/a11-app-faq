import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  listPreguntas: Pregunta[];
  respuestasUsuario: any[];

  constructor(private _preguntaservices: PreguntaService, private router: Router) { }

  ngOnInit(): void {

    this.listPreguntas = this._preguntaservices.preguntas;
    this.respuestasUsuario = this._preguntaservices.respuestaUsuario;
   }

   volver(){
     this._preguntaservices.respuestaUsuario= [];
     this.router.navigate(['/'])
   }

}
