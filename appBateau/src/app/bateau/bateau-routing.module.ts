import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauPage } from './bateau.page';

const routes: Routes = [
  {
    path: '',
    component: BateauPage
  },
  {
    path: 'detail-bateau',
    loadChildren: () => import('./detail-bateau/detail-bateau.module').then( m => m.DetailBateauPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauPageRoutingModule {}
