import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {

  /*   Variable de nota   */
  //   Tercero Año
  t1 : number;
  t2 : number;
  t3 : number;
  t4 : number;
  t5 : number;
  t6 : number;
  t7 : number;
  t8 : number;
  t9 : number;

  /*   Variables booleanas de error fuera de rango de las variables   */
  st1 : boolean;
  st2 : boolean;
  st3 : boolean;
  st4 : boolean;
  st5 : boolean;
  st6 : boolean;
  st7 : boolean;
  st8 : boolean;
  st9 : boolean;

  constructor(private _servCorrelativas : CorrelativasService, private router : Router) {
  
  // Tercer Año
  this.t1 = this._servCorrelativas.t1;
  this.t2 = this._servCorrelativas.t2;
  this.t3 = this._servCorrelativas.t3;
  this.t4 = this._servCorrelativas.t4;
  this.t5 = this._servCorrelativas.t5;
  this.t6 = this._servCorrelativas.t6;
  this.t7 = this._servCorrelativas.t7;
  this.t8 = this._servCorrelativas.t8;
  this.t9 = this._servCorrelativas.t9;

  /*   Variable booleana de error fuera de rango   */
  this.st1 = false;
  this.st2 = false;
  this.st3 = false;
  this.st4 = false;
  this.st5 = false;
  this.st6 = false;
  this.st7 = false;
  this.st8 = false;
  this.st9 = false;
  }

  ngOnInit(): void {
  }

  //   Traigo todas las notas del primer año ya existentes, y las muestra
  traerNotasS(): void {
    this.t1 = this._servCorrelativas.t1;
    this.t2 = this._servCorrelativas.t2;
    this.t3 = this._servCorrelativas.t3;
    this.t4 = this._servCorrelativas.t4;
    this.t5 = this._servCorrelativas.t5;
    this.t6 = this._servCorrelativas.t6;
    this.t7 = this._servCorrelativas.t7;
    this.t8 = this._servCorrelativas.t8;
    this.t9 = this._servCorrelativas.t9;
  }

}
