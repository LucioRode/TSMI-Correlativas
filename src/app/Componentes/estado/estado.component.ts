import { Component, OnInit } from '@angular/core';
import { CorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

n_Materias : number;
c_Aprobadas : number;
c_Pendientes : number;
porc_A : number;
porc_P : number;
prom : number;
estado : boolean;

  constructor(private _servCorrelativas : CorrelativasService) {
    this.n_Materias = 0;
    this.c_Aprobadas = 0;
    this.c_Pendientes = 0;
    this.porc_A = 0;
    this.porc_P = 0;
    this.prom = 0;
    this.estado = this._servCorrelativas.est;}

  ngOnInit(): void {
    this._servCorrelativas.resetEstado();
    this.n_Materias = this._servCorrelativas.n_Materias;
    this._servCorrelativas.limpiarNotas();
    this._servCorrelativas.barridoNotasP();
    this._servCorrelativas.barridoNotasS();
    this._servCorrelativas.barridoNotasT();
    this._servCorrelativas.calculoDeNotas();
    this.c_Aprobadas = this._servCorrelativas.c_Aprobadas;
    this.c_Pendientes = this._servCorrelativas.c_Pendientes;
    this.porc_A = this._servCorrelativas.porc_A;
    this.porc_P = this._servCorrelativas.porc_P;
    this.prom = this._servCorrelativas.prom;
    this._servCorrelativas.estado();
    this.estado = this._servCorrelativas.est;
  }
}
