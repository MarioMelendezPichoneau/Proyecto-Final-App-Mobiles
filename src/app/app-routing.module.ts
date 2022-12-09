import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./sincuenta/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'albergues',
    loadChildren: () => import('./sincuenta/albergues/albergues.module').then( m => m.AlberguesPageModule)
  },
  {
    path: 'miembros',
    loadChildren: () => import('./sincuenta/miembros/miembros.module').then( m => m.MiembrosPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./sincuenta/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'reportar',
    loadChildren: () => import('./logueado/reportar/reportar.module').then( m => m.ReportarPageModule)
  },
  {
    path: 'situaciones',
    loadChildren: () => import('./logueado/situaciones/situaciones.module').then( m => m.SituacionesPageModule)
  },
  {
    path: 'mapasituaciones',
    loadChildren: () => import('./logueado/mapasituaciones/mapasituaciones.module').then( m => m.MapasituacionesPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./general/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./general/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./general/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'cambiarpassw',
    loadChildren: () => import('./logueado/cambiarpassw/cambiarpassw.module').then( m => m.CambiarpasswPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
