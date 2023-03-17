import { Component, OnInit } from '@angular/core';
import { CorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

n_Materias = 0;
c_Aprobadas = 0;
c_Pendientes = 0;
porc_A = 0;
porc_P = 0;
prom = 0;

  constructor(private _servCorrelativas : CorrelativasService) { }

  ngOnInit(): void {
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
  }

}
