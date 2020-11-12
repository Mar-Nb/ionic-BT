import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettePage } from './recette.page';

const routes: Routes = [
  {
    path: '',
    component: RecettePage
  },
  {
    path: 'detail-recette',
    loadChildren: () => import('./detail-recette/detail-recette.module').then( m => m.DetailRecettePageModule)
  },
  {
    path: 'detail-recette',
    loadChildren: () => import('./detail-recette/detail-recette.module').then( m => m.DetailRecettePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettePageRoutingModule {}
