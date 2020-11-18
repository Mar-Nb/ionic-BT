import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantPage } from './restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage
  },
  {
    path: 'detail-restaurant',
    loadChildren: () => import('./detail-restaurant/detail-restaurant.module').then( m => m.DetailRestaurantPageModule)
  },  {
    path: 'form-restaurant',
    loadChildren: () => import('./form-restaurant/form-restaurant.module').then( m => m.FormRestaurantPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPageRoutingModule {}
