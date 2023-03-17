import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {
  
  /*   Variable de nota   */
  //   Segundo Año
  s1 : number;
  s2 : number;
  s3 : number;
  s4 : number;
  s5 : number;
  s6 : number;
  s7 : number;
  s8 : number;
  s9 : number;

  /*   Variables booleanas de error fuera de rango de las variables   */
  ss1 : boolean;
  ss2 : boolean;
  ss3 : boolean;
  ss4 : boolean;
  ss5 : boolean;
  ss6 : boolean;
  ss7 : boolean;
  ss8 : boolean;
  ss9 : boolean;

  /*   Habilita la carga de datos   
  textoBoton2 : string;
  cn2 : boolean;
  */

  constructor(private _servCorrelativas : CorrelativasService, private router : Router) {

    //   Variable de notas
    // Segundo Año
    this.s1 = this._servCorrelativas.s1;
    this.s2 = this._servCorrelativas.s2;
    this.s3 = this._servCorrelativas.s3;
    this.s4 = this._servCorrelativas.s4;
    this.s5 = this._servCorrelativas.s5;
    this.s6 = this._servCorrelativas.s6;
    this.s7 = this._servCorrelativas.s7;
    this.s8 = this._servCorrelativas.s8;
    this.s9 = this._servCorrelativas.s9;

    /*   Variable booleana de error fuera de rango   */
    this.ss1 = false;
    this.ss2 = false;
    this.ss3 = false;
    this.ss4 = false;
    this.ss5 = false;
    this.ss6 = false;
    this.ss7 = false;
    this.ss8 = false;
    this.ss9 = false;
  }

  ngOnInit(): void {
  }

  //   Traigo todas las notas del primer año ya existentes, y las muestra
  traerNotasS(): void {
    this.s1 = this._servCorrelativas.s1;
    this.s2 = this._servCorrelativas.s2;
    this.s3 = this._servCorrelativas.s3;
    this.s4 = this._servCorrelativas.s4;
    this.s5 = this._servCorrelativas.s5;
    this.s6 = this._servCorrelativas.s6;
    this.s7 = this._servCorrelativas.s7;
    this.s8 = this._servCorrelativas.s8;
    this.s9 = this._servCorrelativas.s9;
  }

}
