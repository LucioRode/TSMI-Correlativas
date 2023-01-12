import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PrimerComponent } from './Componentes/primer/primer.component';
import { SegundoComponent } from './Componentes/segundo/segundo.component';
import { TerceroComponent } from './Componentes/tercero/tercero.component';
import { PieComponent } from './Componentes/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    InicioComponent,
    PrimerComponent,
    SegundoComponent,
    TerceroComponent,
    PieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
