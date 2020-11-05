import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListPage } from './product-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListPage
  },
  {
    path: 'product-single',
    loadChildren: () => import('./product-single/product-single.module').then( m => m.ProductSinglePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListPageRoutingModule {}
