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

  /*   Habilita la carga de datos   */
  textoBoton3 : string;
  statusBoton3 : boolean;

  /*   Variables para mostrar las notas de cada materia   */
  ct1 : boolean;
  ct2 : boolean;
  ct3 : boolean;
  ct4 : boolean;
  ct5 : boolean;
  ct6 : boolean;
  ct7 : boolean;
  ct8 : boolean;
  ct9 : boolean;
  
  /*   Variables booleana mostrar las notas de cada materia   */
  mnt1 : boolean;
  mnt2 : boolean;
  mnt3 : boolean;
  mnt4 : boolean;
  mnt5 : boolean;
  mnt6 : boolean;
  mnt7 : boolean;
  mnt8 : boolean;
  mnt9 : boolean;
  
  //   Variables Notas Correlativas
  elect : number;
  elemMM : number;
  mantInd2 : number;
  pp1 : number;
  innovacion : number;

  //    Variables para texto de errores
  ems : boolean;
  TMPP : string;
  bcct : number;
  electb : boolean;
  elemMMb : boolean;
  mantInd2b : boolean;
  pp1b : boolean;
  innovacionb : boolean;

  constructor(private _servCorrelativas : CorrelativasService, private router : Router) {
    
    //   Variable de notas 
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

    /*   Variable booleana de cargar notas   */
    this.textoBoton3 = "Ingresar Notas";
    this.statusBoton3 = false;
   
    /*   Variable booleana de mostrar carga de notas   */
    this.ct1 = false;
    this.ct2 = false;
    this.ct3 = false;
    this.ct4 = false;
    this.ct5 = false;
    this.ct6 = false;
    this.ct7 = false;
    this.ct8 = false;
    this.ct9 = false;

    /*   Variable booleana de mostrar notas   */
    this.mnt1 = false;
    this.mnt2 = false;
    this.mnt3 = false;
    this.mnt4 = false;
    this.mnt5 = false;
    this.mnt6 = false;
    this.mnt7 = false;
    this.mnt8 = false;
    this.mnt9 = false;

    //   Variables Notas Correlativas
    this.elect = 0;
    this.elemMM = 0;
    this.mantInd2 = 0;
    this.pp1 = 0;
    this.innovacion = 0;

    //    Variables para texto de errores
  this.ems = false;
  this.TMPP = "Se registran materias pendientes de Aprobar";
  this.bcct = 0;
  this.electb = false;
  this.elemMMb = false;
  this.mantInd2b = false;
  this.pp1b = false;
  this.innovacionb = false;
  }

  ngOnInit(): void {
    //   Traigo todas las notas ya existentes, y las muestra
    this.resetVariablesT();
    this.traerNotasT();
    this.mostrarNotasPreCargadasT();
  }

  resetVariablesT(): void {
    this.t1 = 0;
    this.t2 = 0;
    this.t3 = 0;
    this.t4 = 0;
    this.t5 = 0;
    this.t6 = 0;
    this.t7 = 0;
    this.t8 = 0;
    this.t9 = 0;
  }

  //   Traigo todas las notas del primer año ya existentes, y las muestra
  traerNotasT(): void {
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

  // Chekear que si hay nota cargada en variable
    mostrarNotasPreCargadasT(): void {
    if (this._servCorrelativas.t1 !== 0) {
      this.ct1 = false;    // Oculta carga de notras
      this.mnt1 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t2 !== 0) {
      this.ct2 = false;    // Oculta carga de notras
      this.mnt2 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t3 !== 0) {
      this.ct3 = false;    // Oculta carga de notras
      this.mnt3 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t4 !== 0) {
      this.ct4 = false;    // Oculta carga de notras
      this.mnt4 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t5 !== 0) {
      this.ct5 = false;    // Oculta carga de notras
      this.mnt5 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t6 !== 0) {
      this.ct6 = false;    // Oculta carga de notras
      this.mnt6 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t7 !== 0) {
      this.ct7 = false;    // Oculta carga de notras
      this.mnt7 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t8 !== 0) {
      this.ct8 = false;    // Oculta carga de notras
      this.mnt8 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.t9 !== 0) {
      this.ct9 = false;    // Oculta carga de notras
      this.mnt9 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

  }

  habilitarLosCT(): void {
    this.ct1 = true;
    this.ct2 = true;
    this.ct3 = true;
    this.ct4 = true;
    this.ct5 = true;
    this.ct6 = true;
    this.ct7 = true;
    this.ct8 = true;
    this.ct9 = true;
  }

  ocultarLosCT(): void {
    this.ct1 = false;
    this.ct2 = false;
    this.ct3 = false;
    this.ct4 = false;
    this.ct5 = false;
    this.ct6 = false;
    this.ct7 = false;
    this.ct8 = false;
    this.ct9 = false;
  }


  resetCheckCorrelativas(): void {
    this.bcct = 0;
    this.ems = false;
    this.electb = false;
    this.elemMMb = false;
    this.mantInd2b = false;
    this.pp1b = false;
    this.innovacionb = false;
  }


  // Contrasta las Correlativas, lanza errores y oculta carga de datos
  checkCorrelativas(): void {
    //   Traigo las notas necesarias para comparar
    this.elect = this._servCorrelativas.p11;
    this.elemMM = this._servCorrelativas.s4;
    this.mantInd2 = this._servCorrelativas.s6;
    this.pp1 = this._servCorrelativas.s9;
    this.innovacion = this._servCorrelativas.s3;

//   Chequeo materia: Práctica Profesionalizante II
    if ( this.pp1 >= 6 && this.innovacion >= 6 ) {
      this.ct9 = true;
      this.bcct = this.bcct + 1 ;
    } else {
      this.ct9 = false;
    }
    
    //   Chequeo materia: Tecnología del Frío y Calor
    if ( this.elect > 6 ) {
      this.ct4 = true;
      this.bcct = this.bcct + 1;
    } else {
      this.ct4 = false;
    }
    
    //   Chequeo materia: Mantenimiento Industrial III
    if ( this.mantInd2 >= 6 ) {
      this.ct5 = true;
      this.bcct = this.bcct + 1 ;
    } else {
      this.ct5 = false;
    }
    
    //   Chequeo materia: Automatización y Control
    if ( this.elemMM >= 6  ) {
      this.ct6 = true;
      this.bcct = this.bcct + 1 ;
    } else {
      this.ct6 = false;
    }

    //    Aviso de materia pendiente
    if (this.elect < 6) {
      this.electb = true;
    }

    if (this.elemMM < 6) {
      this.elemMMb = true;
    }

    if (this.mantInd2 < 6) {
      this.mantInd2b = true;
    }

    if (this.pp1 < 6) {
      this.pp1b = true;
    }

    if (this.innovacion < 6) {
      this.innovacionb = true;
    }
    
    
    // Lanza Alerta
    if (this.bcct < 4 ) {
      this.ems = true;
    } else {
      this.ems = false;
    }

  }


  habilitarCargarNotaT(): void {
    this.resetCheckCorrelativas();
    this.traerNotasT();

    // Confirmacion estado de Seccion carga de notas
    if (this.statusBoton3 == false ) {
      this.statusBoton3 = true;
      this.habilitarLosCT(); //   Ocultar seccion de carga de notas
      this.textoBoton3 = "Salir"     // Cambio de texto del boton
      this.checkCorrelativas();
    } else {
      this.statusBoton3 = false;
      this.ocultarLosCT();   //   Ocultar seccion de carga de notas
      this.textoBoton3 = "Ingresar Notas"     // Volver el texto del boton a su estado natural
      }
      
      this.mostrarNotasPreCargadasT();
  }


///////////////////////////////////////
//   Botones de Cargar Notas      //
///////////////////////////////////////

  // Botones de materia Gestión de Seguridad, Salud Ocupacional y Medio Ambiente (T1)
  cargarNotaT1(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t1 >= 0 && this.t1 <= 10) {
      
      this.st1 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t1 !== 0) {
        this._servCorrelativas.t1 = this.t1;     // Asigno nota al service
        this.mnt1 = true;   // Muestro la nota
        this.ct1 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st1 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }

  // Botones de materia Ética y Responsabilidad Social (T2)
  cargarNotaT2(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t2 >= 0 && this.t2 <= 10) {
      
      this.st2 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t2 !== 0) {
        this._servCorrelativas.t2 = this.t2;     // Asigno nota al service
        this.mnt2 = true;   // Muestro la nota
        this.ct2 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st2 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Legislación Laboral (T3)
  cargarNotaT3(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t3 >= 0 && this.t3 <= 10) {
      
      this.st3 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t3 !== 0) {
        this._servCorrelativas.t3 = this.t3;     // Asigno nota al service
        this.mnt3 = true;   // Muestro la nota
        this.ct3 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st3 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Tecnología del Frío y Calor (T4)
  cargarNotaT4(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t4 >= 0 && this.t4 <= 10) {
      
      this.st4 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t4 !== 0) {
        this._servCorrelativas.t4 = this.t4;     // Asigno nota al service
        this.mnt4 = true;   // Muestro la nota
        this.ct4 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st4 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Mantenimiento Industrial III (T5)
  cargarNotaT5(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t5 >= 0 && this.t5 <= 10) {
      
      this.st5 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t5 !== 0) {
        this._servCorrelativas.t5 = this.t5;     // Asigno nota al service
        this.mnt5 = true;   // Muestro la nota
        this.ct5 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st5 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Automatización y Control (T6)
  cargarNotaT6(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t6 >= 0 && this.t6 <= 10) {
      
      this.st6 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t6 !== 0) {
        this._servCorrelativas.t6 = this.t6;     // Asigno nota al service
        this.mnt6 = true;   // Muestro la nota
        this.ct6 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st6 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Abastecimiento, Costos y Control de Gestión del Mantenimiento (T7)
  cargarNotaT7(): void {
        
    // Confirmo valor dentro de parametros
    if (this.t7 >= 0 && this.t7 <= 10) {
      
      this.st7 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t7 !== 0) {
        this._servCorrelativas.t7 = this.t7;     // Asigno nota al service
        this.mnt7 = true;   // Muestro la nota
        this.ct7 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st7 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Neumática e Hidráulica (T8)
  cargarNotaT8(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t8 >= 0 && this.t8 <= 10) {
      
      this.st8 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t8 !== 0) {
        this._servCorrelativas.t8 = this.t8;     // Asigno nota al service
        this.mnt8 = true;   // Muestro la nota
        this.ct8 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st8 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Práctica Profesionalizante II (T9)
  cargarNotaT9(): void {
    
    // Confirmo valor dentro de parametros
    if (this.t9 >= 0 && this.t9 <= 10) {
      
      this.st9 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.t9 !== 0) {
        this._servCorrelativas.t9 = this.t9;     // Asigno nota al service
        this.mnt9 = true;   // Muestro la nota
        this.ct9 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.st9 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
///////////////////////////////////////
//   Botones de Modificar Notas      //
///////////////////////////////////////
  modificarT1(): void {
    if(this.statusBoton3 !== false) {
      this.ct1 = true;
    } else {
      this.ct1 = false;
    }
    this.ct1 = true;
    this.mnt1 = false;
  }

  modificarT2(): void {
    if(this.statusBoton3 !== false) {
      this.ct2 = true;
    } else {
      this.ct2 = false;
    }
    this.ct2 = true;
    this.mnt2 = false;
  }

  modificarT3(): void {
    if(this.statusBoton3 !== false) {
      this.ct3 = true;
    } else {
      this.ct3 = false;
    }
    this.ct3 = true;
    this.mnt3 = false;
  }

  modificarT4(): void {
    if(this.statusBoton3 !== false) {
      this.ct4 = true;
    } else {
      this.ct4 = false;
    }
    this.ct4 = true;
    this.mnt4 = false;
  }

  modificarT5(): void {
    if(this.statusBoton3 !== false) {
      this.ct5 = true;
    } else {
      this.ct5 = false;
    }
    this.ct5 = true;
    this.mnt5 = false;
  }

  modificarT6(): void {
    if(this.statusBoton3 !== false) {
      this.ct6 = true;
    } else {
      this.ct6 = false;
    }
    this.ct6 = true;
    this.mnt6 = false;
  }

  modificarT7(): void {
    if(this.statusBoton3 !== false) {
      this.ct7 = true;
    } else {
      this.ct7 = false;
    }
    this.ct7 = true;
    this.mnt7 = false;
  }

  modificarT8(): void {
    if(this.statusBoton3 !== false) {
      this.ct8 = true;
    } else {
      this.ct8 = false;
    }
    this.ct8 = true;
    this.mnt8 = false;
  }

  modificarT9(): void {
    if(this.statusBoton3 !== false) {
      this.ct9 = true;
    } else {
      this.ct9 = false;
    }
    this.ct9 = true;
    this.mnt9 = false;
  }

///////////////////////////////////////
//   Botones de Reset Notas          //
///////////////////////////////////////
  resetT1(): void {
    if(this.statusBoton3 !== false) {
      this.ct1 = true;
    } else {
      this.ct1 = false;
    }
    this.mnt1 = false;
    this.t1 = 0;
    this._servCorrelativas.t1 = 0;
  }

  resetT2(): void {
    if(this.statusBoton3 !== false) {
      this.ct2 = true;
    } else {
      this.ct2 = false;
    }
    this.mnt2 = false;
    this.t2 = 0;
    this._servCorrelativas.t2 = 0;
  }

  resetT3(): void {
    if(this.statusBoton3 !== false) {
      this.ct3 = true;
    } else {
      this.ct3 = false;
    }
    this.mnt3 = false;
    this.t3 = 0;
    this._servCorrelativas.t3 = 0;
  }

  resetT4(): void {
    if(this.statusBoton3 !== false) {
      this.ct4 = true;
    } else {
      this.ct4 = false;
    }
    this.mnt4 = false;
    this.t4 = 0;
    this._servCorrelativas.t4 = 0;
  }

  resetT5(): void {
    if(this.statusBoton3 !== false) {
      this.ct5 = true;
    } else {
      this.ct5 = false;
    }
    this.mnt5 = false;
    this.t5 = 0;
    this._servCorrelativas.t5 = 0;
  }

  resetT6(): void {
    if(this.statusBoton3 !== false) {
      this.ct6 = true;
    } else {
      this.ct6 = false;
    }
    this.mnt6 = false;
    this.t6 = 0;
    this._servCorrelativas.t6 = 0;
  }

  resetT7(): void {
    if(this.statusBoton3 !== false) {
      this.ct7 = true;
    } else {
      this.ct7 = false;
    }
    this.mnt7 = false;
    this.t7 = 0;
    this._servCorrelativas.t7 = 0;
  }

  resetT8(): void {
    if(this.statusBoton3 !== false) {
      this.ct8 = true;
    } else {
      this.ct8 = false;
    }
    this.mnt8 = false;
    this.t8 = 0;
    this._servCorrelativas.t8 = 0;
  }

  resetT9(): void {
    if(this.statusBoton3 !== false) {
      this.ct9 = true;
    } else {
      this.ct9 = false;
    }
    this.mnt9 = false;
    this.t9 = 0;
    this._servCorrelativas.t9 = 0;
  }

}