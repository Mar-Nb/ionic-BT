import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRestaurantPageRoutingModule } from './form-restaurant-routing.module';

import { FormRestaurantPage } from './form-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormRestaurantPageRoutingModule
  ],
  declarations: [FormRestaurantPage]
})
export class FormRestaurantPageModule {}
