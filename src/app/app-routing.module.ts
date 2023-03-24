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
import { DlrComponent } from './Componentes/dlr/dlr.component';
import { EstadoComponent } from './Componentes/estado/estado.component';
import { HorariosComponent } from './Componentes/horarios/horarios.component';

const routes: Routes = [
/*  { path: '', redirectTo: '', pathMatch: 'full'}, */
  { path: '', component: InicioComponent},
  { path: 'materias', component: MateriasComponent},
  { path: 'materias/primero', component: PrimerComponent},
  { path: 'materias/segundo', component: SegundoComponent},
  { path: 'materias/tercero', component: TerceroComponent},
  { path: 'horarios', component: HorariosComponent},
  { path: 'estado', component: EstadoComponent},
  { path: 'dlr', component: DlrComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
