import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { InicioComponent } from './Componentes/inicio/inicio.component';

//Componentes
import { PrimerComponent } from './Componentes/primer/primer.component';
import { SegundoComponent } from './Componentes/segundo/segundo.component';
import { TerceroComponent } from './Componentes/tercero/tercero.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'primero', component: PrimerComponent},
  { path: 'segundo', component: SegundoComponent},
  { path: 'tercero', component: TerceroComponent},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
