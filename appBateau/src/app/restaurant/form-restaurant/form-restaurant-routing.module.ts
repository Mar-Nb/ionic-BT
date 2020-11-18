import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRestaurantPage } from './form-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: FormRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRestaurantPageRoutingModule {}
