import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrouvablePageRoutingModule } from './introuvable-routing.module';

import { IntrouvablePage } from './introuvable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrouvablePageRoutingModule
  ],
  declarations: [IntrouvablePage]
})
export class IntrouvablePageModule {}
