import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapasituacionesPage } from './mapasituaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MapasituacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapasituacionesPageRoutingModule {}
