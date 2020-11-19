import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRecettePageRoutingModule } from './detail-recette-routing.module';

import { DetailRecettePage } from './detail-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRecettePageRoutingModule
  ],
  declarations: [DetailRecettePage]
})
export class DetailRecettePageModule {}
