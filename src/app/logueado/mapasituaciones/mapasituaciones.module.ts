import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapasituacionesPageRoutingModule } from './mapasituaciones-routing.module';

import { MapasituacionesPage } from './mapasituaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapasituacionesPageRoutingModule
  ],
  declarations: [MapasituacionesPage]
})
export class MapasituacionesPageModule {}
