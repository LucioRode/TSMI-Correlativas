import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';


//Componentes
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PrimerComponent } from './Componentes/primer/primer.component';
import { SegundoComponent } from './Componentes/segundo/segundo.component';
import { TerceroComponent } from './Componentes/tercero/tercero.component';
import { PieComponent } from './Componentes/pie/pie.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { MateriasComponent } from './Componentes/materias/materias.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full'},
  { path: 'info', component: InicioComponent},
  { path: 'materias', component: MateriasComponent},
  { path: 'primero', component: PrimerComponent},
  { path: 'segundo', component: SegundoComponent},
  { path: 'tercero', component: TerceroComponent},
  { path: '**', redirectTo: '/info', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
