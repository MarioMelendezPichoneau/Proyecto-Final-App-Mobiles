import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarpasswPage } from './cambiarpassw.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarpasswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarpasswPageRoutingModule {}
