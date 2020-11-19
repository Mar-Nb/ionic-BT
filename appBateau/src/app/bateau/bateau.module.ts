import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauPageRoutingModule } from './bateau-routing.module';

import { BateauPage } from './bateau.page';
import {HeaderPageModule} from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BateauPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [BateauPage]
})
export class BateauPageModule {}
