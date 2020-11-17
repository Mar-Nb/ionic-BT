import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBateauPageRoutingModule } from './detail-bateau-routing.module';

import { DetailBateauPage } from './detail-bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBateauPageRoutingModule
  ],
  declarations: [DetailBateauPage]
})
export class DetailBateauPageModule {}
