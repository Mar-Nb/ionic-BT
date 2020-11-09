import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRestaurantPageRoutingModule } from './detail-restaurant-routing.module';

import { DetailRestaurantPage } from './detail-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRestaurantPageRoutingModule
  ],
  declarations: [DetailRestaurantPage]
})
export class DetailRestaurantPageModule {}
