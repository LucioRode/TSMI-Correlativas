import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrelativasService {

  /*   Variables de notas   */
  //   Primer año
  p1 : number;
  p2 : number;
  p3 : number;
  p4 : number;
  p5 : number;
  p6 : number;
  p7 : number;
  p8 : number;
  p9 : number;
  p10 : number;
  p11 : number;

  //   Segundo año
  s1 : number;
  s2 : number;
  s3 : number;
  s4 : number;
  s5 : number;
  s6 : number;
  s7 : number;
  s8 : number;
  s9 : number;

  //   Tercer año
  t1 : number;
  t2 : number;
  t3 : number;
  t4 : number;
  t5 : number;
  t6 : number;
  t7 : number;
  t8 : number;
  t9 : number;
  
  /*   Variables de seccion estado   */
n_Materias : number;
c_Aprobadas : number;
c_Pendientes : number;
porc_A : number;
porc_P : number;
prom : number;
notas : number [];
nl : number;


  constructor() {
    /*   Vaiables con los valores de notas   */
    //   Primer Año
    this.p1 = 0;
    this.p2 = 0;
    this.p3 = 0;
    this.p4 = 0;
    this.p5 = 0;
    this.p6 = 0;
    this.p7 = 0;
    this.p8 = 0;
    this.p9 = 0;
    this.p10 = 0;
    this.p11 = 0;

    //   Segundo año
    this.s1 = 0;
    this.s2 = 0;
    this.s3 = 0;
    this.s4 = 0;
    this.s5 = 0;
    this.s6 = 0;
    this.s7 = 0;
    this.s8 = 0;
    this.s9 = 0;
  
    //   Tercer año
    this.t1 = 0;
    this.t2 = 0;
    this.t3 = 0;
    this.t4 = 0;
    this.t5 = 0;
    this.t6 = 0;
    this.t7 = 0;
    this.t8 = 0;
    this.t9 = 0;

    /*   Seccion Estado   */
    this.n_Materias = 29;
    this.notas = [];
    this.c_Aprobadas = 0;
    this.porc_A = 0;
    this.porc_P = 0;
    this.c_Pendientes = 0;
    this.prom = 0;

    this.nl = 0;
    
   }

   // Vacio el array de notas
   limpiarNotas(): void {
    this.notas = [];
   }

   //   Barrido de notas de Primer año, guarda en array Notas las aprobadas
   barridoNotasP(): void {

    if (this.p1 >= 6) {
      this.notas.push(this.p1);
    }

    if (this.p2 >= 6) {
      this.notas.push(this.p2);
    }

    if (this.p3 >= 6) {
      this.notas.push(this.p3);
    }

    if (this.p4 >= 6) {
      this.notas.push(this.p4);
    }

    if (this.p5 >= 6) {
      this.notas.push(this.p5);
    }

    if (this.p6 >= 6) {
      this.notas.push(this.p6);
    }

    if (this.p7 >= 6) {
      this.notas.push(this.p7);
    }

    if (this.p8 >= 6) {
      this.notas.push(this.p8);
    }

    if (this.p9 >= 6) {
      this.notas.push(this.p9);
    }

    if (this.p10 >= 6) {
      this.notas.push(this.p10);
    }

    if (this.p11 >= 6) {
      this.notas.push(this.p11);
    }
  }

  //   Barrido de notas de Segundo año, guarda en array Notas las aprobadas
  barridoNotasS(): void {

    if (this.s1 >= 6) {
      this.notas.push(this.s1);
    }

    if (this.s2 >= 6) {
      this.notas.push(this.s2);
    }

    if (this.s3 >= 6) {
      this.notas.push(this.s3);
    }

    if (this.s4 >= 6) {
      this.notas.push(this.s4);
    }

    if (this.s5 >= 6) {
      this.notas.push(this.s5);
    }

    if (this.s6 >= 6) {
      this.notas.push(this.s6);
    }

    if (this.s7 >= 6) {
      this.notas.push(this.s7);
    }

    if (this.s8 >= 6) {
      this.notas.push(this.s8);
    }

    if (this.s9 >= 6) {
      this.notas.push(this.s9);
    }
  }

  //   Barrido de notas de Tercer año, guarda en array Notas las aprobadas
  barridoNotasT(): void {
    
    if (this.t1 >= 6) {
      this.notas.push(this.t1);
    }

    if (this.t2 >= 6) {
      this.notas.push(this.t2);
    }

    if (this.t3 >= 6) {
      this.notas.push(this.t3);
    }

    if (this.t4 >= 6) {
      this.notas.push(this.t4);
    }

    if (this.t5 >= 6) {
      this.notas.push(this.t5);
    }

    if (this.t6 >= 6) {
      this.notas.push(this.t6);
    }

    if (this.t7 >= 6) {
      this.notas.push(this.t7);
    }

    if (this.t8 >= 6) {
      this.notas.push(this.t8);
    }

    if (this.t9 >= 6) {
      this.notas.push(this.t9);
    }
  }

  //   Guardo la cantidad de materias aprobadas
  cantAprobradas(): void {
    if (this.notas.length < 1) {
      this.c_Aprobadas = 0;
    } else {
      this.c_Aprobadas = this.notas.length;
    }
  }
  
  //    Calculo de Porcentaje de Aplrobadas
  calcPorcA(): void {
    this.porc_A = this.c_Aprobadas*100/this.n_Materias;
  }

  //    Calculo de Pocentaje de materias Pendientes
  calcPorcP(): void {
    this.porc_P = 100 - this.porc_A;
  }

  //    Calculo de Materias pendientes
  calcPendientes(): void {
    this.c_Pendientes = (this.n_Materias - this.c_Aprobadas);
  }

  //    Calculo Promedio de Materias Aprobadas
  calcPromedio(): void {
    var i = 0, summ = 0, ArrayLen = this.notas.length;
    while (i < ArrayLen) {
    summ = summ + this.notas[i++];
    }
    this.prom = summ / ArrayLen;
  }

  calculoDeNotas(): void {
   this.cantAprobradas();
   this.calcPorcA();
   this.calcPorcP();
   this.calcPendientes();
   this.calcPromedio();
  }

}
