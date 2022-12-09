import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarpasswPageRoutingModule } from './cambiarpassw-routing.module';

import { CambiarpasswPage } from './cambiarpassw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarpasswPageRoutingModule
  ],
  declarations: [CambiarpasswPage]
})
export class CambiarpasswPageModule {}
