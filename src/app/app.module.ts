import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//   Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//   Componentes
import { AppComponent } from './app.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PrimerComponent } from './Componentes/primer/primer.component';
import { SegundoComponent } from './Componentes/segundo/segundo.component';
import { TerceroComponent } from './Componentes/tercero/tercero.component';
import { PieComponent } from './Componentes/pie/pie.component';
import { BotonesComponent } from './Componentes/botones/botones.component';
import { MateriasComponent } from './Componentes/materias/materias.component';
import { DlrComponent } from './Componentes/dlr/dlr.component';
import { EstadoComponent } from './Componentes/estado/estado.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    InicioComponent,
    PrimerComponent,
    SegundoComponent,
    TerceroComponent,
    PieComponent,
    BotonesComponent,
    MateriasComponent,
    DlrComponent,
    EstadoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
      ],
      
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
