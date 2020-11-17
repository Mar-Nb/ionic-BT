import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauPageRoutingModule } from './bateau-routing.module';

import { BateauPage } from './bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauPageRoutingModule
  ],
  declarations: [BateauPage]
})
export class BateauPageModule {}
