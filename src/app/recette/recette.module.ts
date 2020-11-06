import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettePageRoutingModule } from './recette-routing.module';

import { RecettePage } from './recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettePageRoutingModule
  ],
  declarations: [RecettePage]
})
export class RecettePageModule {}
