import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {
/*
  /*   Variable de nota   */
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

  /*   Habilita la carga de datos   */
  textoBoton2 : string;
  statusBoton2 : boolean;

  /*   Variables para mostrar las notas de cada materia   */
  cs1 : boolean;
  cs2 : boolean;
  cs3 : boolean;
  cs4 : boolean;
  cs5 : boolean;
  cs6 : boolean;
  cs7 : boolean;
  cs8 : boolean;
  cs9 : boolean;
  
  /*   Variables booleana mostrar las notas de cada materia   */
  mns1 : boolean;
  mns2 : boolean;
  mns3 : boolean;
  mns4 : boolean;
  mns5 : boolean;
  mns6 : boolean;
  mns7 : boolean;
  mns8 : boolean;
  mns9 : boolean;

  //   Variables Notas Correlativas
  elect : number;
  fisica : number;
  mantInd : number;
  mate : number;
  meca : number;
  quimik : number;

  //    Variables para texto de errores
  emp : boolean;
  TMPP : string;
  bccs : number;
  electb : boolean;
  fisicab : boolean;
  mantIndb : boolean;
  mateb : boolean;
  mecab : boolean;
  quimikb : boolean;


  constructor(private _servCorrelativas : CorrelativasService, private router : Router) {
    
    //   Variable de notas 
    // Primer Año
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

    /*   Variable booleana de cargar notas   */
    this.textoBoton2 = "Ingresar Notas";
    this.statusBoton2 = false;
   
    /*   Variable booleana de mostrar carga de notas   */
    this.cs1 = false;
    this.cs2 = false;
    this.cs3 = false;
    this.cs4 = false;
    this.cs5 = false;
    this.cs6 = false;
    this.cs7 = false;
    this.cs8 = false;
    this.cs9 = false;

    /*   Variable booleana de mostrar notas   */
    this.mns1 = false;
    this.mns2 = false;
    this.mns3 = false;
    this.mns4 = false;
    this.mns5 = false;
    this.mns6 = false;
    this.mns7 = false;
    this.mns8 = false;
    this.mns9 = false;

    //   Variables Notas Correlativas
    this.elect = 0;
    this.fisica = 0;
    this.mantInd = 0;
    this.mate = 0;
    this.meca = 0;
    this.quimik = 0;
  
    //    Variables para texto de errores
    this.emp = false;
    this.TMPP = "Se registran materias pendientes de Aprobar";
    this.bccs = 0;
    this.electb = false;
    this.fisicab = false;
    this.mantIndb = false;
    this.mateb = false;
    this.mecab = false;
    this.quimikb = false;
 
  }

  ngOnInit(): void {
    //   Traigo todas las notas ya existentes, y las muestra
    this.resetVariablesS();
    this.traerNotasS();
    this.mostrarNotasPreCargadasS();
  }

  resetVariablesS(): void {
    this.s1 = 0;
    this.s2 = 0;
    this.s3 = 0;
    this.s4 = 0;
    this.s5 = 0;
    this.s6 = 0;
    this.s7 = 0;
    this.s8 = 0;
    this.s9 = 0;
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
  
  
  // Chekear que si hay nota cargada en variable
    mostrarNotasPreCargadasS(): void {
    if (this._servCorrelativas.s1 !== 0) {
      this.cs1 = false;    // Oculta carga de notras
      this.mns1 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s2 !== 0) {
      this.cs2 = false;    // Oculta carga de notras
      this.mns2 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s3 !== 0) {
      this.cs3 = false;    // Oculta carga de notras
      this.mns3 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s4 !== 0) {
      this.cs4 = false;    // Oculta carga de notras
      this.mns4 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s5 !== 0) {
      this.cs5 = false;    // Oculta carga de notras
      this.mns5 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s6 !== 0) {
      this.cs6 = false;    // Oculta carga de notras
      this.mns6 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s7 !== 0) {
      this.cs7 = false;    // Oculta carga de notras
      this.mns7 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s8 !== 0) {
      this.cs8 = false;    // Oculta carga de notras
      this.mns8 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.s9 !== 0) {
      this.cs9 = false;    // Oculta carga de notras
      this.mns9 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

  }

  habilitarLosCS(): void {
    this.cs1 = true;
    this.cs2 = true;
    this.cs3 = true;
    this.cs4 = true;
    this.cs5 = true;
    this.cs6 = true;
    this.cs7 = true;
    this.cs8 = true;
    this.cs9 = true;
  }

  ocultarLosCS(): void {
    this.cs1 = false;
    this.cs2 = false;
    this.cs3 = false;
    this.cs4 = false;
    this.cs5 = false;
    this.cs6 = false;
    this.cs7 = false;
    this.cs8 = false;
    this.cs9 = false;
  }


  resetCheckCorrelativas(): void {
    this.bccs = 0;
    this.emp = false;
    this.electb = false;
    this.fisicab = false;
    this.mantIndb = false;
    this.mateb = false;
    this.mecab = false;
    this.quimikb = false;
  }


  // Contrasta las Correlativas, lanza errores y oculta carga de datos
  checkCorrelativas(): void {
    //   Traigo las notas necesarias para comparar
    this.elect = this._servCorrelativas.p11;
    this.fisica = this._servCorrelativas.p3;
    this.mantInd = this._servCorrelativas.p10;
    this.mate = this._servCorrelativas.p4;
    this.meca = this._servCorrelativas.p9;
    this.quimik = this._servCorrelativas.p5;
    
    //   Chequeo materia: Elementos de Máquinas y Mecanismos
    if ( this.fisica >= 6 && this.mate >= 6 && this.meca >= 6 ) {
      this.cs4 = true;
      this.bccs = this.bccs + 1 ;
    } else {
      this.cs4 = false;
    }
    
    //   Chequeo materia: Tecnologías de los Materiales
    if ( this.quimik > 6 ) {
      this.cs5 = true;
      this.bccs = this.bccs + 1;
    } else {
      this.cs5 = false;
    }
    
    //   Chequeo materia: Mantenimiento Industrial II
    if ( this.mantInd >= 6 && this.elect >= 6 && this.meca >= 6 ) {
      this.cs6 = true;
      this.bccs = this.bccs + 1 ;
    } else {
      this.cs6 = false;
    }
    
    //   Chequeo materia: Instalaciones y Máquinas Eléctricas
    if ( this.elect >= 6 && this.mate >= 6 ) {
      this.cs7 = true;
      this.bccs = this.bccs + 1 ;
    } else {
      this.cs7 = false;
    }
    
    //    Aviso de materia pendiente
    if (this.elect < 6) {
      this.electb = true;
    }

    if (this.fisica < 6) {
      this.fisicab = true;
    }

    if (this.mantInd < 6) {
      this.mantIndb = true;
    }

    if (this.mate < 6) {
      this.mateb = true;
    }

    if (this.meca < 6) {
      this.mecab = true;
    }
    

    if (this.quimik < 6) {
      this.quimikb = true;
    }
    
    // Lanza Alerta
    if (this.bccs < 4 ) {
      this.emp = true;
    } else {
      this.emp = false;
    }

  }


  habilitarCargarNotaS(): void {
    this.resetCheckCorrelativas();
    this.traerNotasS();
    

    // Confirmacion estado de Seccion carga de notas
    if (this.statusBoton2 == false ) {
      this.statusBoton2 = true;
      this.habilitarLosCS(); //   Ocultar seccion de carga de notas
      this.textoBoton2 = "Salir"     // Cambio de texto del boton
      this.checkCorrelativas();
    } else {
      this.statusBoton2 = false;
      this.ocultarLosCS();   //   Ocultar seccion de carga de notas
      this.textoBoton2 = "Ingresar Notas"     // Volver el texto del boton a su estado natural
      }

      this.mostrarNotasPreCargadasS();
  }


///////////////////////////////////////
//   Botones de Cargar Notas      //
///////////////////////////////////////

  // Botones de materia Problemáticas Socio Contemporáneas (S1)
  cargarNotaS1(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s1 >= 0 && this.s1 <= 10) {
      
      this.ss1 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s1 !== 0) {
        this._servCorrelativas.s1 = this.s1;     // Asigno nota al service
        this.mns1 = true;   // Muestro la nota
        this.cs1 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss1 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }

  // Botones de materia UDI II (S2)
  cargarNotaS2(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s2 >= 0 && this.s2 <= 10) {
      
      this.ss2 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s2 !== 0) {
        this._servCorrelativas.s2 = this.s2;     // Asigno nota al service
        this.mns2 = true;   // Muestro la nota
        this.cs2 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss2 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Innovación y Desarrollo Emprendedor (S3)
  cargarNotaS3(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s3 >= 0 && this.s3 <= 10) {
      
      this.ss3 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s3 !== 0) {
        this._servCorrelativas.s3 = this.s3;     // Asigno nota al service
        this.mns3 = true;   // Muestro la nota
        this.cs3 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss3 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Elementos de Máquinas y Mecanismos (S4)
  cargarNotaS4(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s4 >= 0 && this.s4 <= 10) {
      
      this.ss4 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s4 !== 0) {
        this._servCorrelativas.s4 = this.s4;     // Asigno nota al service
        this.mns4 = true;   // Muestro la nota
        this.cs4 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss4 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Tecnologías de los Materiales (S5)
  cargarNotaS5(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s5 >= 0 && this.s5 <= 10) {
      
      this.ss5 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s5 !== 0) {
        this._servCorrelativas.s5 = this.s5;     // Asigno nota al service
        this.mns5 = true;   // Muestro la nota
        this.cs5 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss5 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Mantenimiento Industrial II (S6)
  cargarNotaS6(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s6 >= 0 && this.s6 <= 10) {
      
      this.ss6 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s6 !== 0) {
        this._servCorrelativas.s6 = this.s6;     // Asigno nota al service
        this.mns6 = true;   // Muestro la nota
        this.cs6 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss6 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Instalaciones y Máquinas Eléctricas (S7)
  cargarNotaS7(): void {
        
    // Confirmo valor dentro de parametros
    if (this.s7 >= 0 && this.s7 <= 10) {
      
      this.ss7 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s7 !== 0) {
        this._servCorrelativas.s7 = this.s7;     // Asigno nota al service
        this.mns7 = true;   // Muestro la nota
        this.cs7 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss7 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Inglés Técnico (S8)
  cargarNotaS8(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s8 >= 0 && this.s8 <= 10) {
      
      this.ss8 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s8 !== 0) {
        this._servCorrelativas.s8 = this.s8;     // Asigno nota al service
        this.mns8 = true;   // Muestro la nota
        this.cs8 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss8 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Práctica Profesionalizante I (S9)
  cargarNotaS9(): void {
    
    // Confirmo valor dentro de parametros
    if (this.s9 >= 0 && this.s9 <= 10) {
      
      this.ss9 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.s9 !== 0) {
        this._servCorrelativas.s9 = this.s9;     // Asigno nota al service
        this.mns9 = true;   // Muestro la nota
        this.cs9 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.ss9 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
///////////////////////////////////////
//   Botones de Modificar Notas      //
///////////////////////////////////////
  modificarS1(): void {
    if(this.statusBoton2 !== false) {
      this.cs1 = true;
    } else {
      this.cs1 = false;
    }
    this.cs1 = true;
    this.mns1 = false;
  }

  modificarS2(): void {
    if(this.statusBoton2 !== false) {
      this.cs2 = true;
    } else {
      this.cs2 = false;
    }
    this.cs2 = true;
    this.mns2 = false;
  }

  modificarS3(): void {
    if(this.statusBoton2 !== false) {
      this.cs3 = true;
    } else {
      this.cs3 = false;
    }
    this.cs3 = true;
    this.mns3 = false;
  }

  modificarS4(): void {
    if(this.statusBoton2 !== false) {
      this.cs4 = true;
    } else {
      this.cs4 = false;
    }
    this.cs4 = true;
    this.mns4 = false;
  }

  modificarS5(): void {
    if(this.statusBoton2 !== false) {
      this.cs5 = true;
    } else {
      this.cs5 = false;
    }
    this.cs5 = true;
    this.mns5 = false;
  }

  modificarS6(): void {
    if(this.statusBoton2 !== false) {
      this.cs6 = true;
    } else {
      this.cs6 = false;
    }
    this.cs6 = true;
    this.mns6 = false;
  }

  modificarS7(): void {
    if(this.statusBoton2 !== false) {
      this.cs7 = true;
    } else {
      this.cs7 = false;
    }
    this.cs7 = true;
    this.mns7 = false;
  }

  modificarS8(): void {
    if(this.statusBoton2 !== false) {
      this.cs8 = true;
    } else {
      this.cs8 = false;
    }
    this.cs8 = true;
    this.mns8 = false;
  }

  modificarS9(): void {
    if(this.statusBoton2 !== false) {
      this.cs9 = true;
    } else {
      this.cs9 = false;
    }
    this.cs9 = true;
    this.mns9 = false;
  }

///////////////////////////////////////
//   Botones de Reset Notas          //
///////////////////////////////////////
  resetS1(): void {
    if(this.statusBoton2 !== false) {
      this.cs1 = true;
    } else {
      this.cs1 = false;
    }
    this.mns1 = false;
    this.s1 = 0;
    this._servCorrelativas.s1 = 0;
  }

  resetS2(): void {
    if(this.statusBoton2 !== false) {
      this.cs2 = true;
    } else {
      this.cs2 = false;
    }
    this.mns2 = false;
    this.s2 = 0;
    this._servCorrelativas.s2 = 0;
  }

  resetS3(): void {
    if(this.statusBoton2 !== false) {
      this.cs3 = true;
    } else {
      this.cs3 = false;
    }
    this.mns3 = false;
    this.s3 = 0;
    this._servCorrelativas.s3 = 0;
  }

  resetS4(): void {
    if(this.statusBoton2 !== false) {
      this.cs4 = true;
    } else {
      this.cs4 = false;
    }
    this.mns4 = false;
    this.s4 = 0;
    this._servCorrelativas.s4 = 0;
  }

  resetS5(): void {
    if(this.statusBoton2 !== false) {
      this.cs5 = true;
    } else {
      this.cs5 = false;
    }
    this.mns5 = false;
    this.s5 = 0;
    this._servCorrelativas.s5 = 0;
  }

  resetS6(): void {
    if(this.statusBoton2 !== false) {
      this.cs6 = true;
    } else {
      this.cs6 = false;
    }
    this.mns6 = false;
    this.s6 = 0;
    this._servCorrelativas.s6 = 0;
  }

  resetS7(): void {
    if(this.statusBoton2 !== false) {
      this.cs7 = true;
    } else {
      this.cs7 = false;
    }
    this.mns7 = false;
    this.s7 = 0;
    this._servCorrelativas.s7 = 0;
  }

  resetS8(): void {
    if(this.statusBoton2 !== false) {
      this.cs8 = true;
    } else {
      this.cs8 = false;
    }
    this.mns8 = false;
    this.s8 = 0;
    this._servCorrelativas.s8 = 0;
  }

  resetS9(): void {
    if(this.statusBoton2 !== false) {
      this.cs9 = true;
    } else {
      this.cs9 = false;
    }
    this.mns9 = false;
    this.s9 = 0;
    this._servCorrelativas.s9 = 0;
  }

}