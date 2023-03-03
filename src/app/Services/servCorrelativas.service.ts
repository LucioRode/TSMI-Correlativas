import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrelativasService {

n_Materias : number;
c_Aprobadas : number;
c_Pendientes : number;
promedio_A : number;
promedio_P : number;
promedio : number;
sumaNotas : number;

  constructor() {
    this.n_Materias = 29;
    this.c_Aprobadas = 0;
    this.sumaNotas = 0;
    this.c_Pendientes = (this.n_Materias - this.c_Aprobadas);
    this.promedio_A = (this.c_Aprobadas*100)/this.n_Materias;
    this.promedio_P = 100 - this.promedio_A;
    this.promedio = this.sumaNotas / this.c_Aprobadas;
    
   }
}
