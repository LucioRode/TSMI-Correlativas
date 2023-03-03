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
promedio_A = 0;
promedio_P = 0;
promedio = 0;

  constructor(private _servCorrerlativas : CorrelativasService) { }

  ngOnInit(): void {
    this.n_Materias = this._servCorrerlativas.n_Materias;
    this.c_Aprobadas = this._servCorrerlativas.c_Aprobadas;
    this.c_Pendientes = this._servCorrerlativas.c_Pendientes;
    this.promedio_A = this._servCorrerlativas.promedio_A;
    this.promedio_P = this._servCorrerlativas.promedio_P;
    this.promedio = this._servCorrerlativas.promedio;
  }

}
