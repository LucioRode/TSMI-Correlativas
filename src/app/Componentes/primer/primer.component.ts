import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {

  /*   Variable de nota   */
  //   Primer Año
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
  
  /*   Variables booleanas de error fuera de rango de las variables   */
  sp1 : boolean;
  sp2 : boolean;
  sp3 : boolean;
  sp4 : boolean;
  sp5 : boolean;
  sp6 : boolean;
  sp7 : boolean;
  sp8 : boolean;
  sp9 : boolean;
  sp10 : boolean;
  sp11 : boolean;

  /*   Habilita la carga de datos   */
  textoBoton1 : string;
  statusBoton1 : boolean;
  
  /*   Variables para mostrar las notas de cada materia   */
  cp1 : boolean;
  cp2 : boolean;
  cp3 : boolean;
  cp4 : boolean;
  cp5 : boolean;
  cp6 : boolean;
  cp7 : boolean;
  cp8 : boolean;
  cp9 : boolean;
  cp10 : boolean;
  cp11 : boolean;
  
  /*   Variables booleana mostrar las notas de cada materia   */
  mnp1 : boolean;
  mnp2 : boolean;
  mnp3 : boolean;
  mnp4 : boolean;
  mnp5 : boolean;
  mnp6 : boolean;
  mnp7 : boolean;
  mnp8 : boolean;
  mnp9 : boolean;
  mnp10 : boolean;
  mnp11 : boolean;

  constructor(private _servCorrelativas : CorrelativasService, private router : Router) {
    
    //   Variable de notas 
    // Primer Año
    this.p1 = this._servCorrelativas.p1;
    this.p2 = this._servCorrelativas.p2;
    this.p3 = this._servCorrelativas.p3;
    this.p4 = this._servCorrelativas.p4;
    this.p5 = this._servCorrelativas.p5;
    this.p6 = this._servCorrelativas.p6;
    this.p7 = this._servCorrelativas.p7;
    this.p8 = this._servCorrelativas.p8;
    this.p9 = this._servCorrelativas.p9;
    this.p10 = this._servCorrelativas.p10;
    this.p11 = this._servCorrelativas.p11;

    /*   Variable booleana de error fuera de rango   */
    this.sp1 = false;
    this.sp2 = false;
    this.sp3 = false;
    this.sp4 = false;
    this.sp5 = false;
    this.sp6 = false;
    this.sp7 = false;
    this.sp8 = false;
    this.sp9 = false;
    this.sp10 = false;
    this.sp11 = false;

    /*   Variable booleana de cargar notas   */
    this.textoBoton1 = "Ingresar Notas";
    this.statusBoton1 = false;
   
    /*   Variable booleana de mostrar carga de notas   */
    this.cp1 = false;
    this.cp2 = false;
    this.cp3 = false;
    this.cp4 = false;
    this.cp5 = false;
    this.cp6 = false;
    this.cp7 = false;
    this.cp8 = false;
    this.cp9 = false;
    this.cp10 = false;
    this.cp11 = false;

    /*   Variable booleana de mostrar notas   */
    this.mnp1 = false;
    this.mnp2 = false;
    this.mnp3 = false;
    this.mnp4 = false;
    this.mnp5 = false;
    this.mnp6 = false;
    this.mnp7 = false;
    this.mnp8 = false;
    this.mnp9 = false;
    this.mnp10 = false;
    this.mnp11 = false;
  }

  ngOnInit(): void {
    //   Traigo todas las notas ya existentes, y las muestra
    this.resetVariables();
    this.traerNotasP();
    this.mostrarNotasPreCargadas();
  }

  resetVariables(): void {
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
  }

  //   Traigo todas las notas del primer año ya existentes, y las muestra
  traerNotasP(): void {
    this.p1 = this._servCorrelativas.p1;
    this.p2 = this._servCorrelativas.p2;
    this.p3 = this._servCorrelativas.p3;
    this.p4 = this._servCorrelativas.p4;
    this.p5 = this._servCorrelativas.p5;
    this.p6 = this._servCorrelativas.p6;
    this.p7 = this._servCorrelativas.p7;
    this.p8 = this._servCorrelativas.p8;
    this.p9 = this._servCorrelativas.p9;
    this.p10 = this._servCorrelativas.p10;
    this.p11 = this._servCorrelativas.p11;
  }

  // Chekear que si hay nota cargada en variable
    mostrarNotasPreCargadas(): void {
    if (this._servCorrelativas.p1 !== 0) {
      this.cp1 = false;    // Oculta carga de notras
      this.mnp1 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p2 !== 0) {
      this.cp2 = false;    // Oculta carga de notras
      this.mnp2 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p3 !== 0) {
      this.cp3 = false;    // Oculta carga de notras
      this.mnp3 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p4 !== 0) {
      this.cp4 = false;    // Oculta carga de notras
      this.mnp4 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p5 !== 0) {
      this.cp5 = false;    // Oculta carga de notras
      this.mnp5 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p6 !== 0) {
      this.cp6 = false;    // Oculta carga de notras
      this.mnp6 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p7 !== 0) {
      this.cp7 = false;    // Oculta carga de notras
      this.mnp7 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p8 !== 0) {
      this.cp8 = false;    // Oculta carga de notras
      this.mnp8 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p9 !== 0) {
      this.cp9 = false;    // Oculta carga de notras
      this.mnp9 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p10 !== 0) {
      this.cp10 = false;    // Oculta carga de notras
      this.mnp10 = true;    // Hacer visible la nota, y sus botones de modificacion
    }

    if (this._servCorrelativas.p11 !== 0) {
      this.cp11 = false;    // Oculta carga de notras
      this.mnp11 = true;    // Hacer visible la nota, y sus botones de modificacion
    }
  }

  habilitarLosCP(): void {
    this.cp1 = true;
    this.cp2 = true;
    this.cp3 = true;
    this.cp4 = true;
    this.cp5 = true;
    this.cp6 = true;
    this.cp7 = true;
    this.cp8 = true;
    this.cp9 = true;
    this.cp10 = true;
    this.cp11 = true;    
  }

  ocultarLosCP(): void {
    this.cp1 = false;
    this.cp2 = false;
    this.cp3 = false;
    this.cp4 = false;
    this.cp5 = false;
    this.cp6 = false;
    this.cp7 = false;
    this.cp8 = false;
    this.cp9 = false;
    this.cp10 = false;
    this.cp11 = false;    
  }


  habilitarCargarNota(): void {

    this.traerNotasP();

    // Confirmacion estado de Seccion carga de notas
    if (this.statusBoton1 == false ) {
      this.statusBoton1 = true;
      this.habilitarLosCP(); //   Ocultar seccion de carga de notas
      this.textoBoton1 = "Salir"     // Cambio de texto del boton
    } else {
      this.statusBoton1 = false;
      this.ocultarLosCP();   //   Ocultar seccion de carga de notas
      this.textoBoton1 = "Ingresar Notas"     // Volver el texto del boton a su estado natural
      }
      this.mostrarNotasPreCargadas();
  }


///////////////////////////////////////
//   Botones de Cargar Notas      //
///////////////////////////////////////

  // Botones de materia Comunicacion (P1)
  cargarNotaP1(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p1 >= 0 && this.p1 <= 10) {
      
      this.sp1 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p1 !== 0) {
        this._servCorrelativas.p1 = this.p1;     // Asigno nota al service
        this.mnp1 = true;   // Muestro la nota
        this.cp1 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp1 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }

  // Botones de materia UDI (P2)
  cargarNotaP2(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p2 >= 0 && this.p2 <= 10) {
      
      this.sp2 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p2 !== 0) {
        this._servCorrelativas.p2 = this.p2;     // Asigno nota al service
        this.mnp2 = true;   // Muestro la nota
        this.cp2 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp2 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Fisica (P3)
  cargarNotaP3(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p3 >= 0 && this.p3 <= 10) {
      
      this.sp3 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p3 !== 0) {
        this._servCorrelativas.p3 = this.p3;     // Asigno nota al service
        this.mnp3 = true;   // Muestro la nota
        this.cp3 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp3 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Matemáticas y Estadística (P4)
  cargarNotaP4(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p4 >= 0 && this.p4 <= 10) {
      
      this.sp4 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p4 !== 0) {
        this._servCorrelativas.p4 = this.p4;     // Asigno nota al service
        this.mnp4 = true;   // Muestro la nota
        this.cp4 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp4 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Química General e Industrial (P5)
  cargarNotaP5(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p5 >= 0 && this.p5 <= 10) {
      
      this.sp5 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p5 !== 0) {
        this._servCorrelativas.p5 = this.p5;     // Asigno nota al service
        this.mnp5 = true;   // Muestro la nota
        this.cp5 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp5 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Informática (P6)
  cargarNotaP6(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p6 >= 0 && this.p6 <= 10) {
      
      this.sp6 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p6 !== 0) {
        this._servCorrelativas.p6 = this.p6;     // Asigno nota al service
        this.mnp6 = true;   // Muestro la nota
        this.cp6 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp6 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Gestión de las Organizaciones y de la Calidad (P7)
  cargarNotaP7(): void {
        
    // Confirmo valor dentro de parametros
    if (this.p7 >= 0 && this.p7 <= 10) {
      
      this.sp7 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p7 !== 0) {
        this._servCorrelativas.p7 = this.p7;     // Asigno nota al service
        this.mnp7 = true;   // Muestro la nota
        this.cp7 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp7 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Sistemas de Representación (P8)
  cargarNotaP8(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p8 >= 0 && this.p8 <= 10) {
      
      this.sp8 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p8 !== 0) {
        this._servCorrelativas.p8 = this.p8;     // Asigno nota al service
        this.mnp8 = true;   // Muestro la nota
        this.cp8 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp8 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Mecánica (P9)
  cargarNotaP9(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p9 >= 0 && this.p9 <= 10) {
      
      this.sp9 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p9 !== 0) {
        this._servCorrelativas.p9 = this.p9;     // Asigno nota al service
        this.mnp9 = true;   // Muestro la nota
        this.cp9 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp9 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Mantenimiento Industrial I (P10)
  cargarNotaP10(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p10 >= 0 && this.p10 <= 10) {
      
      this.sp10 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p10 !== 0) {
        this._servCorrelativas.p10 = this.p10;     // Asigno nota al service
        this.mnp10 = true;   // Muestro la nota
        this.cp10 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp10 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
  // Botones de materia Electrotecnia (P11)
  cargarNotaP11(): void {
    
    // Confirmo valor dentro de parametros
    if (this.p11 >= 0 && this.p11 <= 10) {
      
      this.sp11 = false;  // Aviso de error "Fuera de Rango" oculto

      //  Confirmo que no hay valor asignado a la variable no es 0,
      if (this.p11 !== 0) {
        this._servCorrelativas.p11 = this.p11;     // Asigno nota al service
        this.mnp11 = true;   // Muestro la nota
        this.cp11 = false;   // Apago la carga de Nota
        this._servCorrelativas.calculoDeNotas();
      } 
    } else {
      this.sp11 = true;  // Aviso de error "Fuera de Rango" activado
    }
  }
  
///////////////////////////////////////
//   Botones de Modificar Notas      //
///////////////////////////////////////
  modificarP1(): void {
    if(this.statusBoton1 !== false) {
      this.cp1 = true;
    } else {
      this.cp1 = false;
    }
    this.cp1 = true;
    this.mnp1 = false;
  }

  modificarP2(): void {
    if(this.statusBoton1 !== false) {
      this.cp2 = true;
    } else {
      this.cp2 = false;
    }
    this.cp2 = true;
    this.mnp2 = false;
  }

  modificarP3(): void {
    if(this.statusBoton1 !== false) {
      this.cp3 = true;
    } else {
      this.cp3 = false;
    }
    this.cp3 = true;
    this.mnp3 = false;
  }

  modificarP4(): void {
    if(this.statusBoton1 !== false) {
      this.cp4 = true;
    } else {
      this.cp4 = false;
    }
    this.cp4 = true;
    this.mnp4 = false;
  }

  modificarP5(): void {
    if(this.statusBoton1 !== false) {
      this.cp5 = true;
    } else {
      this.cp5 = false;
    }
    this.cp5 = true;
    this.mnp5 = false;
  }

  modificarP6(): void {
    if(this.statusBoton1 !== false) {
      this.cp6 = true;
    } else {
      this.cp6 = false;
    }
    this.cp6 = true;
    this.mnp6 = false;
  }

  modificarP7(): void {
    if(this.statusBoton1 !== false) {
      this.cp7 = true;
    } else {
      this.cp7 = false;
    }
    this.cp7 = true;
    this.mnp7 = false;
  }

  modificarP8(): void {
    if(this.statusBoton1 !== false) {
      this.cp8 = true;
    } else {
      this.cp8 = false;
    }
    this.cp8 = true;
    this.mnp8 = false;
  }

  modificarP9(): void {
    if(this.statusBoton1 !== false) {
      this.cp9 = true;
    } else {
      this.cp9 = false;
    }
    this.cp9 = true;
    this.mnp9 = false;
  }

  modificarP10(): void {
    if(this.statusBoton1 !== false) {
      this.cp10 = true;
    } else {
      this.cp10 = false;
    }
    this.cp10 = true;
    this.mnp10 = false;
  }

  modificarP11(): void {
    if(this.statusBoton1 !== false) {
      this.cp11 = true;
    } else {
      this.cp11 = false;
    }
    this.cp11 = true;
    this.mnp11 = false;
  }

///////////////////////////////////////
//   Botones de Reset Notas          //
///////////////////////////////////////
  resetP1(): void {
    if(this.statusBoton1 !== false) {
      this.cp1 = true;
    } else {
      this.cp1 = false;
    }
    this.mnp1 = false;
    this.p1 = 0;
    this._servCorrelativas.p1 = 0;
  }

  resetP2(): void {
    if(this.statusBoton1 !== false) {
      this.cp2 = true;
    } else {
      this.cp2 = false;
    }
    this.mnp2 = false;
    this.p2 = 0;
    this._servCorrelativas.p2 = 0;
  }

  resetP3(): void {
    if(this.statusBoton1 !== false) {
      this.cp3 = true;
    } else {
      this.cp3 = false;
    }
    this.mnp3 = false;
    this.p3 = 0;
    this._servCorrelativas.p3 = 0;
  }

  resetP4(): void {
    if(this.statusBoton1 !== false) {
      this.cp4 = true;
    } else {
      this.cp4 = false;
    }
    this.mnp4 = false;
    this.p4 = 0;
    this._servCorrelativas.p4 = 0;
  }

  resetP5(): void {
    if(this.statusBoton1 !== false) {
      this.cp5 = true;
    } else {
      this.cp5 = false;
    }
    this.mnp5 = false;
    this.p5 = 0;
    this._servCorrelativas.p5 = 0;
  }

  resetP6(): void {
    if(this.statusBoton1 !== false) {
      this.cp6 = true;
    } else {
      this.cp6 = false;
    }
    this.mnp6 = false;
    this.p6 = 0;
    this._servCorrelativas.p6 = 0;
  }

  resetP7(): void {
    if(this.statusBoton1 !== false) {
      this.cp7 = true;
    } else {
      this.cp7 = false;
    }
    this.mnp7 = false;
    this.p7 = 0;
    this._servCorrelativas.p7 = 0;
  }

  resetP8(): void {
    if(this.statusBoton1 !== false) {
      this.cp8 = true;
    } else {
      this.cp8 = false;
    }
    this.mnp8 = false;
    this.p8 = 0;
    this._servCorrelativas.p8 = 0;
  }

  resetP9(): void {
    if(this.statusBoton1 !== false) {
      this.cp9 = true;
    } else {
      this.cp9 = false;
    }
    this.mnp9 = false;
    this.p9 = 0;
    this._servCorrelativas.p9 = 0;
  }

  resetP10(): void {
    if(this.statusBoton1 !== false) {
      this.cp10 = true;
    } else {
      this.cp10 = false;
    }
    this.mnp10 = false;
    this.p10 = 0;
    this._servCorrelativas.p10 = 0;
  }

  resetP11(): void {
    if(this.statusBoton1 !== false) {
      this.cp11 = true;
    } else {
      this.cp11 = false;
    }
    this.mnp11 = false;
    this.p11 = 0;
    this._servCorrelativas.p11 = 0;
  }

}